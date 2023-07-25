import React,{ useCallback, useEffect, useState, useContext } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import FormFillPage from './Components/FormFillPage';
import {
  Routes,
  Route,
  Router,
  BrowserRouter,
  useNavigationType,
  useLocation,
  Navigate
} from "react-router-dom";
import FormListView from './Components/FormListView';
import Signup from './Components/Signup';
import LoginForm from './Components/Login';
import {AuthProvider} from './utils/AuthContext';


function App() {
  const [authenticated, setAuthenticated,] = useState(true); 


 return <BrowserRouter>
  <AuthProvider>
   <Routes>
 
 <Route exct  path="/" element={<FormListView />} />
 <Route exct  path="/login" element={<LoginForm />} />
 <Route exact path="/signup" element={<Signup />} />
 <Route exact path="/formview/:pk" element={authenticated ? <FormFillPage />: <Navigate to='login' />} />
 
</Routes>
</AuthProvider>
 </BrowserRouter>
 
 
} 

export default App;
