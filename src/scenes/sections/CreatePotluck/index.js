// Libraries
import React from "react";
import styled from "styled-components";
// Custom components
import CreatePotluckForm from "../../../components/forms/CreatePotluckForm.js";
import Card from "../../../components/elements/Card";

// Styled components
const StyledCreatePotluckSection = styled.section`
  div.body {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: ${props => props.theme.size.widthDesktop};
  }
`;

const CreatePotluckSection = () => {
  return (
    <StyledCreatePotluckSection>
      <div className="body">
        <Card
          title="Potluck Details"
          content={<CreatePotluckForm />}
        />
      </div>
    </StyledCreatePotluckSection>
  );
};

export default CreatePotluckSection;
