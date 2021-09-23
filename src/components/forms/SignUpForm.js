// Libraries
import { useState } from "react";
import * as yup from "yup";
// Data
import schema from "../../schemas/SignUpFormSchema";
import usersDummyData from "../../dummydata/users.json";
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
  const [createdAccount, setCreatedAccount] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [currentError, setCurrentError] = useState(initialFormErrors.email);

  // ========== EVENT HANDLERS
  const onSubmit = (event) => {
    event.preventDefault();
    schema.isValid(formData).then((valid) => {
      if (valid) {
        usersDummyData.push(formData);
        setCreatedAccount(true);
        setFormData(initialFormData);
        setDisplayError(false);
      } else {
        setDisplayError(true);
      }
    });
  };
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === "confirmPw") {
      if (formData.password === value) {
        setFormErrors({ ...formErrors, [name]: "" });
        setCurrentError(
          formErrors.email
            ? formErrors.email
            : formErrors.name
            ? formErrors.name
            : formErrors.password
        );
      } else {
        setFormErrors({
          ...formErrors,
          [name]: value
            ? "The passwords must be the same"
            : initialFormErrors[name],
        });
        setCurrentError(
          value ? "The passwords must be the same" : initialFormErrors[name]
        );
      }
    } else {
      if (name === "password") {
        if (formData.confirmPw === value) {
          setFormErrors({ ...formErrors, confirmPw: "" });
          setCurrentError(
            formErrors.email
              ? formErrors.email
              : formErrors.name
              ? formErrors.name
              : formErrors.password
          );
        } else {
          setFormErrors({
            ...formErrors,
            confirmPw: value
              ? "The passwords must be the same"
              : initialFormErrors["confirmPw"],
          });
          setCurrentError(
            value
              ? "The passwords must be the same"
              : initialFormErrors["confirmPw"]
          );
        }
      }
      yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
          setFormErrors({ ...formErrors, [name]: "" });
          setCurrentError(
            name !== "email" && formErrors.email
              ? formErrors.email
              : name !== "name" && formErrors.name
              ? formErrors.name
              : name !== "password" && formErrors.password
              ? formErrors.password
              : formErrors.confirmPw
          );
        })
        .catch((err) => {
          setFormErrors({ ...formErrors, [name]: err.errors[0] });
          setCurrentError(err.errors[0]);
        });
    }
  };

  // ========== MARKUP
  return (
    <form onSubmit={onSubmit}>
      {createdAccount && <p>You have created an account</p>}{" "}
      {displayError && <p style={{ color: "red" }}>{currentError}</p>}
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
