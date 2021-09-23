/*

  STYLED CARD COMPONENT
  AUTHOR: LANCE TURBES JR.

  PURPOSE: Creates a card with an image at the top, and a title underneath.
  Can display any type, and any number, of HTML elements inside, as needed.

  PROPERTIES:
    imageURL (string): takes an image URL to display at the top; if this value
                       is "null" or invalid, then no image will be displayed
    title (string): creates an all-caps H2 with a colored background
    content (element): a single element (can be a div with things inside)
    width (string): the width value of the card as a string

*/

// Libraries
import React from "react";
import styled from "styled-components";

// Styled components
const StyledCard = styled.div`
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: inline-block;
  margin: 2rem;

  div.card-head {
    display: flex;
    flex-direction: column;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      background-color: ${(props) => props.theme.color.accent};
      color: ${(props) => props.theme.color.white};
      letter-spacing: 0.2rem;
      padding: 2rem;
      text-align: center;
      text-transform: uppercase;
    }
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  div.card-body {
    padding: 2rem;

    form {
      display: flex;
      flex-direction: column;

      label {
        align-items: center;
        display: flex;
        flex-direction: column;
        font-size: 1.8rem;
        justify-content: space-between;
        margin-bottom: 1rem;

        input {
          &[type=email],
          &[type=password],
          &[type=text] {
            font-size: 1.8rem;

            &:focus {
              box-shadow: 0 0 4px 0 ${props => props.theme.color.accent}99;
            }
          }
        }
      }
    }
    div.login-links {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 1.6rem;

      a {
        color: ${props => props.theme.color.blackSoft};
        font-size: 2rem;
        padding: 1rem;
        text-align: center;
        text-decoration: none;
        transition: 200ms;
        width: 40%;

        &.active-navlink {
          font-weight: bold;
          border-bottom: 2px solid ${props => props.theme.color.blackSoft};
        }
        &:hover {
          background-color: ${props => props.theme.color.blackSoft};
          color: ${props => props.theme.color.white};
        }
      }
    }
  }
`;

// Main component
const Card = (props) => {
  const { imageURL, title, content, width } = props;

  return (
    <StyledCard
      style={{
        width: width,
      }}
    >
      <div className="card-head">
        {/* If there IS an image, show it */}
        {imageURL && <img src={imageURL} />}
        <h2>{title}</h2>
      </div>
      <div className="card-body">{content}</div>
    </StyledCard>
  );
};

export default Card;
