// Libraries
import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
// Custom components
import Card from "../../../components/elements/Card";
import LogInForm from "../../../components/forms/LogInForm";
import SignUpForm from "../../../components/forms/SignUpForm";
// Assets
import loginBG from "../../../assets/img-bg-login-400kb.jpg";

// Styled components
const LogInPageContainer = styled.section`
  background-image: url(${loginBG});
  background-size: cover;

  div.login-page-content {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    min-height: 80vh;
    max-width: ${props => props.theme.size.widthDesktop};
    padding: 2rem;
  }
`;

// Main component
const LogInPage = () => {
  return (
    <LogInPageContainer>
      {/* Desktop Size Limit Container */}
      <div className="login-page-content">
        <Card
          title="Account"
          width="35rem"
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
    </LogInPageContainer>
  );
};

export default LogInPage;
