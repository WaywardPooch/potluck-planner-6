import React from 'react';

import "./HomePageCard.scss";

const HomePageCard = () => {
  return (
      <section className='card-section-page'>
        
        <div className='card-body'>
          <h2> Potluck's</h2>
          <p>Potluck name</p>
          <button>Create new potluck!</button>
        </div>
        
        <div className='card-body2'>
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

export default HomePageCard;