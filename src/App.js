// Libraries
import { Route, Switch } from "react-router-dom";
// Styles
import "./App.scss";
// Custom components
import HeaderNav from "./components/HeaderNav/HeaderNav.jsx";
import HomePage from "./scenes/HomePage/HomePage.jsx";
import LogInPage from "./scenes/LogInPage/LogInPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  // This is a PLACEHOLDER variable for testing login/logout states
  // Please hook this up to the logged in state when ready!
  const isLoggedIn = false;

  return (
    <div className="App">
      {/* Display HeaderBar on all pages */}
      <HeaderNav isLoggedIn={isLoggedIn} />

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
