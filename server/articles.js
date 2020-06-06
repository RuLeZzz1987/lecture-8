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

module.exports = articles;