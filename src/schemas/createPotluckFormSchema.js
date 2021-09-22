import * as yup from 'yup';

let schema = yup.object().shape({
    name: yup.string().required('A potluck name is required'),
    itemProvided: yup.string(),
    itemsRequested: yup.array(),
    itemRequested: yup.string(),
    time: yup.string().required('A time is required'),
    date: yup.string().required('A date is required'),
    address: yup.string().required('An address is required'),
});

export default schema;