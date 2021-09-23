/*

  STYLED JUMBOTRON COMPONENT
  AUTHOR: LANCE TURBES JR.

  PURPOSE: Creates a styled jumbotron/banner with background image of choice
  with a black overlay on top for text readability, as well as a button, too.

  PROPERTIES:
    height (string): a string value for total height (any unit you want)
    title (string): words to display as the primary text heading
    description (string): one-line catch phrase, dimmed and under the title
    imageURL (string): the URL for the picture to display underneath
    showButton (boolean): true/false to show a button or not
    buttonText (string): the words to show inside the button, if needed
    buttonURL (string): path to the desired URL route the button links to

*/

// Libraries
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Custom components
import Button from "../../elements/Button";

// Styled components
const StyledJumbotron = styled.div`
  background-size: cover;

  div.jumbotron-body {
    align-items: center;
    background-color: ${(props) => props.theme.color.blackSoft}cc;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;

    h1 {
      color: ${(props) => props.theme.color.whiteSoft};
      font-size: 6.4rem;
      font-weight: 300;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
    }
    h2 {
      color: #ddd;
      margin-bottom: 2rem;
    }
  }
`;

// Main component
const Jumbotron = (props) => {
  const {
    height,
    title,
    description,
    imageURL,
    showButton,
    buttonText,
    buttonURL,
  } = props;

  return (
    <StyledJumbotron
      style={{
        backgroundImage: `url(${imageURL})`,
        height: `${height}`,
      }}
    >
      <div className="jumbotron-body">
        <h1>{title}</h1>
        <h2>{description}</h2>
        {/* Only show button if showButton is true */}
        {showButton && (
          <Link to={buttonURL}>
            <Button theme="FullColored" text={buttonText} />
          </Link>
        )}
      </div>
    </StyledJumbotron>
  );
};

export default Jumbotron;
