import React, { Component } from 'react';
import axios from 'axios';
import ArticlesList from '../components/ArticleList';
import ArticlePage from "./ArticlePage";
import { Route } from "react-router-dom";

export default class ArticlesPage extends Component {

  state = {
    articles: []
  };

  componentDidMount() {
    axios.get('http://localhost:4000/articles').then(({data:articles}) => this.setState({articles}));
  }

  render() {
    const {articles} = this.state;

    return (
      <div>
        <h2>Articles</h2>
        <ArticlesList articles={articles}/>
        <Route path={`${this.props.match.path}/:id`} component={ArticlePage}/>
      </div>
    )
  }
}