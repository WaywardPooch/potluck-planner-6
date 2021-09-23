// Libraries
import { useState } from "react";
import * as yup from "yup";
// Data
import schema from "../../schemas/logInFormSchema";
import usersDummyData from "../../dummydata/users.json"; //TEMP CODE, PLEASE DELETE
// Custom components
import Button from "../elements/Button";

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
  const [displayError, setDisplayError] = useState(false);
  const [currentError, setCurrentError] = useState(initialFormErrors.email);

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
            setDisplayError(false);
            setLoggedIn(true); //TEMP CODE, PLEASE DELETE
            break; //TEMP CODE, PLEASE DELETE
          } //TEMP CODE, PLEASE DELETE
          if (i === usersDummyData.length - 1) {
            //TEMP CODE, PLEASE DELETE
            setCurrentError("Incorrect email or password submitted"); //TEMP CODE, PLEASE DELETE
            setDisplayError(true);
          } //TEMP CODE, PLEASE DELETE
        } //TEMP CODE, PLEASE DELETE
        setFormData(initialFormData);
        setFormErrors(initialFormErrors);
      } else {
        setDisplayError(true);
      }
    });
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {setFormErrors({ ...formErrors, [name]: "" }); setCurrentError(name==='email' ? formErrors.password : formErrors.email)})
      .catch((err) => {setFormErrors({ ...formErrors, [name]: err.errors[0] }); setCurrentError(err.errors[0]);});
  };

  // ========== MARKUP
  return (
    <form onSubmit={onSubmit}>
      {loggedIn && <p>You are logged in</p>} {/*TEMP CODE, PLEASE DELETE*/}
      {displayError && <p style={{color: 'red'}}>{currentError}</p>}
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
      <Button text="Log In" theme="FullColored">
        <input type="submit" />
      </Button>
    </form>
  );
}

export default LogInForm;
