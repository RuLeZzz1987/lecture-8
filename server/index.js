const express = require('express');
const app = express();
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const secret = 'secret';
const usersService = require('./users');
const articles = require('./articles');

const authMiddleware = expressJwt({ secret });
const {UnauthorizedError} = authMiddleware;

const sortFn = ({title:a}, {title:b}) => a > b ? 1 : a < b ? -1 : 0;

app.use(logger('dev'));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json());

app.use(expressJwt({ secret }).unless({path: ['/login', 'sign-up']}));

app.use('/sign-up', (req, res) => {
  const {body: userPayload} = req;
  const user = usersService.createUser(userPayload);

  const token = jwt.sign(user, secret);
  res.json({
    user,
    token
  })
});

app.use('/login', (req, res) => {
  const {email, password} = req.body;
  const user = usersService.findUserByEmail(email);

  if (!user) {
    return res.status(404).json(new UnauthorizedError('user-not-found', {message: 'User not found'}));
  }

  if (user.password !== password) {
    return res.status(401).json(new UnauthorizedError('wrong-credentials'), {message: 'Wrong credentials'});
  }

  const token = jwt.sign(user, secret);
  res.json({
    user,
    token
  })
});

app.get('/articles', (req, res) => {
  const {category, sort} = req.query;

  let response = [...articles];


  if (category) {
    response = articles.filter(article => article.category === category);
  }

  if (sort) {
    switch (sort) {
      case 'asc':
        response.sort(sortFn);
        break;
      case 'desc':
        response.sort(sortFn).reverse();
        break;
    }
  }

  res.json(response);
});

app.get('/articles/:id', (req, res) => {
  const article = articles.find(article => article.id === Number(req.params.id));

  if (!article) return res.status(404).json({error: 'Not found'});

  res.json(article);
});

app.listen(4000, () => console.log('Listening...'));