import logo from './logo.svg';
import './index.css';
import {Route, Routes, Navigate} from "react-router-dom";
import React from 'react';
import Pricing from "./pages/Pricing/Pricing";
import Landingpage from "./pages/landingpage/Landingpage.jsx";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
