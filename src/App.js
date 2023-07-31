import logo from './logo.svg';
import './index.css';
import {Route, Routes, Navigate} from "react-router-dom";
import React from 'react';
import Landing from './components/Landing';
import Billing from './components/Billing';
import Login from './components/Login';
import Register from './components/Register';
import Subjects from './components/Subjects';
import Students from './components/Students';
import Admindash from './components/Admindash';
import Teacherdash from './components/Teacherdash';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/billing" element={<Billing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/students" element={<Students />}/>
        <Route path="/subjects" element={<Subjects />}/>
        <Route path="/admindash" element={<Admindash />}/>
        <Route path="/teacherdash" element={<Teacherdash />}/>
      </Routes>
    </div>
  );
}

export default App;
