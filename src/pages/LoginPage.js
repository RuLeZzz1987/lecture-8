import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, changeLoginFormField } from "../redux/action";
import { isAuthorized } from "../redux/selectors";

export class LoginPage extends Component {


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.isAuthorized !== this.props.isAuthorized) {
      this.props.history.push('/');
    }
  }

  render() {
    const {changeLoginFormField, login, email, password} = this.props;

    return (
      <div className="container">
        <div className="col-xs-12 col-md-offset-2 col-md-8">
          <div className="form-group">
            <label>
              Email:
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={changeLoginFormField}
                value={email}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password:
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={changeLoginFormField}
                value={password}
              />
            </label>
          </div>
          <button onClick={login} className="btn btn-primary">Login</button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  email: state.loginForm.email,
  password: state.loginForm.password,
  isAuthorized: isAuthorized(state)
});

const mapDispatchToProps = dispatch => ({
  login: (e) => {
    e.preventDefault();
    dispatch(login());
  },
  changeLoginFormField: ({currentTarget: {name, value}}) => dispatch(changeLoginFormField({name, value}))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)