// Libraries
import React from "react";
// Styles
import "./CreatePotluckSection.scss";
// Custom components
import CreatePotluckForm from "../../components/CreatePotluckForm.js";

const CreatePotluckSection = () => {
  return (
    <section className="create-potluck-section">
      <div className="create-potluck-content">
        <div className="potluck-items-provided">
          <ul>
            <li>Cheeseburgers</li>
            <li>Hot Dogs</li>
            <li>Soda</li>
            <li>Paper Plates</li>
          </ul>
        </div>
        <div className="potluck-ui">
          <CreatePotluckForm />
        </div>
        <div className="potluck-items-requested">
          <li>Straws</li>
          <li>More Chairs</li>
          <li>Another Outdoor table</li>
        </div>
      </div>
    </section>
  );
};

export default CreatePotluckSection;
