
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';

const FormListView = () => {
  let {logoutUser} = useContext(AuthContext);
  let {authTokens} = useContext(AuthContext);
  const history = useNavigate();
    const [names, setNames] = useState([]); // Initialize 'names' as an empty array

    useEffect(() => {
      // Function to make the API call
      const fetchData = async () => {
        try {
          const response = await fetch('/default/list/',
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
          const jsonData = await response.json();
          // Extracting 'name' property from each object
          setNames(jsonData);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <button onClick={logoutUser} >logout</button>
        <Link to='/createForm' >Create Form</Link>
        <h1>Available Forms</h1>
        
          {names.map((name, index) => (
            <ul>
             
                <li>  <Link to={`/formview/${name.id}`} key={index}>{name.name}</Link>  </li>
           
            </ul>
        
          ))}
       
      </div>
    );
}

export default FormListView