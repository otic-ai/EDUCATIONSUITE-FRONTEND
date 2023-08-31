import React,  { useState, useEffect, useContext }  from 'react';
import './Adminstudent.css';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import AuthContext from '../../utils/AuthContext';

const AddFieldModal = ({ isOpen, onClose, onAddField }) => {
  const [fieldType, setFieldType] = useState('text');
  const [fieldName, setFieldName] = useState('');
  const [isRequired, setIsRequired] = useState(false);

  const handleAddField = () => {
    if (fieldType && fieldName) {
      onAddField({ type: fieldType, name: fieldName, required: isRequired, value: '' });
      setFieldType('text');
      setFieldName('');
      setIsRequired(false);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Add New Field</h2>
        <div>
          <FormControl>
            <label>Field Type:</label>
            <Select
              value={fieldType}
              onChange={(e) => setFieldType(e.target.value)}
            >
              <MenuItem value="text">Text</MenuItem>
              <MenuItem value="number">Number</MenuItem>
              <MenuItem value="date">Date</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="tel">Phone Number</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <label>Field Name:</label>
          <TextField
            type="text"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
          />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={isRequired}
                onChange={() => setIsRequired(!isRequired)}
              />
            }
            label="Required"
          />
        </div>
        <Button variant="contained" onClick={handleAddField}>
          Add Field
        </Button>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

const Adminstudent = () => {
  let { proxy, authTokens } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [increment, setIncrement] = useState(0);
  const [formData, setFormData] = useState({
    student_number: '',
  });

  const [wordExists, setWordExists] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [additionalFields, setAdditionalFields] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [disallowedWords,setDisallowedWords] = useState(['ds', 'ajj', 'car']);

  const openModal = () => {
    setModalOpen(true);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    const exists = checkWordExists(newValue);
    setWordExists(exists);
  };

  const checkWordExists = (word) => {
    const lowercaseWord = word.toLowerCase();
    return disallowedWords.some((existingWord) => existingWord.toLowerCase() === lowercaseWord);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddField = (fieldConfig) => {
    setAdditionalFields([...additionalFields, fieldConfig]);
  };

  const handleFieldChange = (index, value) => {
    const updatedFields = [...additionalFields];
    updatedFields[index].value = value;
    setAdditionalFields(updatedFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (disallowedWords.includes(formData.studentno)) { setErrorMessage('Student Number exists disallowed word.'); }
     else { 
      const formValues = { ...formData,student_number: inputValue  }; additionalFields.forEach((field) => { formValues[field.name] = field.value; formValues[`${field.name}_type`] = field.type; formValues[`${field.name}_required`] = field.required; }); 
   
     setErrorMessage('');
     try {
      const response = await axios.post(`${proxy}/default/register_student`, formValues,{
     
        headers: {    
        "content-type": "application/json",
         'Authorization': `Bearer ${authTokens.access}`,
          },
    
      }).then(response =>{
        if (response.data.message !=='Success'){
          alert(response.data.message)
        }
      
        setIncrement(increment+1)
      setInputValue('')
      });
     
    } catch (error) {
     
    
    }
    }
  };
  useEffect(()=>{
    const fetchs = async()=>{
      let response = await fetch(`${proxy}/default/get_form_and_valid_student_numbers`, {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
        },
    })
    let data = await response.json()
   setDisallowedWords(data.student_numbers)
   setAdditionalFields(data.form.columns)
    }
    fetchs()
  },[increment])

  return (
    <div className='payments'>
     
        <Button variant="contained" onClick={openModal}>Add New Field</Button>
        <form onSubmit={handleSubmit} style={{width:'100%'}}>
          <div style={{display:'grid',gap:'20px', gridTemplateColumns:'repeat(auto-fit, minmax(400px, 1fr)'}}>
          <div style={{marginLeft:'0px'}} >
            <TextField  style={{width:'400px'}}
              label="Enter Student name"
              value={inputValue}
              onChange={handleInputChange}
              error={wordExists}
              helperText={wordExists ? 'Student Number  already exists. Choose another.' : ''}
             
            />  
            
          </div>
          {additionalFields.map((field, index) => (
            <div key={index} style={{display:'flex',marginLeft:'0px',flexDirection:'row'}} >
           <button onClick={async ()=>{
               let response = await fetch(`${proxy}/default/deleteformfield`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${authTokens.access}`,
                },
                body:JSON.stringify(field)
            })

            await response.json()
            setIncrement(increment+1)
           }} style={{
        backgroundColor: 'transparent',
        width: '15px',
        border: 'none', // To remove default button styling
        padding: '0', // To remove default padding
        cursor: 'pointer', // To indicate it's clickable
      }} >
           <DeleteIcon style={{color:'black'}} />
           </button>
             <div style={{width:'10px'}} /> 
              <TextField style={{width:'400px'}}
              label={field.name}
                type={field.type}
                name={field.name}
                value={field.value}
                required={field.required}
                onChange={(e) => handleFieldChange(index, e.target.value)}
           />
        
            </div>
          ))}</div>
          <button type='submit' className="formbutton">Submit</button>
        </form>
    

      <AddFieldModal isOpen={modalOpen} onClose={closeModal} onAddField={handleAddField} />
    </div>
  )
}

export default Adminstudent;
