import { NavLink } from "react-router-dom";
import React from "react";


const linkStyle = {
  color: 'red'
};

const Nav = ({isAuthorized, logout}) => (
  <nav className="navbar navbar-default">
    <div className="container">
      <ul className="nav navbar-nav">
        <li><NavLink activeStyle={linkStyle} exact to="/">home page</NavLink></li>
        <li><NavLink activeStyle={linkStyle} to="/about-us">about us page</NavLink></li>
        {isAuthorized && <li><NavLink activeStyle={linkStyle} to="/articles">articles</NavLink></li>}
        {!isAuthorized && <li><NavLink activeStyle={linkStyle} to="/login">login</NavLink></li>}
        {isAuthorized && <li><button onClick={logout} className="btn btn-primary">Logout</button></li>}
      </ul>
    </div>
  </nav>
);

export default Nav;