import { Form, FormGroup, Input, Label } from 'reactstrap';

function LogInForm(props){
    const onSubmit = event => {
        event.preventDefault();
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name: <Input type='text'/></Label>
            </FormGroup>
            <FormGroup>
                <Label>Password: <Input type='password'/></Label>
            </FormGroup>
            <FormGroup>
                <Input type='submit'/>
            </FormGroup>
        </Form>
    );
}

export default LogInForm