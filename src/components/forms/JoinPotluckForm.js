// Libraries
import { useState } from "react";
// Custom components
import Button from "../elements/Button";

// Variables
const initialFormData = {
  name: "",
  bringingItem: "",
};

// Main component
const JoinPotluckForm = (props) => {
  // ========== STATES
  const [formData, setFormData] = useState(initialFormData);

  // ========== EVENT HANDLERS
  const onSubmit = (event) => {
    event.preventDefault();
    setFormData(initialFormData);
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // ========== MARKUP
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
      </label>
      <label>
        What item are you bringing?:
        <input
          type="text"
          name="bringingItem"
          value={formData.name}
          onChange={onChange}
        />
      </label>
      <Button theme="FullColored" text="Join">
        <input type="submit" />
      </Button>
    </form>
  );
};

export default JoinPotluckForm;
