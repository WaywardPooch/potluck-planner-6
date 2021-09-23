// Libraries
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
// Custom components
import Button from "../../../components/elements/Button";

// Styled components
const StyledNavbar = styled.header`
  background-color: ${(props) => props.theme.color.blackSoft};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  position: sticky;
  top: 0;

  div.header-content {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: $max-width-desktop;

    div.header-left {
      font-size: 2rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
    nav.header-right {
      align-items: center;
      display: flex;

      * {
        margin-left: 0.5rem;
      }
    }
  }
`;

// Main component
const HeaderNav = (props) => {
  // ========== STATES
  const { isLoggedIn, setIsLoggedIn } = props;

  // ========== HELPERS
  const toggleLogIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // ========== MARKUP
  return (
    <StyledNavbar>
      <div className="header-content">
        <div className="header-left">
          <Link to="/">
            <Button theme="FullDark" text="Potluck Planner" />
          </Link>
        </div>
        <nav className="header-right">
          {/* If on the login page, hide the nav from user */}
          <Switch>
            <Route path="/account" />
            <Route path="/">
              <div onClick={toggleLogIn}>
                <Button theme="HollowLight" text="[DEV] Toggle LogIn" />
              </div>
              {!isLoggedIn ? (
                // If the user is not logged in, show "Log In" entry in nav
                <Link to="/account">
                  <Button theme="FullDark" text="Log In" />
                </Link>
              ) : (
                // Otherwise, show log out entry (PLACEHOLDER: WILL NEED TO BE CHANGED!!!)
                <Link to="/" onClick={toggleLogIn}>
                  <Button theme="FullDark" text="Log Out" />
                </Link>
              )}
            </Route>
          </Switch>
        </nav>
      </div>
    </StyledNavbar>
  );
};

export default HeaderNav;
