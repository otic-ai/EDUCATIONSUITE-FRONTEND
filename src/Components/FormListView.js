
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';
import { useParams } from 'react-router-dom';

const FormListView = () => {
  let {logoutUser} = useContext(AuthContext);
  let {authTokens} = useContext(AuthContext);
  const { id } = useParams();
  const history = useNavigate();
    const [names, setNames] = useState([]); // Initialize 'names' as an empty array

    useEffect(() => {
      // Function to make the API call /default/list/
      const fetchData = async () => {
        try {
          const response = await fetch(`/default/list/${id}`,
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
             
                <li>  <Link to={`/formview/${name.tableName}/${name.id}`} key={index}>{name.name}</Link> 
              <Link to={`/formdetails/${name.tableName}/`} >  <button>View Data</button></Link> </li>
           
            </ul>
        
          ))}
       
      </div>
    );
}

export default FormListView