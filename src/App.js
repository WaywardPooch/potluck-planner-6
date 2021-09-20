// Libraries
import { Route, Switch, NavLink } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
// Styles
import "./App.scss";
// Self-Made Components
import HomePage from "./scenes/HomePage/HomePage.jsx";
import LogInForm from "./components/LogInForm.js";

function App() {
  return (
    <div className="App">
      {/* Display HeaderBar on all pages */}
      <Navbar color="light">
        <h2>Potluck Planner</h2>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/form">FormPage</NavLink>
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
