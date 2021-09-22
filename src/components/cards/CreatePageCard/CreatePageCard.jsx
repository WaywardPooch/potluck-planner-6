import React from 'react';

import "./CreatePageCard.scss";

const CreatePageCard = () => {
  return (
      <section className='card-section-page'>
        <div className='card-body'>
          <h2> Potluck's</h2>
          <p>Potluck name</p>
          <button>Create Potluck!</button>
        </div>
        
        <div className='card-body2'>
        <h2> Potluck's attendies</h2>
          <p>food item</p>
          <h2> Potluck's attendies</h2>
          <p>food item</p>
          <h2> Potluck's attendies</h2>
          <p>food item</p>
          <h2> Potluck's attendies</h2>
          <p>food item</p>
        </div>

        <div className='card-body3'>
        <h2>soon to come friends list </h2>
        </div>
      </section>

      
  );
};

export default CreatePageCard;