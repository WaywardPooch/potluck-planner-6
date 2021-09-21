// Libraries
import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
// Styles
import "./LogInPage.scss";
// Custom components
import LogInForm from "../../components/LogInForm.js";
import SignUpForm from "../../components/SignUpForm.js";

const LogInPage = () => {
  return (
    <section className="login-page">
      {/* Desktop Size Limit Container */}
      <div className="login-page-content">
        {/* Start of the LogIn card */}
        <div className="login-area">
          {/* Login Card Label Area */}
          <div className="login-area-top">
            <h1>Account</h1>
          </div>
          {/* Login Card Content Area */}
          <div className="login-area-bottom">
            {/* Allow user to flip between login/signup */}
            <div className="login-links">
              <NavLink exact to="/account" activeClassName="active-navlink">
                Log In
              </NavLink>
              <NavLink to="/account/signup" activeClassName="active-navlink">
                Sign Up
              </NavLink>
            </div>
            {/* Display Form Based on User Choice */}
            <Switch>
              <Route exact path="/account/signup">
                <SignUpForm />
              </Route>
              <Route path="/account">
                <LogInForm />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
