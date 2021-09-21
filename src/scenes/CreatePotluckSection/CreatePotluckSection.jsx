// Libraries
import React from "react";
// Styles
import "./CreatePotluckSection.scss";
import CreatPotluck from "../../components/CreatePotluckForm.js"


const CreatePotluckSection = () => {
  return (
    <section>
      <p>Create a potluck</p>
      <CreatPotluck />
    </section>
  );
};

export default CreatePotluckSection;
