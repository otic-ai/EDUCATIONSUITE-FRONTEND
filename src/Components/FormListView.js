
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './LoadSpin';

const FormListView = () => {
  localStorage.setItem('sign', true)
  const [loading, setLoading] = useState(true)
  let {logoutUser} = useContext(AuthContext);
  let {authTokens,proxy} = useContext(AuthContext);
  const { id } = useParams();
  const history = useNavigate();
    const [names, setNames] = useState([]); // Initialize 'names' as an empty array
    const [departments, setDepartments] = useState([]);
  const availableDepartments = async ()=>{
    try {
      const response = await fetch(`${proxy}/availabledepartments/${id}`,
      {
        method: 'GET', // Replace with the appropriate HTTP method (e.g., POST, PUT, DELETE)
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokens.access}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
     
      setLoading(true)
      const jsonData = await response.json();
      // Extracting 'name' property from each object
      setDepartments(jsonData);
      setLoading(false)

    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }


    useEffect(() => {
      // Function to make the API call /default/list/
      const fetchData = async () => {
        try {
          const response = await fetch(`${proxy}/default/list/${id}`,
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
      availableDepartments(); 
    }, []);
  
    return (
      <div>
        <button onClick={logoutUser} >logout</button>
        <Link to='/createForm' >Create Form</Link>
        <div style={{width:'20vw'}}> <Link to={`/user_management/${id}`} >User Management</Link></div>
        <div style={{width:'20vw'}}> <Link to={`/createDepartment/${id}`} >Create Department</Link></div>
          
        <h1>Available Forms</h1>
        {loading ? <LoadingSpinner /> : <div>
        {names.map((name, index) => (
            <ul>
             
                <li>  <Link to={`/formview/${name.tableName}/${name.id}`} key={index}>{name.name}</Link> 
              <Link to={`/formdetails/${name.tableName}`} >  <button>View Data</button></Link> </li>
           
            </ul>
        
          ))} </div> }
         <h1>Available Departments</h1>
        {loading ? <LoadingSpinner /> : <div>
        {departments.map((name, index) => (
            <ul>
             
                <li>  <Link to={`/department_management/${id}/${name.name}`} key={index}>{name.name}</Link> 
              </li>
           
            </ul>
        
          ))} </div> } 
       
      </div>
    );
}

export default FormListView