import React, { Component } from 'react';
import axios from 'axios';
import ArticlesList from '../components/ArticleList';
import Filters from '../components/Filters';
// const categories = ['animals', 'cats', 'city', 'food', 'people', 'nature', 'sports', 'transport'];

export default class ArticlesPage extends Component {

  state = {
    articles: []
  };

  componentDidMount() {
    axios.get(`http://localhost:4000/articles${this.props.location.search}`)
      .then(({data:articles}) => this.setState({articles}));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location !== this.props.location) {
      axios.get(`http://localhost:4000/articles${this.props.location.search}`)
        .then(({data:articles}) => this.setState({articles}));
    }

  }

  // onChange = (event) => {
  //   const {value, name} = event.target;
  //
  //   const urlSearchParams = new URLSearchParams(this.props.location.search);
  //   urlSearchParams.set(name, value);
  //
  //   this.props.history.push({
  //     pathname: this.props.location.pathname,
  //     search: urlSearchParams.toString(),
  //   })
  // };

  render() {
    const {articles} = this.state;


    // const {location} = this.props;
    //
    // const params = new URLSearchParams(location.search);
    // const category = params.get('category') || '';
    // const sort = params.get('sort') || 'asc';

    return (
      <div>
        <h2>Articles</h2>
        {/*<select name="category" value={category} onChange={this.onChange}>*/}
        {/*  <option value="">...</option>*/}
        {/*  {categories.map(category => (<option key={category} value={category}>{category}</option>))}*/}
        {/*</select>*/}
        {/*<select onChange={this.onChange} name="sort" value={sort}>*/}
        {/*  <option value="asc">ascending</option>*/}
        {/*  <option value="desc">descending</option>*/}
        {/*</select>*/}


        <Filters />

        <ArticlesList articles={articles}/>
      </div>
    )
  }
}