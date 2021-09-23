// Libraries
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Data (Placeholder for now)
import dummydata from "../../../dummydata/potlucks.json";
// Custom components
import Card from "../../../components/elements/Card";

// Styled components
const PotluckGallery = styled.section`
  background-color: ${(props) => props.theme.color.whiteSoft};

  div.body {
    margin: auto;
    max-width: ${(props) => props.theme.size.widthDesktop};

    h2 {
      font-size: 3.6rem;
      letter-spacing: 0.2rem;
      padding-top: 2rem;
      text-align: center;
      text-transform: uppercase;
    }
    div.potluck-gallery {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
  }
`;

const ViewPotlucks = () => {
  return (
    <PotluckGallery>
      <div className="body">
        <h2>Your Potlucks</h2>
        <div className="potluck-gallery">
          {dummydata.map((potluck) => {
            return (
              <Link to={`/potluck/${potluck.id}`} key={potluck.id}>
                <Card
                  title={potluck.potluck_name}
                  width="30rem"
                  content={
                    <>
                      <p>Date: {potluck.potluck_date}</p>
                      <p>Time: {potluck.potluck_time}</p>
                      <p>Location: {potluck.potluck_location}</p>
                    </>
                  }
                />
              </Link>
            );
          })}
        </div>
      </div>
    </PotluckGallery>
  );
};

export default ViewPotlucks;
