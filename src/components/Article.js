import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Article extends Component {

  handleGoBack = () => this.props.history.push(`/${this.props.match.path.split('/').shift()}`);

  render() {

    const {article} = this.props;
    if (!article) {
      return null;
    }

    const {title, author, img, text} = article;

    return (
      <div>
        <h3>Article Page</h3>
        <h2>{title}</h2>
        <img src={img} alt="photo" width={300} height={150}/>
        <p>{author}</p>
        <p>{text}</p>
        <button onClick={this.handleGoBack}>go back</button>
      </div>
    )
  }
}

export default withRouter(Article);