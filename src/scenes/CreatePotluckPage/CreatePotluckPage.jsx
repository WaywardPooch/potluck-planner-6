// Libraries
import React from "react";
// Styles
import "./CreatePotluckPage.scss";


const CreatePotluckPage = () => {
  return (
    <section>
      <h1>Create Potluck Page</h1>
    </section>,

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
}

export default CreatePotluckPage;