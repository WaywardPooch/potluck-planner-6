import { Form, FormGroup, Input, Label } from 'reactstrap';
import { useState } from 'react';
import schema from '../../schemas/SignUpFormSchema';
import * as yup from 'yup';

import usersDummyData from '../../dummydata/users.json'; //TEMP CODE, PLEASE DELETE

const initialFormData = {
    name: '',
    email: '',
    password: '',
    confirmPw: '',
};
const initialFormErrors = {
    name: 'A name is required',
    email: 'An email is required',
    password: 'A password is required',
    confirmPw: 'You must confirm your password',
};

function SignUpForm(props){
    const [ formData, setFormData ] = useState(initialFormData);
    const [ formErrors, setFormErrors ] = useState(initialFormErrors);

    const onSubmit = event => {
        event.preventDefault();
        schema.isValid(formData).then(valid => {
            if(valid){
                usersDummyData.push(formData); //TEMP CODE, PLEASE DELETE
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

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name: <Input type='text' name='name' value={formData.name} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Label>Email: <Input type='email' name='email' value={formData.email} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Label>Password: <Input type='password' name='password' value={formData.password} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Label>Confirm Password: <Input type='password' name='confirmPw' value={formData.confirmPw} onChange={onChange}/></Label>
            </FormGroup>
            <FormGroup>
                <Input type='submit'/>
            </FormGroup>
        </Form>
    );
};

export default SignUpForm;