import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  './Login.css'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  const apiUrl = 'http://127.0.0.1:8001/api/users/login';

  const handleLogin = () => {
    const loginData = {
      email: email,
      password: password
    };

    axios.post(apiUrl, loginData)
      .then(responsed => {
        // Handle the response on successful login
        console.log('Login successful!');
        console.log('Response data:', responsed.data);
      })
      .catch(error => {
        // Handle errors
        setErrorMessage(error.message)
        console.error('Error during login:', error.message);
      });
  };




  return (
    <div className="container">
      <div className='d-flex justify-content-center mt-3' >
        <div className="p-3 border">
        <h2 className='text-center my-2'>Login Page</h2>
        
        <TextField id="input Email" className='my-2 formobject' label="User Email"  placeholder="User Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>  <br/>   
        <TextField id="outlined-password-input" className='my-2 formobject' type="password" label="UserPassword"  placeholder="UserPassword" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <p className='text-center'>Don't have an account? <Link to="/Register">Sign up</Link></p>
        <Button variant="contained" className='my-2 formobject'  onClick={handleLogin}>Login</Button>
      
              {errorMessage && <div className='text-center bg-danger'>
                  {errorMessage}
              </div>}
        </div>
      </div>
   
      </div>
  );
};

export default Login;
