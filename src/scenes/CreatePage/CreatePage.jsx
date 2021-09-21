// Libraries
import React from "react";
// Styles
import "./CreatePage.scss";
// import CreateForm from "../../components/CreateForm";
import HomePageCard from "../../components/Cards/HomePageCard/HomePageCard";

const CreatePage = () => {
  return (
    <section className='card-section-page'>
    <div className='card-body'>
      <h2> Potluck's</h2>
      <p>Potluck name</p>
    </div>
    
    <div className='card-body'>
    <h2>Create New Potluck!</h2>
    <p>Potluck name</p> 
    <input></input>
    <p>Potluck theme</p> 
    <input></input>
    <p>items needed</p> 
    <input></input>
    <button>Create Potluck!</button>
    </div>
  </section>

  );
};

export default CreatePage;
