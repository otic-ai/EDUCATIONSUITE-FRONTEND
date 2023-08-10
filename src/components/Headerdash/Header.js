import React , { useState, useEffect, useContext }from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Headerdash.css'

import logo from '../../components/images/logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthContext from '../../utils/AuthContext';

const Headerdash = ({click}) => {
  const history = useNavigate();
  const [statusCode, setStatusCode] = useState(null);
  let {authTokens, proxy} = useContext(AuthContext);
  const [options,setOptions ]= useState(['']) 
  const [defaultSpace,setDefaultSpace ]= useState(['']) 
  const [selectedOption, setSelectedOption] = useState('');
  const [imageUrl, setImageUrl] = useState('data:image/png;base64,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');
 
  const switchWorkspace= async (workspaceid) => {
    try {
      const response = await fetch(`${proxy}/institution/switch/${workspaceid}`,
      {
        method: 'GET', // Replace with the appropriate HTTP method (e.g., POST, PUT, DELETE)
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokens.access}`,
        },
      }); // Replace with your API URL
    
      
     const jsonData = await response.json();
      if (jsonData.message !=='Done' ){
        alert('An error occured')
      } else {
        localStorage.setItem('id', workspaceid)
      }
    
     
     
     
      // Extracting 'name' property from each object
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    switchWorkspace(selectedValue);

    window.location.reload();
   // alert(`You selected: ${selectedValue}`);
  };


  useEffect(  ()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`${proxy}/institution/list/`,
        {
          method: 'GET', // Replace with the appropriate HTTP method (e.g., POST, PUT, DELETE)
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
          },
        }); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        localStorage.setItem('loading', true)
        const jsonData = await response.json();
       await  setOptions(jsonData)
       setStatusCode(response.status)
       
        localStorage.setItem('loading', false)
       
       
        // Extracting 'name' property from each object
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };

    const fetchdefault = async () => {
      try {
        const response = await fetch(`${proxy}/institution/default/`,
        {
          method: 'GET', // Replace with the appropriate HTTP method (e.g., POST, PUT, DELETE)
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
          },
        }); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        localStorage.setItem('loading', true)
        const jsonData = await response.json();
       await setDefaultSpace(jsonData)
       setStatusCode(response.status)
       localStorage.setItem('id', jsonData[0].id)
     localStorage.setItem('loading', false)
    
     
    
        
        // Extracting 'name' property from each object
        
      } catch (error) {
        localStorage.setItem('id', null)
        console.error('Create Workspace');
        localStorage.setItem('loading', true)
      
      }
      
    };
    fetchdefault();
      fetchData();
     
  },[options.defaultSpace])

  return (
    <div className='header'>
      <img src={logo} alt='logo'/>
      <button  onClick={click}>< FontAwesomeIcon className="menu" icon={faBars}/></button>
        
        <form>
          <input type='text' placeholder='Search here' name='name'/>
          <div className='drop'> <select value={selectedOption} onChange={handleDropdownChange}>
          {defaultSpace.map((option,index) => (
          <option key={index} value={option.id}>
            {option.institution}
          </option>
        ))}
        {options.map((option,index) => (
          <option key={index} value={option.id}>
            {option.institution}
          </option>
        ))}
      </select>
      <img src={imageUrl}  alt=''/>  </div>
        </form>
        
    </div>
  )
}

export default Headerdash
