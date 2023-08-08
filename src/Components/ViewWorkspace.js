
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';
import LoadingSpinner from './LoadSpin';

const WorkspaceListView = () => {
  localStorage.setItem('sign', true)
  const [loading, setLoading] = useState(true)
  let {logoutUser} = useContext(AuthContext);
  let {authTokens, proxy} = useContext(AuthContext);
  const history = useNavigate();
    const [names, setNames] = useState([]); // Initialize 'names' as an empty array

    useEffect(() => {
      // Function to make the API call
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
          setLoading(true)
          const jsonData = await response.json();
          // Extracting 'name' property from each object
          setNames(jsonData);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <button onClick={logoutUser} >logout</button>
        <Link to='/createworkspace' >Create Workspace</Link>
        <div style={{width:'20px'}}></div>
        <Link to='/signup' >Signup</Link>
        <h1>Available Workspace</h1>
        {loading ? <LoadingSpinner /> : <div>
        {names.map((name, index) => (
            <ul>
             
                <li>  <Link to={`/forms/${name.id}`} key={index}>{name.institution}</Link>  </li>
           
            </ul>
        
          ))}
       </div>}
        
      </div>
    );
}

export default WorkspaceListView