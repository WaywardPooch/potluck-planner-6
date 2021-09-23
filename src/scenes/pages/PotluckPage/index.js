// Libraries
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// Custom components
import Card from "../../../components/elements/Card";
import JoinPotluckForm from "../../../components/forms/JoinPotluckForm";
import TextShowcase from "../../../components/banners/TextShowcase";

import dummyData from "../../../dummydata/potlucks.json";

// Styled components
const StyledPotluck = styled.section`
  div.form-container {
    display: flex;
    justify-content: center;
  }
`;

// Main component
const PotluckPage = () => {
  // ========== VARIABLES
  const { id } = useParams();

  // ========== STATES
  const [currentPotluck, setCurrentPotluck] = useState({
    id: null,
    potluck_name: "",
    potluck_time: "",
    potluck_date: "",
    potluck_location: "",
  });

  // ========== SIDE EFFECTS
  useEffect(() => {
    setCurrentPotluck(dummyData[id]);
  }, [id]);

  // ========== MARKUP
  return (
    <StyledPotluck>
      {currentPotluck ? (
        <TextShowcase
          title={currentPotluck.potluck_name}
          content={
            <div className="potluck-details">
              <p>{currentPotluck.potluck_date}</p>
              <p>{currentPotluck.potluck_time}</p>
              <p>{currentPotluck.potluck_location}</p>
            </div>
          }
          textAlign="center"
        />
      ) : (
        <p>Loading Potluck Information...</p>
      )}
      <div className="form-container">
        <Card title="Join this Potluck" content={<JoinPotluckForm />} />
      </div>
    </StyledPotluck>
  );
};

export default PotluckPage;
