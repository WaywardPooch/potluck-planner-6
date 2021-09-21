// Libraries
import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
// Styles
import "./AccountCard.scss";
// Custom components
import SignUpForm from "../SignUpForm.js"
import LogInForm from "../LogInForm.js"

const AccountCard = () => {
  return (
    <div className="login-area">
      {/* Login Card Label Area */}
      <div className="login-area-top">
        <h1>Account</h1>
      </div>
      {/* Login Card Content Area */}
      <div className="login-area-bottom">
        {/* Allow user to flip between login/signup */}
        {/* WARNING: Currently, the links are PICKY; this needs to be decoupled! */}
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
          <Route path="/account/signup">
            <SignUpForm />
          </Route>
          <Route path="/account">
            <LogInForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AccountCard;