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
      <div>
        <div>
          <label>
            Email:
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={changeLoginFormField}
              value={email}
            />
          </label>
        </div>
        <div style={{margin: '20px 0'}}>
          <label>
            Password:
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={changeLoginFormField}
              value={password}
            />
          </label>
        </div>
        <button onClick={login}>Login</button>
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