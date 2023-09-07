import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const RegisterURL = 'http://127.0.0.1:8001/api/users/register';

  const handleRegister = () => {
    const RegisterData = {
      name: name,
      email: email,
      password: password,
      ConfirmPassword: confirmPassword, 
    };

    axios
      .post(RegisterURL, RegisterData)
      .then((response) => {
        // Handle the response on successful Register
        console.log('Register successful!');
        console.log('Response data: ', response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error during Register:', error.message);
      });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-3">
        <div className="p-3 border">
          <h2 className="text-center my-2">Register Page</h2>
          <TextField
            id="input Name"
            className="my-2 formobject"
            label="Full Name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            id="input Email"
            className="my-2 formobject"
            label="User Email"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-password-input-1"
            className="my-2 formobject"
            type="password"
            label="User Password"
            placeholder="User Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-password-input-2"
            className="my-2 formobject"
            type="password"
            label="Confirm User Password"
            placeholder="Confirm User Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Update the state variable name here
          />
          <p className="text-center">
            Do You have an account? <Link to="/Login">Login</Link>
          </p>
          <Button variant="contained" className="my-2 formobject" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
