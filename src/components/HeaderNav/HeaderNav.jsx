import React from "react";
import { NavLink } from "react-router-dom";

import "./HeaderNav.scss";

const HeaderNav = (props) => {
  const { title } = props;

  return (
    <header className="header-navbar">
      <div className="header-content">
        <div className="header-left">
          <h2>{title}</h2>
        </div>
        <nav className="header-right">
          <NavLink exact to="/" activeClassName="active-navlink">Home</NavLink>
          <NavLink to="/account" activeClassName="active-navlink">Log In</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
