// Libraries
import React from "react";
// Styles
import "./PotluckCard.scss"

const PotluckCard = (props) => {
  const { name, date, time, location } = props;

  return (
    <div className="potluck-card">
      <h3>{name}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default PotluckCard;