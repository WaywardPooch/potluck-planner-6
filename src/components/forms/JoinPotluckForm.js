import { useState } from "react";

const initialFormData = {
    name: "",
    bringingItem: "",
};

const JoinPotluckForm = (props) => {
    const [formData, setFormData] = useState(initialFormData);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormData(initialFormData);
    };
    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Name: <input type='text' name='name' value={formData.name} onChange={onChange}/></label>
            <label>What item are you bringing?: <input type='text' name='bringingItem' value={formData.name} onChange={onChange}/></label>
            <input type='submit'/>
        </form>
    )
}

export default JoinPotluckForm;