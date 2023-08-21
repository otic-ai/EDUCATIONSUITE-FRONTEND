import React,  { useState, useEffect, useContext }  from 'react';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AuthContext from '../utils/AuthContext';
import axios from "axios";

function InputWithFileModal() {
  let { proxy, authTokens } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState(null);
  const [wordExists, setWordExists] = useState(false);
  const [existingWords,setExistingWords ] = useState([]);

  const checkWordExists = (word) => {
    // Replace this with your actual logic to check word existence in your data source (database, API, etc.)
    // For now, let's assume we have a list of existing words.
    
    const lowercaseWord = word.toLowerCase();
    return existingWords.some(existingWord => existingWord.toLowerCase() === lowercaseWord);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    const exists = checkWordExists(newValue);
    setWordExists(exists);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit =  async(event) => {
    event.preventDefault();
    if (!wordExists) {
      if (File) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append("name",inputValue );
        try {
          const response = await axios.post(`${proxy}/default/api/upload/`, formData,{
         
            headers: {    
            "content-type": "multipart/form-data",
             'Authorization': `Bearer ${authTokens.access}`,
              },
        
          });
          const data =  response.json();
          setOpen(false);
         
        } catch (error) {
         
        
        }
      } else {
        alert('No file selected')
      }
    } else {
      alert('File already exists. Choose another word.');
    }
    handleClose();
  };

  // ... Other functions (checkWordExists, handleInputChange, handleFileChange, handleSubmit)
  const modalStyle = {
    position: 'absolute',
    width: 300,
    height: 300,
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none', // Remove outline when focused
    padding: 20,
  };

  useEffect(()=>{
    const fetchAvailableTableNames = async () => {
    let response = await fetch(`${proxy}/default/available/`, {
      method:'GET',
      headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${authTokens.access}`,
      },
      
  })
  let data = await response.json()
  setExistingWords(data);
 
}
  fetchAvailableTableNames();
  
  },[])
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Upload Excel/CSV file
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle}>
          <h2>Enter a file name and Upload a File</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Enter file name"
              value={inputValue}
              onChange={handleInputChange}
              error={wordExists}
              helperText={wordExists ? 'Name already exists. Choose another.' : ''}
            required/>
            <input type="file"   accept=".xlsx, .csv" onChange={handleFileChange} required/>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default InputWithFileModal;




