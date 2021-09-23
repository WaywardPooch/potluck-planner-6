// Libraries
import React from "react";
import styled from "styled-components";
// Custom components
import Button from "../../../components/elements/Button";

// Styled components
const StyledFooter = styled.footer`
  background-color: ${props => props.theme.color.blackSoft};
  padding: 2rem 0;

  div.footer-content {
    margin: auto;
    max-width: ${props => props.theme.size.widthDesktop};
    text-align: center;

    button {
      font-size: 2.4rem;
      letter-spacing: 0.2rem;
      margin: 2rem;
      padding: 2rem 4rem;
      text-transform: uppercase;
    }
  }
`;

// Main component
const Footer = () => {
  // ========== HELPERS
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  // ========== MARKUP
  return (
    <StyledFooter>
      <div className="footer-content">
        <div onClick={scrollToTop} className="button-container">
          <Button text="Scroll Back to Top" theme="HollowLight" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
