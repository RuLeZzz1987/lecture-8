import React, { Component } from 'react';
import Article from '../components/Article';
import { connect } from 'react-redux';
import { loadArticle } from '../redux/action';

class ArticlePage extends Component {

  componentDidMount() {
    this.props.loadArticle(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.loadArticle(this.props.match.params.id);
    }
  }

  render() {
    const {article} = this.props;

    return (
      <div>
        <Article article={article}/>
      </div>
    )
  }

}

const mapStateTopProps = state => ({
  article: state.article
});

const mapDispatchToProps = dispatch => ({
  loadArticle: id => dispatch(loadArticle(id))
});

export default connect(mapStateTopProps, mapDispatchToProps)(ArticlePage);