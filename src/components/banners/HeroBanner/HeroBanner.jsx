import React from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.scss";

const HeroBanner = (props) => {
  const {
    height,
    title, 
    description, 
    imageURL, 
    showButton, 
    buttonText, 
    buttonURL 
  } = props;

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${imageURL})`,
        height: `${height}rem`
      }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{description}</h2>
        {/* Only show button if showButton is true */}
        {showButton && <Link to={buttonURL}>{buttonText}</Link>}
      </div>
    </div>
  );
};

export default HeroBanner;
