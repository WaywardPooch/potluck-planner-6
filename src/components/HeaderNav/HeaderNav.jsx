import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./HeaderNav.scss";

const HeaderNav = (props) => {
  const { isLoggedIn } = props;

  return (
    <header className="header-navbar">
      <div className="header-content">
        <div className="header-left">
          <Link exact to="/"><h2>Potluck Planner</h2></Link>
        </div>
        <nav className="header-right">
          {!isLoggedIn 
            // If the user is not logged in, show "Log In" entry in nav
            ? <NavLink to="/account" activeClassName="active-navlink">Log In</NavLink>
            // Otherwise, show log out entry (PLACEHOLDER: WILL NEED TO BE CHANGED!!!)
            : <NavLink to="/account" activeClassName="active-navlink">Log Out</NavLink>
          }
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
