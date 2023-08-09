import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';
import LoadingSpinner from './LoadSpin';
import { useParams } from 'react-router-dom';

const CreateDepartment = () => {
    const { pk } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        head:'',
        search:null,
        userid:'',
        workspace:`${pk}`
      })
      const [userid,setUserid] = useState('')
      const addUser = async (id,fname,lname)=>{
         await setUserid(id)
        await setFormData({name:`${formData.name}`,userid:`${id}`,search:`${fname} ${lname}`,
         workspace:`${pk}`})
      }
      const [searchnames, setSearchnames] = useState([]); 
    const [loading, setLoading] = useState(true)
    let {logoutUser} = useContext(AuthContext);
    let {authTokens, proxy} = useContext(AuthContext);
    const history = useNavigate();
   
    const  searchDepartments= async () => {
        try {
          const response = await fetch(`${proxy}/departmentsearch/${formData.head}/${pk}`,
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
          setSearchnames(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    const handleSubmit = async (e)  => {
        e.preventDefault();
        if (formData.search===null){
          alert('Select head for this department')
        } else {
        try {
        const response = await fetch(`${proxy}/createDepartment/`,
        {
          method: 'POST', // Replace with the appropriate HTTP method (e.g., POST, PUT, DELETE)
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
          },
          body: JSON.stringify(formData),
        }); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
         
          const data = await response.json();
          alert(data.message)
          history("/");
          
         
    
    }
        catch (error) {
            console.error('Error fetching data:', error);
          }}
    }

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          };
  useEffect (()=>{
  searchDepartments()
  },[formData])

  return (
    <div><form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Department Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Department Head:</label>
          <input
            type="text"
            id="search"
            name="search"
            value={formData.search}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="username">Search Head Name:</label>
          <input
            type="text"
            id="head"
            name="head"
            value={formData.head}
            onChange={handleChange}
            
          />{searchnames.map((name, index) => (
            <div>
               
            <ul>
             
                <li>  <a href='#' key={index}><div style={{display:'flex'}}>{name.first_name }<div style={{width:'10px'}} /> {name.last_name }
                 <button type="button" onClick={()=>{addUser(name.id,name.first_name ,name.last_name)}} > Add User</button></div></a>  </li>
           
            </ul>
        </div>
          ))}
        </div>
        <button>Create Department</button>
        </form></div>
  )
}

export default CreateDepartment