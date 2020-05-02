const express = require('express');
const app = express();
const articles = require('./db/articles.json');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/articles', (req, res) => {
  res.json(articles)
});

app.get('/articles/:id', (req, res) => {
  const article = articles.find(article => article.id === Number(req.params.id));

  if (!article) return res.status(404).json({error: 'Not found'});

  res.json(article);
});

app.listen(4000, () => console.log('Listening...'));