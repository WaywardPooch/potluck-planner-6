/*

  STYLED CARD COMPONENT
  AUTHOR: LANCE TURBES JR.

  PURPOSE: Creates a card with an image at the top, and a title underneath.
  Can display any type, and any number, of HTML elements inside, as needed.

  PROPERTIES:
    imageURL (string): takes an image URL to display at the top; if this value
                       is "null" or invalid, then no image will be displayed
    title (string): creates an all-caps H2 with a colored background
    contents (array): an array of HTML elements to display, in order
    maxWidth (string): the maximum width value of the card as a string

*/

// Libraries
import React from "react";
import styled from "styled-components";

// Styled components
const StyledCard = styled.div`
  background-color: ${props => props.theme.color.white};
  border-radius: 7px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  display: inline-block;
  padding: 2rem;
  margin: 2rem;

  div.card-head {
    display: flex;
    flex-direction: column;

    h1,h2,h3,h4,h5,h6 {
      background-color: ${props => props.theme.color.accent};
      color: ${props => props.theme.color.white};
      margin-bottom: 1rem;
      padding: 2rem 0;
      text-align: center;
      text-transform: uppercase;
    }
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  div.card-body {
    padding: 1rem;
  }
`;

// Main component
const Card = (props) => {
  const { imageURL, title, contents, maxWidth } = props;

  return (
    <StyledCard style={{
      maxWidth: maxWidth,
    }}>
      <div className="card-head">
        {/* If there IS an image, show it */}
        {imageURL && <img src={imageURL} />}
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        {contents.map((element, index) => {
          element.key = index;
          return element;
        })}
      </div>
    </StyledCard>
  );
};

export default Card;
