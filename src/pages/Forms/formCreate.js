import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../../utils/AuthContext';
import { TextField, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import "./forms.css";
import Header from '../../components/Headerdash/Header';

const CreateForm = () => {
    const [selectedChoice, setSelectedChoice] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
    const history = useNavigate();
    const handleInputChange = (event, newInputValue) => {
        setInputValue(newInputValue);
      };
    
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
      allowed:selectedChoice.id
    }));
  }
  let Create = async (e )=> {
    e.preventDefault();
    if (selectedChoice.length > 0) {
      alert(JSON.stringify(formData))
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
    }} else {
      alert('Please select users allowed to view this form')
    }
  }
  useEffect(() => {
    // Fetch data from the API
    fetch(`${proxy}/usersearch/`,{
      method: 'GET',
      headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
    }})
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns an array of option objects with a 'label' property
        setOptions([{ id: null, first_name: 'All', last_name : '' }, ...data]);
      })
      .catch((error) => {
        console.error('Error fetching options:', error);
      });
  }, []);

  return (
    <div> <Link to='/' ><Header /></Link>   
    <div className="centered-form" >
    <form  onSubmit={Create} >
     
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
  
      <Autocomplete
       multiple
       freeSolo
       options={options.map((option) => `${option.first_name} ${option.last_name}`)}
        getOptionLabel={(option) => option}
        value={selectedChoice}
        onChange={(event, newValue) => {
          setSelectedChoice(newValue);
        }}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        renderInput={(params) => <TextField {...params} label="Select a choice" />}
      />
      <Button type="submit" variant="contained" color="primary" disabled={!selectedChoice}>
        Create
      </Button>
    </form></div></div>
  )
}

export default CreateForm