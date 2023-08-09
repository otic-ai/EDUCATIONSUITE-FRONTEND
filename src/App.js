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
import AddUser from './Components/AddUser';
import CreateDepartment from './Components/CreateDepartment';
import DepartmentUser from './Components/DepartmentUser';



function App() {
  const [authenticated, setAuthenticated,] = useState(true); 


 return <BrowserRouter>
 
  <AuthProvider>
   <Routes>
 <Route exct  path="/forms/:id" element={<FormListView />} />
 <Route exact path="/" element={<WorkspaceListView />} />
 <Route exact path="/user_management/:id" element={<AddUser />} />
 <Route exact path="/department_management/:id/:departmentname" element={<DepartmentUser />} />
 <Route exct  path="/login" element={<LoginForm />} />
 <Route exct  path="/signup" element={<Signup />} />
 <Route exact path="/createworkspace" element={<Createworkspace />} />
 <Route exact path="/createForm" element={<CreateForm />} />
 <Route exact path="/createDepartment/:pk" element={<CreateDepartment />} />
 <Route exact path="/formdetails/:pk" element={<Table />} />
 <Route exact path="/formview/:name/:pk" element={authenticated ? <FormFillPage />: <Navigate to='login' />} />
 <Route exact path="/workspaceview/:pk" element={ <SingleWorkspaceView />} />
 
</Routes>
</AuthProvider>
 </BrowserRouter>
 
 
} 

export default App;
