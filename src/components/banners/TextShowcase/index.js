/*

  TEXT SHOWCASE COMPONENT
  AUTHOR: LANCE TURBES JR.

  PURPOSE: Creates a large, text-oriented banner with a white background

  PROPERTIES:
    title (string): the heading of the banner you want to make as a string
    content (element): a single HTML element with content inside to display
    textAlign (string): the text alignment property for the text

*/

// Libraries
import React from "react";
import styled from "styled-components";

// Styled components
const StyledTextShowcase = styled.div`
    background-color: ${props => props.theme.color.whiteSoft};

    div.text-showcase-content {
      margin: auto;
      max-width: ${props => props.theme.size.widthDesktop};
      padding: 6rem;

      h3,
      p {
        margin: 1.4rem;
      }
      h3 {
        font-size: 2.8rem;
      }
    }
  }
`;

// Main component
const TextShowcase = (props) => {
  const { textAlign, title, content } = props;

  return (
    <StyledTextShowcase>
      <div
        className="text-showcase-content"
        style={{
          textAlign: `${textAlign}`,
        }}
      >
        <h3>{title}</h3>
        {content}
      </div>
    </StyledTextShowcase>
  );
};

export default TextShowcase;
