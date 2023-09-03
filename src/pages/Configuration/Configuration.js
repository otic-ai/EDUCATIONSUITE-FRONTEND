import * as React from 'react';
import { useState, useEffect, useContext }  from 'react';
import './Configuration.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReusableTable from './table';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import EnhancedTable from './table2';
import TextField from '@mui/material/TextField';
import { AddBox } from '@mui/icons-material';
import AuthContext from '../../utils/AuthContext';
import axios from 'axios';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const Configuration = () => {
  let { proxy, authTokens } = useContext(AuthContext);
  const [startdate, setStartdate] = useState(null)
  const [term,setTerm]=useState(null)
  const [enddate, setEnddate] = useState(null)
  const [subjectinputValue, setSubjectnputValue] = useState('');
  const [classinputValue, setClassinputValue,] = useState('');
  const [disallowedWords,setDisallowedWords] = useState(['p7']);
  const [wordExists, setWordExists] = useState(false);
  const [subjectwordExists, setSubjectwordExists] = useState(false);
  const [subjectrowData,setSubjectrowData ]= useState([])
  const [classrowData,setClassrowData ]= useState([])
  const [acadrowData,setAcadrowData ]= useState([])
  const [availableTerm, setAvailableTerm] = useState('');
  const [Termlists, setTermlists] = useState([]);
  const [chooseacademicyear, setChooseacademicyear]= useState(null)
  const [academicyearname, setAcademicyearname]= useState(null)
    const handleSubjectInputChange = (event) => {
      const newValue = event.target.value;
      setSubjectnputValue(newValue);
      const exists = checkWordExists(newValue);
      setWordExists(exists);
    };
    const handleClassInputChange = (event) => {
      const newValue = event.target.value;
      setClassinputValue(newValue);
      const exists = checkWordExists(newValue);
      setSubjectwordExists(exists);
    };
  
    const checkWordExists = (word) => {
      const lowercaseWord = word.toLowerCase();
      return disallowedWords.some((existingWord) => existingWord.toLowerCase() === lowercaseWord);
    };
  
    const acadheadCells = [
      {
        id: 'academic_year',
        numeric: false,
        disablePadding: true,
        label: 'Academic Year',
      },
      {
        id: 'term_name',
        numeric: false,
        disablePadding: true,
        label: 'Term',
      },
      {
        id: 'start_date',
        numeric: true,
        disablePadding: false,
        label: 'Start Date',
      },
      {
        id: 'end_date',
        numeric: false,
        disablePadding: false,
        label: 'End Date',
      },
      {
        id: 'student',
        numeric: true,
        disablePadding: false,
        label: 'Number of students',
      }
      // Add other column headers here
    ];


const subjectheadCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Subject',
    },
    {
      id: 'head',
      numeric: false,
      disablePadding: true,
      label: 'Head',
    },
    {
      id: 'members',
      numeric: true,
      disablePadding: false,
      label: 'Number of members',
    },
    {
      id: 'date',
      numeric: false,
      disablePadding: false,
      label: 'Date Created',
    }
    // Add other column headers here
  ];
  const classheadCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Class',
    },
    {
      id: 'head',
      numeric: false,
      disablePadding: true,
      label: 'Head',
    },
    {
      id: 'number_of_students',
      numeric: true,
      disablePadding: false,
      label: 'Number of students',
    },
    {
      id: 'date',
      numeric: false,
      disablePadding: false,
      label: 'Date Created',
    }
    // Add other column headers here
  ];
  
 
