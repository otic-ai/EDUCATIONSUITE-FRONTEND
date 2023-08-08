
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './LoadSpin';

const FormDetails = () => {
  localStorage.setItem('sign', true)
  const { pk } = useParams();
  let {logoutUser} = useContext(AuthContext);
  let {authTokens, proxy} = useContext(AuthContext);
  const [loading, setLoading] = useState(true)
  const history = useNavigate();
    const [names, setNames] = useState([]); // Initialize 'names' as an empty array

    useEffect(() => {
      // Function to make the API call
      const fetchData = async () => {
        try {
          const response = await fetch(`${proxy}/default/details/${pk}`,
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
          setNames(jsonData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <button onClick={logoutUser} >logout</button>
        <h1>Form Data</h1>
        {loading ? <LoadingSpinner /> : <div>
        {names.map((name, index) => (
          <ul>
           
              <li key={index}>  <a >{name.tableName}</a>  </li>
         
          </ul>
      
        ))}</div>}
       
       
      </div>
    );
}

export default FormDetails