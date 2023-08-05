import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';
const Signup = () => {
  let {authTokens} = useContext(AuthContext);
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    first_name: '',
    last_name: '',
    gender: '',
    email:'',
    password:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e)  => {
    e.preventDefault();
    // You can handle form submission here, e.g., make an API call to your backend
    try {
        // Make the POST request to your backend API using fetch
        const response = await fetch('/account/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
           
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
      
        history("/login");
      } catch (error) {
        console.error('Error creating account:', error);
      }
  };

  return (
    <div className="App">
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">First name:</label>
          <input
            type="text"
            id="firstname"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contact">Contact:</label>
          <input
            type="tel"
            id="location"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contact">email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <select
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;