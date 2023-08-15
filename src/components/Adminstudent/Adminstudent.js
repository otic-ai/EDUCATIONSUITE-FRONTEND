import React, { useEffect,useState } from 'react';
import './Adminstudent.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Adminstudent = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    axios.get(" http://localhost:3030/students")
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[])
  
    const [inputData, setInputData] = useState({
      id:'',
      name:'',
      regno:'',
      class:''
    });
    const navigate = useNavigate()
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post("http://localhost:3030/students", inputData)
      .then(res => {
        alert("Student Registered successfully!")
        navigate('/')
      })
    }
  return (
    <div className='payments'>
    <form onSubmit={handleSubmit}>
      <div>
      <label>ID</label>
      <input type='number' name='id' onChange={e => setInputData({...inputData, id:e.target.value})}/>
      </div>
      <div>
      <label>Name</label>
      <input type='text' name="name" onChange={e => setInputData({...inputData, name:e.target.value})}/>
      </div>
      <div>
      <label>Reg.no</label>
      <input type='text' name='regno' onChange={e => setInputData({...inputData, regno:e.target.value})}/>
      </div>
      <div>
      <label>class</label>
      <input type='text' name='class' onChange={e => setInputData({...inputData, class:e.target.value})}/>
      </div>
      <button>Add Student</button>
    </form>
    <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Reg.no</th>
          <th>class</th>
          <th>Action</th>
        </tr>
      {data.map((d,i) => (
          <tr key={i}>
          <td>{d.id}</td>
          <td>{d.name}</td>
          <td>{d.regno}</td>
          <td>{d.class}</td>
          <td>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </tr>
      ))}
      </table>
    </div>
  )
}

export default Adminstudent