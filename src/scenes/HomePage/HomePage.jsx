import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Jumbotron } from "reactstrap";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Jumbotron>
        <h1>Potluck Planner</h1>
      </Jumbotron>
    </>
  );
}

export default HomePage;