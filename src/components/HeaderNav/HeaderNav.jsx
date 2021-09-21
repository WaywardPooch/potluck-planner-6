import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./HeaderNav.scss";

const HeaderNav = () => {
  return (
    <header className="header-navbar">
      <div className="header-content">
        <div className="header-left">
          <Link exact to="/"><h2>Potluck Planner</h2></Link>
        </div>
        <nav className="header-right">
          <NavLink to="/potlucks/create" activeClassName="active-navlink">Create</NavLink>
          <NavLink to="/account" activeClassName="active-navlink">Log In</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
