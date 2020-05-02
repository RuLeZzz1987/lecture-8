import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticlesList = ({articles, match, location}) => articles.length && (
  <ul>
    {articles.map(article => (
      <li key={article.id}>
        <Link to={{
          pathname: `${match.path}/${article.id}`,
          state: {
            from: location
          }
        }}
        >
          {article.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(ArticlesList);