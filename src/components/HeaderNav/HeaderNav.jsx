// Libraries
import React from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
// Styles
import "./HeaderNav.scss";

const HeaderNav = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;

  // Helper function for toggling log in state
  const toggleLogIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="header-navbar">
      <div className="header-content">
        <div className="header-left">
          <Link to="/">
            <h2>Potluck Planner</h2>
          </Link>
        </div>
        <nav className="header-right">
          {/* If on the login page, hide the nav from user */}
          <Switch>
            <Route path="/account" />
            <Route path="/">
              <button className="dev-button" onClick={toggleLogIn}>
                [DEV] Toggle LogIn
              </button>
              {!isLoggedIn ? (
                // If the user is not logged in, show "Log In" entry in nav
                <NavLink to="/account" activeClassName="active-navlink">
                  Log In
                </NavLink>
              ) : (
                // Otherwise, show log out entry (PLACEHOLDER: WILL NEED TO BE CHANGED!!!)
                <Link
                  to="/"
                  onClick={toggleLogIn}
                >
                  Log Out
                </Link>
              )}
            </Route>
          </Switch>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
