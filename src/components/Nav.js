import { NavLink } from "react-router-dom";
import React from "react";


const linkStyle = {
  color: 'red'
};

const Nav = () => (
  <ul>
    <li><NavLink activeStyle={linkStyle} exact to="/">home page</NavLink></li>
    <li><NavLink activeStyle={linkStyle} to="/about-us">about us page</NavLink></li>
    <li><NavLink activeStyle={linkStyle} to="/qwe">articles</NavLink></li>
  </ul>
);

export default Nav;