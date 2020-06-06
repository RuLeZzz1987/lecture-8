import React, { Component } from 'react';
import { isAuthorized } from "../redux/selectors";
import { connect } from "react-redux";

const withAuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    componentDidMount() {
      if (this.props.isAuthorized) {
        this.props.history.replace('/');
      }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.isAuthorized !== this.props.isAuthorized) {
        this.props.history.replace('/');
      }
    }

    render() {
      return <BaseComponent {...this.props}/>
    }
  }

  const mapStateToProps = state => ({
    isAuthorized: isAuthorized(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect