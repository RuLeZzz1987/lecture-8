import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Article extends Component {

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state) {
      this.props.history.push(state.from);
      return;
    }

    this.props.history.push({
      pathname: '/articles',
    });
  };

  render() {

    const {article} = this.props;
    if (!article) {
      return null;
    }

    const {title, author, img, text, category} = article;

    return (
      <div>
        <h3>Article Page</h3>
        <h2>{title}</h2>
        <img src={img} width={300} height={150}/>
        <h4>Author: {author}</h4>
        <p>Category: <b>{category}</b></p>
        <p>{text}</p>
        <button onClick={this.handleGoBack}>go back</button>
      </div>
    )
  }
}

export default withRouter(Article);