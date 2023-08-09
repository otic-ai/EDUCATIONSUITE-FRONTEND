import React ,{useState, useEffect, useContext}from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';
import LoadingSpinner from './LoadSpin';
import { useParams } from 'react-router-dom';

const DepartmentUser = () => {
    const { id,departmentname } = useParams();
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)
    let {authTokens, proxy} = useContext(AuthContext);
    const [names, setNames] = useState([]); 
    const [searchnames, setSearchnames] = useState([]); 
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
  })
  const handleSubmit = async (e)  => {
    e.preventDefault();}
  const addUsers= async (userid) => {
    try {
      const response = await fetch(`${proxy}/adduser/${id}/${userid}`,
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
      setLoading2(true)
      const jsonData = await response.json();
   alert(jsonData.message)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteUsers= async (userid) => {
    try {
      const response = await fetch(`${proxy}/deleteuser/${id}/${userid}`,
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
      setLoading2(true)
      const jsonData = await response.json();
   alert(jsonData.message)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const searchUsers= async () => {
    try {
      const response = await fetch(`${proxy}/usersearch/${formData.name}`,
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
      setLoading2(true)
      const jsonData = await response.json();
      // Extracting 'name' property from each object
      setSearchnames(jsonData);
      setLoading2(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(()=>{
    const fetchWorkspaceUsers= async () => {
        try {
          const response = await fetch(`${proxy}/department_users/${departmentname}/${id}`,
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
       
      fetchWorkspaceUsers();
      searchUsers();
  },[formData])
  return (
    <div>

<h1>Department Management</h1>
 
<div>
        <h3>User search</h3>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Search Box:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            
          />
        </div>
        {searchnames.map((name, index) => (
            <div>
               
            <ul>
             
                <li>  <a href='#' key={index}><div style={{display:'flex'}}>{name.first_name }<div style={{width:'10px'}} /> {name.last_name } <button onClick={()=>addUsers(name.id)}> Add User</button></div></a>  </li>
           
            </ul>
        </div>
          ))}
          </form>
       </div>


        {loading ? <LoadingSpinner /> : <div>
        <h3>Users part of Department</h3>
        {names.map((name, index) => (
            <div>
               
            <ul>
             
                <li>  <Link key={index}><div style={{display:'flex'}}>{name.first_name }<div style={{width:'10px'}} /> 
                {name.last_name }<div style={{width:'10px'}}></div><button onClick={()=>deleteUsers(name.id)}> Remove User</button></div></Link>  </li>
           
            </ul>
        </div>
          ))}
       </div>
       }
    </div>
  )
}

export default DepartmentUser