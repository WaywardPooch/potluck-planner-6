// Libraries
import { useState } from "react";
import * as yup from "yup";
// Data
import schema from "../../schemas/logInFormSchema";
import usersDummyData from "../../dummydata/users.json"; //TEMP CODE, PLEASE DELETE

// Variables
const initialFormData = {
  email: "",
  password: "",
};
const initialFormErrors = {
  email: "An email is required",
  password: "A password is required",
};

// Main component
function LogInForm(props) {
  // ========== STATES
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [loggedIn, setLoggedIn] = useState(false); //TEMP CODE, PLEASE DELETE

  // ========== EVENT HANDLERS
  const onSubmit = (event) => {
    event.preventDefault();
    schema.isValid(formData).then((valid) => {
      if (valid) {
        for (let i = 0; i < usersDummyData.length; i++) {
          //TEMP CODE, PLEASE DELETE
          if (
            formData.email === usersDummyData[i].email &&
            formData.password === usersDummyData[i].password
          ) {
            //TEMP CODE, PLEASE DELETE
            setLoggedIn(true); //TEMP CODE, PLEASE DELETE
            break; //TEMP CODE, PLEASE DELETE
          } //TEMP CODE, PLEASE DELETE
          if (i === usersDummyData.length - 1) {
            //TEMP CODE, PLEASE DELETE
            console.error("Incorrect email or password submitted"); //TEMP CODE, PLEASE DELETE
          } //TEMP CODE, PLEASE DELETE
        } //TEMP CODE, PLEASE DELETE
        setFormData(initialFormData);
        setFormErrors(initialFormErrors);
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
      {loggedIn && <p>You are logged in</p>} {/*TEMP CODE, PLEASE DELETE*/}
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
      <input type="submit" />
    </form>
  );
}

export default LogInForm;
