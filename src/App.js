// Libraries
import { Route, NavLink, Switch } from "react-router-dom";
import { Navbar } from "reactstrap";
// Styles
import "./App.scss";
// Self-Made Components
import HomePage from "./scenes/HomePage/HomePage.jsx";
import LogInForm from "./components/LogInForm.js";

function App(props) {
  return (
    <div className="App">
      {/* Display HeaderBar on all pages */}
      <Navbar color="black">
        <NavLink to={`/form`}>FormPage</NavLink>
        <NavLink to={`/`}>HomePage</NavLink>
      </Navbar>

      {/* Show page scene under header depending on Route */}
      <Switch>
        <Route path={`/form`}>
          <LogInForm />
        </Route>
        <Route exact path={`/`}>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
