import React, { Component } from 'react';
import axios from 'axios';
import Article from '../components/Article';

export default class ArticlePage extends Component {

  state = {article: null};

  componentDidMount() {
    axios
      .get(`http://localhost:4000/articles/${this.props.match.params.id}`)
      .then(({data: article}) => this.setState({article}));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      axios
        .get(`http://localhost:4000/articles/${this.props.match.params.id}`)
        .then(({data: article}) => this.setState({article}));
    }
  }

  render() {
    const {article} = this.state;

    return (
      <div>
        <Article article={article}/>
      </div>
    )
  }

}