useEffect(()=>{
  const gettable = async()=>{
    const response = await axios.get(`${proxy}/default/config_tables`, {
     
      headers: {    
      "content-type": "application/json",
       'Authorization': `Bearer ${authTokens.access}`,
        },
    
    }).then(response =>{
     
   setSubjectrowData(response.data.subject)
   setAcadrowData(response.data.academic_year_confi_table)
   setClassrowData(response.data.class_list_table)
   setDisallowedWords(response.data.existing_subjects)
   setTermlists(response.data.academic_year)
    });
  }
  gettable()
},[subjectinputValue,classinputValue,term,academicyearname,chooseacademicyear])
  return (
    <div style={{display:'grid',gap:'10px', gridTemplateColumns:'repeat(auto-fit, minmax(550px, 1fr)'}}>
    
    <Card sx={{ minWidth: 350 }}>
        <CardContent>
        <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
          Academic Year Configuration
        </Typography>  

        <div style={{display:'flex',flexDirection:'row'}}>
          <TextField  style={{width:'300px', maxWidth:'70vw'}}
              label="Enter Academic Year name"
              value={academicyearname}
              onChange={(event)=>{
                const newValue = event.target.value
                setAcademicyearname(newValue)
                
              }}
              error={wordExists}
              helperText={wordExists ? 'Subject name already exists. Choose another.' : ''}
             
            /> 
            <div style={{width:'10px'}} />
            <Button style={{width:'60px', height:'50px'}} onClick={async()=>{
              if (academicyearname !==null){
               const cl = academicyearname.replace(/\//g, '__')
                const response = await axios.post(`${proxy}/default/add_academic/${cl}`, subjectinputValue,{
     
                  headers: {    
                  "content-type": "application/json",
                   'Authorization': `Bearer ${authTokens.access}`,
                    },
                
                }).then(response =>{
                  if (response.data.message !=='Success'){
                    alert(response.data.message)
                  }
                setAcademicyearname('')
                  setDisallowedWords([...disallowedWords,response.data.update])
                });
              }
 
            }} startIcon={<AddBox />}>
Add
</Button>
          </div>
<div style={{height:'60px'}} />
        <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
          Academic Year Term
        </Typography> 
        <div style={{display:'grid',gap:'5px', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 0fr)'}}>
        <Box sx={{ maxWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Academic Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chooseacademicyear}
          label="Class"
         onChange={(event)=>{
          const newValue = event.target.value;
          setChooseacademicyear(newValue)
         }}
        >{Termlists.map((option, index) => (
    <MenuItem   key={index} value={option}>{option}</MenuItem>
)  )}

          
        </Select>
      </FormControl>
    </Box>
        <TextField  style={{width:'180px', maxWidth:'70vw'}}
              label="Enter Term Name"
              value={term}
              onChange={(event)=> {
                const newValue = event.target.value;
                setTerm(newValue)}} 
              error={subjectwordExists}
              helperText={subjectwordExists ? 'Class already exists. Choose another.' : ''}
             
            /> 
          <div style={{display:'flex', flexDirection:'row'}}>
            <div>Start Date</div><div style={{width:'4px'}} />
            <input type='date' value={startdate} onChange={(event)=> {
               const newValue = event.target.value;
              setStartdate(newValue)}} />
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <div>End Date</div><div style={{width:'4px'}} />
            <input type='date' value={enddate} onChange={(event)=> {
               const newValue = event.target.value;
              setEnddate(newValue)}} />
          </div>
        
          <Button style={{width:'60px', height:'50px'}} onClick={async()=>{
            if (term !==null && startdate !==null && enddate!==null && chooseacademicyear !==null){
              const response = await axios.post(`${proxy}/default/add_term/${term.replace(/\//g, '__')}/${startdate.replace(/\//g, '__')}/${enddate.replace(/\//g, '__')}/${chooseacademicyear.replace(/\//g, '__')}`, classinputValue,{
     
                headers: {    
                "content-type": "application/json",
                 'Authorization': `Bearer ${authTokens.access}`,
                  },
              
              }).then(response =>{
                if (response.data.message !=='Success'){
                  alert(response.data.message)
                }
              setTerm('')
              setStartdate('')
              setEnddate('')
                setDisallowedWords([...disallowedWords,response.data.update])
              });
            } else {
              alert('Please fill in all the fields')
            }

            }} startIcon={<AddBox />}>
Add
</Button>
          </div>  
          <EnhancedTable headCells={acadheadCells} data={acadrowData} />   
        </CardContent>
    </Card>

    <Card sx={{ minWidth: 350 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Subjects
        </Typography> 
        <form>
          <div style={{display:'flex',flexDirection:'row'}}>
          <TextField  style={{width:'300px', maxWidth:'70vw'}}
              label="Enter Subject name"
              value={subjectinputValue}
              onChange={handleSubjectInputChange}
              error={wordExists}
              helperText={wordExists ? 'Subject name already exists. Choose another.' : ''}
             
            /> 
            <div style={{width:'10px'}} />
            <Button style={{width:'60px', height:'50px'}} onClick={async()=>{
 const response = await axios.post(`${proxy}/default/add_subject/${subjectinputValue.replace(/\//g, '__')}`, subjectinputValue,{
     
  headers: {    
  "content-type": "application/json",
   'Authorization': `Bearer ${authTokens.access}`,
    },

}).then(response =>{
  if (response.data.message !=='Success'){
    alert(response.data.message)
  }
setSubjectnputValue('')
  setDisallowedWords([...disallowedWords,response.data.update])
});
            }} startIcon={<AddBox />}>
Add
</Button>
          </div>
       
             </form>
        <EnhancedTable headCells={subjectheadCells} data={subjectrowData} />
        </CardContent>
    </Card>
    <Card sx={{ minWidth: 350 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Classes
        </Typography>  
        <form>
          <div style={{display:'flex',flexDirection:'row'}}>
          <TextField  style={{width:'300px', maxWidth:'70vw'}}
              label="Enter class"
              value={classinputValue}
              onChange={handleClassInputChange}
              error={subjectwordExists}
              helperText={subjectwordExists ? 'Class already exists. Choose another.' : ''}
             
            /> 
            <div style={{width:'10px'}} />
            <Button style={{width:'60px', height:'50px'}} onClick={async()=>{
 const response = await axios.post(`${proxy}/default/add_class/${classinputValue.replace(/\//g, '__')}`, classinputValue,{
     
  headers: {    
  "content-type": "application/json",
   'Authorization': `Bearer ${authTokens.access}`,
    },

}).then(response =>{
  if (response.data.message !=='Success'){
    alert(response.data.message)
  }
setClassinputValue('')
  setDisallowedWords([...disallowedWords,response.data.update])
});
            }} startIcon={<AddBox />}>
Add
</Button>
          </div>
       
             </form> 
             <EnhancedTable headCells={classheadCells} data={classrowData} />
        </CardContent>
    </Card> 
    </div>
  )
}

export default Configuration