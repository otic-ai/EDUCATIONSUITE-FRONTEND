import React,{ useCallback, useEffect, useState, useContext } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import FormFillPage from './Components/FormFillPage';
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate
} from "react-router-dom";
import FormListView from './Components/FormListView';
import Createworkspace from './Components/CreateWorkspace';
import LoginForm from './Components/Login';
import {AuthProvider} from './utils/AuthContext';
import CreateForm from './Components/CreateForm';
import WorkspaceListView from './Components/ViewWorkspace';
import SingleWorkspaceView from './Components/SingleWorkspace';
import Signup from './Components/Signup';
import Table from './Components/TableView';



function App() {
  const [authenticated, setAuthenticated,] = useState(true); 


 return <BrowserRouter>
 
  <AuthProvider>
   <Routes>
 <Route exct  path="/forms/:id" element={<FormListView />} />
 <Route exact path="/" element={<WorkspaceListView />} />
 <Route exct  path="/login" element={<LoginForm />} />
 <Route exct  path="/signup" element={<Signup />} />
 <Route exact path="/createworkspace" element={<Createworkspace />} />
 <Route exact path="/createForm" element={<CreateForm />} />
 <Route exact path="/formdetails/:pk" element={<Table />} />
 <Route exact path="/formview/:name/:pk" element={authenticated ? <FormFillPage />: <Navigate to='login' />} />
 <Route exact path="/workspaceview/:pk" element={ <SingleWorkspaceView />} />
 
</Routes>
</AuthProvider>
 </BrowserRouter>
 
 
} 

export default App;
