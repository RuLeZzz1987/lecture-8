import React from 'react';
import { withRouter } from 'react-router-dom';

const categories = ['animals', 'cats', 'city', 'food', 'people', 'nature', 'sports', 'transport'];


const onChange = (history, location) => event => {
  const {value, name} = event.target;

  const urlSearchParams = new URLSearchParams(location.search);
  urlSearchParams.set(name, value);

  history.push({
    pathname: location.pathname,
    search: urlSearchParams.toString(),
  })
};

const Filter = ({history, location}) => {

  const params = new URLSearchParams(location.search);
  const category = params.get('category') || '';
  const sort = params.get('sort') || 'asc';

  return (
    <>
      <select name="category" value={category} onChange={onChange(history, location)}>
        <option value="">...</option>
        {categories.map(category => (<option key={category} value={category}>{category}</option>))}
      </select>
      <select onChange={onChange(history, location)} name="sort" value={sort}>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </>
  );
};


export default withRouter(Filter);