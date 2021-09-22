// Libraries
import React from "react";
// Styles
import "./ViewPotlucksSection.scss"
// Data (Placeholder for now)
import potlucks from "../../../dummydata/potlucks.json";
// Custom components
import PotluckCard from "../../Cards/PotluckCard/PotluckCard.jsx"

const ViewPotlucks = () => {
  return (
    <section className="view-potlucks">
      <div className="view-potlucks-content">
        <h2>Your Potlucks</h2>
        <div className="potluck-gallery">
          {potlucks.map((potluck)=>{
            return (
              <PotluckCard 
                key={potluck.id}
                name={potluck.potluck_name}
                date={potluck.potluck_date}
                time={potluck.potluck_time}
                location={potluck.potluck_location}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ViewPotlucks;
