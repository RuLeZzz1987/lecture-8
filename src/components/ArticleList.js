import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticlesList = ({articles, match}) => articles.length && (
  <ul>
    {articles.map(article => (
      <li key={article.id}><Link to={`${match.path}/${article.id}`}>{article.title}</Link></li>
    ))}
  </ul>
);

export default withRouter(ArticlesList);