import React, { Component } from 'react';
import axios from 'axios';
import ArticlesList from '../components/ArticleList';
import Filters from '../components/Filters';
import { connect } from "react-redux";
import { loadArticles } from "../redux/action";
// const categories = ['animals', 'cats', 'city', 'food', 'people', 'nature', 'sports', 'transport'];

class ArticlesPage extends Component {

  state = {
    articles: []
  };

  componentDidMount() {
    this.props.loadArticles(this.props.location.search);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location !== this.props.location) {
      this.props.loadArticles(this.props.location.search);
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
    const {articles} = this.props;


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

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  loadArticles: search => dispatch(loadArticles(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage)