/*

  STYLED BUTTON COMPONENT
  AUTHOR: LANCE TURBES JR.

  PURPOSE: Creates a pre-styled button for use anywhere necessary
  DEPENDENCIES: Must have a theme with same color names as code below

  NOTES: If adding onClick/onSubmit, wrap this button inside another element

  PROPERTIES:
    theme (string): must be one of the following... 
      - FullLight     - FullDark    - FullColored
      - HollowLight   - HollowDark  - HollowColored

    text (string): the text to display on the button
    
*/

// Libraries
import React from "react";
import styled from "styled-components";

// Styled components
const ButtonFullLight = styled.button`
  background-color: ${(props) => props.theme.color.whiteSoft};
  border: none;
  border-radius: 7px;
  color: ${(props) => props.theme.color.blackSoft};
  padding: 1rem 3rem;
  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.color.blackSoft};
    color: ${(props) => props.theme.color.white};
  }
`;
const ButtonFullDark = styled.button`
  background-color: ${(props) => props.theme.color.blackSoft};
  border: none;
  border-radius: 7px;
  color: ${(props) => props.theme.color.white};
  padding: 1rem 3rem;
  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.color.whiteSoft};
    color: ${(props) => props.theme.color.blackSoft};
  }
`;
const ButtonFullColored = styled.button`
  background-color: ${(props) => props.theme.color.accent};
  border: none;
  border-radius: 7px;
  color: ${(props) => props.theme.color.white};
  padding: 1rem 3rem;
  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.color.whiteSoft};
    color: ${(props) => props.theme.color.blackSoft};
  }
`;
const ButtonHollowLight = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.color.white};
  border-radius: 7px;
  color: ${(props) => props.theme.color.white};
  padding: 1rem 3rem;
  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.color.whiteSoft};
    color: ${(props) => props.theme.color.blackSoft};
  }
`;
const ButtonHollowDark = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.color.blackSoft};
  border-radius: 7px;
  color: ${(props) => props.theme.color.blackSoft};
  padding: 1rem 3rem;
  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.color.blackSoft};
    color: ${(props) => props.theme.color.white};
  }
`;
const ButtonHollowColored = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.color.accent};
  border-radius: 7px;
  color: ${(props) => props.theme.color.accent};
  padding: 1rem 3rem;
  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.color.accent};
    color: ${(props) => props.theme.color.white};
  }
`;

// Main component
const Button = (props) => {
  const { theme, text } = props;

  return (
    <>
      {/* Return desired button theme */}
      {theme === "FullLight" ? (
        <ButtonFullLight>{text}</ButtonFullLight>
      ) : theme === "FullDark" ? (
        <ButtonFullDark>{text}</ButtonFullDark>
      ) : theme === "FullColored" ? (
        <ButtonFullColored>{text}</ButtonFullColored>
      ) : theme === "HollowLight" ? (
        <ButtonHollowLight>{text}</ButtonHollowLight>
      ) : theme === "HollowDark" ? (
        <ButtonHollowDark>{text}</ButtonHollowDark>
      ) : theme === "HollowColored" ? (
        <ButtonHollowColored>{text}</ButtonHollowColored>
      ) : (
        console.log("ERROR! INVALID BUTTON TYPE PROVIDED!")
      )}
    </>
  );
};

export default Button;
