// Libraries
import { useState } from "react";
import * as yup from "yup";
// Data
import schema from "../../schemas/SignUpFormSchema";
import usersDummyData from "../../dummydata/users.json"; //TEMP CODE, PLEASE DELETE
// Custom components
import Button from "../elements/Button";

// Variables
const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPw: "",
};
const initialFormErrors = {
  name: "A name is required",
  email: "An email is required",
  password: "A password is required",
  confirmPw: "You must confirm your password",
};

// Main component
function SignUpForm() {
  // ========== STATES
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // ========== EVENT HANDLERS
  const onSubmit = (event) => {
    event.preventDefault();
    schema.isValid(formData).then((valid) => {
      if (valid) {
        usersDummyData.push(formData); //TEMP CODE, PLEASE DELETE
        setFormData(initialFormData);
      } else {
        console.error(formErrors);
      }
    });
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
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
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPw"
          value={formData.confirmPw}
          onChange={onChange}
        />
      </label>

      <Button text="Log In" theme="FullColored">
        <input type="submit" />
      </Button>
    </form>
  );
}

export default SignUpForm;
