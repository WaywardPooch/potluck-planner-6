// Libraries
import { useState } from "react";
import * as yup from "yup";
// Data
import schema from "../../schemas/createPotluckFormSchema";

// Variables
const initialFormData = {
  name: "",
  itemProvided: "",
  itemsRequested: [],
  itemRequested: "",
  time: "",
  date: "",
  address: "",
};
const initialFormErrors = {
  name: "A name is required",
  itemProvided: "",
  itemsRequested: "",
  time: "A time is required",
  date: "A date is required",
  address: "An address is required",
};

// Main component
function CreatePotluckForm(props) {
  // ========== STATES
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // ========== EVENT HANDLERS
  const onSubmit = (event) => {
    event.preventDefault();
    schema.isValid(formData).then((valid) => {
      if (valid) {
        // axios
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

  // ========== HELPERS
  const addRequestedItem = (event) => {
    setFormData({
      ...formData,
      itemsRequested: [...formData.itemsRequested, formData.itemRequested],
      itemRequested: initialFormData.itemRequested,
    });
  };
  const removeItem = (index) => () =>
    setFormData({
      ...formData,
      itemsRequested: formData.itemsRequested.filter(
        (item, idx) => idx !== index
      ),
    });

  // ========== MARKUP
  return (
    <form onSubmit={onSubmit}>
      <label>
        Potluck Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
      </label>
      <label>
        The item you are providing:
        <input
          type="text"
          name="itemProvided"
          value={formData.itemProvided}
          onChange={onChange}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={onChange}
        />
      </label>
      <label>
        Time:
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={onChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={onChange}
        />
      </label>
      <label>
        Request an item:
        <input
          type="text"
          name="itemRequested"
          value={formData.itemRequested}
          onChange={onChange}
        />
      </label>
      <button onClick={addRequestedItem}>Add Item</button>
      <br />
      {formData.itemsRequested.map((item, index) => (
        <>
          <p>{item}</p>
          <button onClick={removeItem(index)}>Remove Item</button>
        </>
      ))}
      <input type="submit" />
    </form>
  );
}

export default CreatePotluckForm;
