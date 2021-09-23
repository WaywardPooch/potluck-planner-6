// Libraries
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
// Styles
import "./styles/fonts.css";
import "./styles/general.css";
// Custom components
import HeaderNav from "./scenes/sections/Navbar";
import HomePage from "./scenes/pages/HomePage";
import LogInPage from "./scenes/pages/LogInPage";
import PotluckPage from "./scenes/pages/PotluckPage";
import Footer from "./scenes/sections/Footer";

// Styled components
const StyledApp = styled.div`
  background-color: #2f2f2f;
  min-height: 100vh;
`;

// Main component
function App() {
  // This is a PLACEHOLDER variable for testing login/logout states
  // Please hook this up to the real logged in state when ready!
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <StyledApp>
      {/* Display HeaderBar on all pages */}
      <HeaderNav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Show page scene under header depending on Route */}
      <Switch>
        <Route path={`/potluck/:id`}>
          <PotluckPage />
        </Route>
        <Route path={`/account`}>
          <LogInPage />
        </Route>
        <Route path={`/`}>
          <HomePage isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>

      {/* Display Footer on all pages */}
      <Footer />
    </StyledApp>
  );
}

export default App;
