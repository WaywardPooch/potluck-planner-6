import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useState } from 'react';
import schema from '../../schemas/createPotluckFormSchema';
import * as yup from 'yup';

const initialFormData = {
    name: '',
    itemProvided: '',
    itemsRequested: [],
    itemRequested: '',
    time: '',
    date: '',
    address: '',
};
const initialFormErrors = {
    name: 'A name is required',
    itemProvided: '',
    itemsRequested: '',
    time: 'A time is required',
    date: 'A date is required',
    address: 'An address is required',
};

function CreatePotluckForm(props){
    const [ formData, setFormData ] = useState(initialFormData);
    const [ formErrors, setFormErrors ] = useState(initialFormErrors);

    const onSubmit = event => {
        event.preventDefault();
        schema.isValid(formData).then(valid => {
            if(valid){
                // axios
                setFormData(initialFormData);
            } else {
                console.error(formErrors);
            }
        });
    };
    const onChange = event => {
        const { name, value } = event.target;
        setFormData({...formData, [name]:value});
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
    };
    const addRequestedItem = event => {
        setFormData({...formData, itemsRequested:[...formData.itemsRequested, formData.itemRequested], itemRequested:initialFormData.itemRequested});
    };
    const removeItem = (index) => () => setFormData({...formData, itemsRequested:formData.itemsRequested.filter((item, idx) => idx!==index)});

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Potluck Name: <Input type='text' name='name' value={formData.name} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Label>The item you are providing: <Input type='text' name='itemProvided' value={formData.itemProvided} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Label>Date: <Input type='date' name='date' value={formData.date} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Label>Time: <Input type='text' name='time' value={formData.time} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Label>Address: <Input type='text' name='address' value={formData.address} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Label>Request an item: <Input type='text' name='itemRequested' value={formData.itemRequested} onChange={onChange}/></Label><Button onClick={addRequestedItem}>Add Item</Button><br/>
                {formData.itemsRequested.map((item, index) => <><p>{item}</p><Button onClick={removeItem(index)}>Remove Item</Button>   </>)}
            </FormGroup>
            <FormGroup>
                <Input type='submit'/>
            </FormGroup>
        </Form>
    );
};

export default CreatePotluckForm;