// Libraries
import { Route, Switch } from "react-router-dom";
// Styles
import "./App.scss";
// Custom components
import HeaderNav from "./components/HeaderNav/HeaderNav.jsx";
import HomePage from "./scenes/HomePage/HomePage.jsx";
import LogInPage from "./scenes/LogInPage/LogInPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CreatePotluckPage from "./scenes/CreatePotluckPage/CreatePotluckPage";

function App() {
  return (
    <div className="App">
      {/* Display HeaderBar on all pages */}
      <HeaderNav title="Potluck Planner" />

      {/* Show page scene under header depending on Route */}
      <Switch>
        <Route path={`/potlucks/create`}>
          <CreatePotluckPage />
        </Route>
        <Route path={`/account`}>
          <LogInPage />
        </Route>
        <Route exact path={`/`}>
          <HomePage />
        </Route>
      </Switch>

      {/* Display Footer on all pages */}
      <Footer />
    </div>
  );
}

export default App;
