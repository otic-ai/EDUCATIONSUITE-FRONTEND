// LoginForm.js
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';
const LoginForm = () => {
  let {loginUser} = useContext(AuthContext);
    const history = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the POST request to your Django backend API for authentication
      const response = await fetch('api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Authentication successful
        const data = await response.json();
        localStorage.setItem('access_token', data['access']);
        localStorage.setItem('refresh_token', data['refresh']);
        alert(localStorage.getItem('access_token'))
        history("/");
      } else {
        // Authentication failed
        const data = await response.json();
        console.log('error');
       
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <form onSubmit={loginUser}>
     
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
