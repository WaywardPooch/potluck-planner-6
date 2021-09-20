import React from "react";
import "./HeroBanner.scss";

const HeroBanner = (props) => {
  const { title, description, imageURL } = props;

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default HeroBanner;
