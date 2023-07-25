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
import Signup from '../Components/Signup';
import LoginForm from '../Components/Login';

function PrivateRoute() {
 
  const [authenticated, setAuthenticated,] = useState(true); 
  

 return <div>
 
 </div>
 
 
} 

export default PrivateRoute;
