import logo from './logo.svg';
import './index.css';
import {Route, Routes, Navigate} from "react-router-dom";
import React from 'react';
import Pricing from "./pages/Pricing/Pricing";
import Landingpage from "./pages/landingpage/Landingpage.jsx";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Admindash from './pages/Admindash/Admindash';
import { AuthProvider } from './utils/AuthContext';
import "./App.css";
import Admindashboard from "./pages/admindashboard/Admindashboard";
import Teachersdash from "./pages/teachersdashboard/Teachersdash";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Signup" element={<Signup />} />       
        <Route path='/' element={<Admindash/>}/>
        <Route path="/Teacher" element={<Teachersdash />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
