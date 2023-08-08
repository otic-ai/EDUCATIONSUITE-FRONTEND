import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';

const CreateForm = () => {
  localStorage.setItem('sign', true)
  const [formData,setFormData] = useState({
    name:'',
    design:'',
    allowed:''
  })
  let {authTokens, proxy} = useContext(AuthContext);
  const handleChange =(event)=>{
    const {name, value} = event.target;
    setFormData((prevFormData)=>({
      ...prevFormData,
      [name]:value,
    }));
  }
  let Create = async (e )=> {
    e.preventDefault();
    const jsonData = JSON.stringify(formData)
    try {
      const response = await fetch(`${proxy}/default/createform/`,
      {
        method: 'POST', // Replace with the appropriate HTTP method (e.g., POST, PUT, DELETE)
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokens.access}`,
        },
        body: jsonData
      }); // Replace with your API URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const returnData = await response.json();
      // Extracting 'name' property from each object
     alert(returnData.message);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <form onSubmit={Create} >
     
      <div>
        <label htmlFor="username">Form Name</label>
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
        <label >Form Design</label>
        <input
          type="text"
          id="design"
          name="design"
          value={formData.design}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Allowed User</label>
        <input
          type="text"
          id="allowed"
          name="allowed"
          value={formData.allowed}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default CreateForm
