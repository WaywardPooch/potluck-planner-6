// import { Form, FormGroup, Input, Label } from 'reactstrap';
// import { useState, useEffect} from 'react';
// import schema from '../Schemas/logInFormSchema';
// import axios from "axios"
// import * as yup from 'yup';


// const LogInForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       const foundUser = JSON.parse(loggedInUser);
//       setUser(foundUser);
//     }
//   }, []);

//   // logout the user
//   const handleLogout = () => {
//     setUser({});
//     setUsername("");
//     setPassword("");
//     localStorage.clear();
//   };

//   // login the user
//   const handleSubmit = async e => {
//     e.preventDefault();
//     const user = { username, password };
//     // send the username and password to the server
//     const response = await axios.post(
//       "http://blogservice.herokuapp.com/api/login",
//       user
//     );
//     // set the state of the user
//     setUser(response.data);
//     // store the user in localStorage
//     localStorage.setItem("user", JSON.stringify(response.data));
//   };

//   // if there's a user show the message below
//   if (user) {
//     return (
//       <div>
//         {user.name} is loggged in
//         <button onClick={handleLogout}>logout</button>
//       </div>
//     );
//   }

//   // if there's no user, show the login form
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username: </label>
//         <input
//           type="text"
//           value={username}
//           placeholder="enter a username"
//           onChange={({ target }) => setUsername(target.value)}
//         />
//         <div>
//           <label htmlFor="password">password: </label>
//           <input
//             type="password"
//             value={password}
//             placeholder="enter a password"
//             onChange={({ target }) => setPassword(target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LogInForm;


import { Form, FormGroup, Input, Label } from 'reactstrap';
import { useState } from 'react';
import schema from '../../schemas/logInFormSchema';
import * as yup from 'yup';

import usersDummyData from '../../dummydata/users.json'; //TEMP CODE, PLEASE DELETE

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

    const [ loggedIn, setLoggedIn ] = useState(false); //TEMP CODE, PLEASE DELETE

    const onSubmit = event => {
        event.preventDefault();
        schema.isValid(formData).then(valid => {
            if(valid){
                for(let i=0; i<usersDummyData.length; i++){ //TEMP CODE, PLEASE DELETE
                    if(formData.email===usersDummyData[i].email&&formData.password===usersDummyData[i].password){ //TEMP CODE, PLEASE DELETE
                        setLoggedIn(true); //TEMP CODE, PLEASE DELETE
                        break; //TEMP CODE, PLEASE DELETE
                    } //TEMP CODE, PLEASE DELETE
                    if(i===usersDummyData.length-1){ //TEMP CODE, PLEASE DELETE
                        console.error('Incorrect email or password submitted'); //TEMP CODE, PLEASE DELETE
                    } //TEMP CODE, PLEASE DELETE
                } //TEMP CODE, PLEASE DELETE
                setFormData(initialFormData);
                setFormErrors(initialFormErrors);
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
            {loggedIn && <p>You are logged in</p>} {/*TEMP CODE, PLEASE DELETE*/}
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
};

export default LogInForm;