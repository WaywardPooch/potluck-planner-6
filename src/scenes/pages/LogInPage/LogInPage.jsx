// Libraries
import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
// Styles
import "./LogInPage.scss";
// Custom components
import Card from "../../../components/elements/Card";
import LogInForm from "../../../components/forms/LogInForm";
import SignUpForm from "../../../components/forms/SignUpForm";

const LogInPage = () => {
  return (
    <section className="login-page">
      {/* Desktop Size Limit Container */}
      <div className="login-page-content">
        <Card
          title="Account"
          width="35rem"
          imageURL={null}
          content={
            <>
              <div className="login-links">
                <NavLink exact to="/account" activeClassName="active-navlink">
                  Log In
                </NavLink>
                <NavLink to="/account/signup" activeClassName="active-navlink">
                  Sign Up
                </NavLink>
              </div>
              <Switch>
                <Route path="/account/signup">
                  <SignUpForm />
                </Route>
                <Route path="/account">
                  <LogInForm />
                </Route>
              </Switch>
            </>
          }
        />
      </div>
    </section>
  );
};

export default LogInPage;
