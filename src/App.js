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
import CreateWorkspaces from './components/CreateWorkspaces/CreateWorkspaces';
import FormFillPage from './pages/Forms/ViewForm';
import DynamicColumnsDataGrid from './pages/Forms/ViewFormEntryData';


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
        <Route exact path="/formdetails/:pk" element={<DynamicColumnsDataGrid />} />      
        <Route path='/' element={<Admindash/>}/>
        <Route exact path="/formview/:name/:pk" element={<FormFillPage />}/>
        <Route path='/workspace/create' element={<CreateWorkspaces />}/>
        <Route path="/Teacher" element={<Teachersdash />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
