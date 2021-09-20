// Libraries
import { Route, Switch } from "react-router-dom";
// Styles
import "./App.scss";
// Custom components
import HomePage from "./scenes/HomePage/HomePage.jsx";
import LogInPage from "./scenes/LogInPage/LogInPage.jsx";
import HeaderNav from "./components/HeaderNav/HeaderNav.jsx";

function App() {
  return (
    <div className="App">
      {/* Display HeaderBar on all pages */}
      <HeaderNav title="Potluck Planner" />

      {/* Show page scene under header depending on Route */}
      <Switch>
        <Route path={`/form`}>
          <LogInPage />
        </Route>
        <Route exact path={`/`}>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
