import * as yup from 'yup';

let schema = yup.object().shape({
    name: yup.string().required('A name is required'),
    email: yup.string().required('An email is required').email('A valid email is required'),
    password: yup.string().required('A password is required').min(8, 'Your password must be at least 8 characters'),
    confirmPw: yup.string().required('You must confirm your password').oneOf([yup.ref('password')], 'The passwords must be the same'),
});

export default schema;