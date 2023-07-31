import logo from './logo.svg';
import './index.css';
import {Route, Routes, Navigate} from "react-router-dom";
import React from 'react';
import Landing from './components/Landing';
import Billing from './components/Billing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/billing" element={<Billing />}/>
      </Routes>
    </div>
  );
}

export default App;
