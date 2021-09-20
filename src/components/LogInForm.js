import { Form, FormGroup, Input, Label } from 'reactstrap';
import { useState, useEffect } from 'react';
import schema from '../Schemas/logInFormSchema';
import * as yup from 'yup';

const initialFormData = {
    email: '',
    password: '',
};
const initialFormErrors = {
    email: 'An email is required',
    password: 'A password is required',
};

function LogInForm(props){
    const [ formData, setFormData ] = useState(initialFormData);
    const [ formErrors, setFormErrors ] = useState(initialFormErrors);

    const onSubmit = event => {
        event.preventDefault();
        let success = false;
        schema.isValid(formData).then(valid => success=valid);
        if(success){
            // axios
            setFormData(initialFormData);
        } else {
            console.error(formErrors);
        }
    };
    const onChange = event => {
        const { name, value } = event.target;
        setFormData({...formData, [name]:value});
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
    };

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Email: <Input type='email' name='email' value={formData.email} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Label>Password: <Input type='password' name='password' value={formData.password} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Input type='submit'/>
            </FormGroup>
        </Form>
    );
}

export default LogInForm