// Libraries
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// Styles
import "./App.scss";
// Custom components
import HeaderNav from "./scenes/sections/HeaderNav/HeaderNav.jsx";
import HomePage from "./scenes/pages/HomePage/HomePage.jsx";
import LogInPage from "./scenes/pages/LogInPage/LogInPage.jsx";
import Footer from "./scenes/sections/Footer/Footer.jsx";

function App() {
  // This is a PLACEHOLDER variable for testing login/logout states
  // Please hook this up to the real logged in state when ready!
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {/* Display HeaderBar on all pages */}
      <HeaderNav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      {/* Show page scene under header depending on Route */}
      <Switch>
        <Route path={`/account`}>
          <LogInPage />
        </Route>
        <Route path={`/`}>
          <HomePage isLoggedIn={isLoggedIn}/>
        </Route>
      </Switch>

      {/* Display Footer on all pages */}
      <Footer />
    </div>
  );
}

export default App;
