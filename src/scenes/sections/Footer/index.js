// Libraries
import React from "react";
import styled from "styled-components";

// Styled components
const StyledFooter = styled.footer`
  background-color: ${props => props.theme.color.blackSoft};
  padding: 8rem 0;

  div.footer-content {
    margin: auto;
    max-width: ${props => props.theme.size.widthDesktop};
    text-align: center;

    h2 {
      border: solid 1px ${props => props.theme.color.whiteSoft};
      border-radius: 7px;
      color: ${props => props.theme.color.whiteSoft};
      display: inline-block;
      letter-spacing: 0.2rem;
      padding: 2rem 4rem;
      text-transform: uppercase;
    }
  }
`;

// Main component
const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-content">
        <h2>Thanks for stopping by!</h2>
      </div>
    </StyledFooter>
  );
};

export default Footer;
