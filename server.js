const express = require('express');
const app = express();
const faker = require('faker');
const articles = [];

const categories = ['animals', 'cats', 'city', 'food', 'people', 'nature', 'sports', 'transport'];

for (let i = 0; i < 100; i++) {
  const article = {
    title: faker.lorem.words(),
    text: faker.lorem.paragraphs(),
    author: `${faker.name.firstName('')} ${faker.name.lastName()}`,
    id: faker.random.number(),
    img: `https://picsum.photos/300/150?random=${i}`,
    category: faker.random.arrayElement(categories)
  };
  articles.push(article);

}

const sortFn = ({title:a}, {title:b}) => a > b ? 1 : a < b ? -1 : 0;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
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