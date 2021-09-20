import { Form, FormGroup, Input, Label } from 'reactstrap';
import { useState, useEffect } from 'react';

const initialFormData = {
    email: '',
    password: '',
};
const initialFormErrors = {
    email: '',
    password: '',
};

function LogInForm(props){
    const [ formData, setFormData] = useState(initialFormData);
    const [ formErrors, setFormErrors] = useState(initialFormErrors);

    const onSubmit = event => {
        event.preventDefault();
        setFormData(initialFormData)
    };
    const onChange = event => {
        const { name, value } = event.target;
        setFormData({...formData, [name]:value});
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