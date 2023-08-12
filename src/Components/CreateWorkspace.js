import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';
const Createworkspace = () => {
  let {authTokens} = useContext(AuthContext);
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contact1: '',
    contact2: '',
    location: '',
    box: '',
    email:''
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
        const response = await fetch('/institution/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
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
      <h1>Workspace Creation Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Institution Name:</label>
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
          <label htmlFor="password">Phone Number 1:</label>
          <input
            type="tel"
            id="contact1"
            name="contact1"
            value={formData.contact1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Phone Number 2:</label>
          <input
            type="tel"
            id="contact2"
            name="contact2"
            value={formData.contact2}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contact">location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contact">P.O Box:</label>
          <input
            type="text"
            id="box"
            name="box"
            value={formData.box}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Createworkspace;