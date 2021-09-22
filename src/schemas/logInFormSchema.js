import * as yup from 'yup';

let schema = yup.object().shape({
    email: yup.string().required('An email is required').email('A valid email is required'),
    password: yup.string().required('A password is required'),
});

export default schema;