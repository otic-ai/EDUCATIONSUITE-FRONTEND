import React, {useState, useEffect, useContext}from "react";
import { Box, Button, TextField } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./Adminworkspace.css"; // Import the CSS file
import AuthContext from '../../utils/AuthContext';
import Autocomplete from '@mui/material/Autocomplete';

const Contacts = () => {
  const [columns, setColumns] = useState([]);
  const theme = "light"; // Simulate theme value for useTheme hook
  
  let {proxy,authTokens} = useContext(AuthContext);
  const [data, setData] = useState([]);
  const { pk } = useParams();
  

  const [open, setOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('home'); 
  const [selectedChoice, setSelectedChoice] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
    const history = useNavigate();
    const [formData,setFormData] = useState({
      name:'',
      design:'',
      allowed:''
    })
    const handleInputChange = (event, newInputValue) => {
      setInputValue(newInputValue);
      const {name, value} = event.target;
      setFormData((prevFormData)=>({
        ...prevFormData,
        [name]:value,
        allowed:selectedChoice.id
      }));
      };
    
  const handleclick = () => {
    setOpen(!open);
  };

  const handleContentClick = (content) => {
    setSelectedContent(content);
    
  };
  const handleSubmit =async (event) => {
    event.preventDefault();
    if (selectedChoice && selectedChoice.id !== null) {
    await  fetch(`${proxy}/adduser/${selectedChoice}`,{
        method: 'POST',
        headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authTokens.access}`,
      }})
        .then((response) => response.json())
        .then((data) => {
          // Assuming the API returns an array of option objects with a 'label' property
          alert(data.message)  
        })
        .catch((error) => {
          console.error('Error fetching options:', error);
        });
      // Submit the form with the selected choice
    
    }
  };

  useEffect(() => {
    // Simulating API call
    const fetchData = async () => {
      try {
        const response = await fetch(`${proxy}/workspace/users/`,
        {
          method: 'GET', // Replace with the appropriate HTTP method (e.g., POST, PUT, DELETE)
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
          },
        });
        const jsonData = await response.json();

        // Set data
        setData(jsonData);
        const dataWithIds = jsonData.map((item, index) => ({ ...item, id: index + 1 }));
        setData(dataWithIds);
        // Generate columns dynamically based on the keys in the first row
        if (dataWithIds.length > 0) {
          const columnFields = Object.keys(jsonData[0]);
          const generatedColumns = columnFields.map((field) => ({
            field,
            headerName: field,
            width: 150,
          }));
          setColumns(generatedColumns);
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };
    fetch(`${proxy}/user/list/`,{
      method: 'GET',
      headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
    }})
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns an array of option objects with a 'label' property
        setOptions([ ...data]);
      })
      .catch((error) => {
        console.error('Error fetching options:', error);
      });

    fetchData();
  }, []);

  

  return (
    <Box m="20px">
      <Box className="contact-form">
        <form onSubmit={handleSubmit}>
        <Autocomplete
       multiple
       freeSolo
       options={options.map((option) => `${option.id} ${option.first_name} ${option.last_name}`)}
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
        Add User
      </Button>
        </form>
     
       
     
      </Box>

      <DataGrid rows={data} columns={columns} components={{ Toolbar: GridToolbar }} />
    </Box>
  );
};

export default Contacts;
