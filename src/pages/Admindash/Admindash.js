import React, { useState,useEffect,useContext } from 'react';
import logo from '../../components/images/logo.png';
import Header from '../../components/Headerdash/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Admindash.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faUserFriends,
  faHotel,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import Adminhome from '../../components/Adminhome/Adminhome';
import Adminteacher from '../../components/Adminteacher/Adminteacher';
import Adminstudent from '../../components/Adminstudent/Adminstudent'; // Import the other content components here
import Adminworkspace from '../../components/Adminworkspace/Adminworkspace';
import Workspaces from '../Workspaces/Workspaces';
import LoadingSpinner from '../../components/LoadSpinner/LoadSpinner';
import Forms from '../Forms/forms';


import Subjects from '../Subjects/Subjects';
import AuthContext from '../../utils/AuthContext';
import Timetable from '../../components/timetable/Timetable';
// Import other content components as needed

function Admindash() {
  const [open, setOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('home'); // Default to 'home' content
  const[loading,setLoading] = useState(true)
  const [load,setLoad] = useState(1)
  const defaultLoadState = localStorage.getItem('loading')
  const [storedValue, setStoredValue] = useState(
    localStorage.getItem('loading')
  );
  let {proxy,authTokens} = useContext(AuthContext);
  const workspaceID = localStorage.getItem('id')
  const handleclick = () => {
    setOpen(!open);
  };

  const handleContentClick = (content) => {
    setSelectedContent(content);
    
  };
  useEffect(()=>{
    const vari = localStorage.getItem('loading')
    if (vari ==='false'){
      setLoading(false)
       
    }   
  
   
 
  },[defaultLoadState])

  return (<div>
      <div>
    <Header click={handleclick} />
    <Sidebar onContentClick={handleContentClick} open={open} />
    {loading ? <LoadingSpinner /> :
    <div>
    <div className='tabs'>
      <p onClick={() => handleContentClick('students')}>
        Students <FontAwesomeIcon className='menu' icon={faUserFriends} />
      </p>
      <p onClick={() => handleContentClick('workspaces')}>
        Workspaces <FontAwesomeIcon className='menu' icon={faMoneyBill} />
      </p>
      <p onClick={() => handleContentClick('awards')}>
        Awards <FontAwesomeIcon className='menu' icon={faAward} />
      </p>
      <p onClick={() => handleContentClick('departments')}>
        Department <FontAwesomeIcon className='menu' icon={faHotel} />
      </p>
      
       </div>
      {/* Conditionally render the content based on the selected content */}
      {selectedContent === 'home' && <Adminhome />}
      {selectedContent === 'students' && <Adminstudent />}
      {selectedContent === 'teachers' && <Adminteacher />}
      {selectedContent === 'workspace' && <Adminworkspace />}
      {selectedContent === 'workspaces' && <Workspaces/>}
      {selectedContent === 'subjects' && <Subjects/>}
      {selectedContent === 'timetable' && <Timetable/>}
      {/* Add more content components based on the selectedContent */}
      {/* For example: */}
      {/* {selectedContent === 'awards' && <AdminAwards />} */}
      {/* {selectedContent === 'departments' && <AdminDepartments />} */}
      {/* {selectedContent === 'revenue' && <AdminRevenue />} */}
    

    {/* Conditionally render the content based on the selected content */}
    {selectedContent === 'home' && <Adminhome />}
    {selectedContent === 'students' && <Adminstudent />}
    {selectedContent === 'teachers' && <Forms start={true} />}
    {selectedContent === 'workspace' && <Adminworkspace />}
    {selectedContent === 'workspaces' && <Workspaces/>}
    
    {/* Add more content compone nts based on the selectedContent */}
    {/* For example: */}
    {/* {selectedContent === 'awards' && <AdminAwards />} */}
    {/* {selectedContent === 'departments' && <AdminDepartments />} */}
    {/* {selectedContent === 'revenue' && <AdminRevenue />} */}
    </div>}
  </div>
  </div>
  );
}

export default Admindash;
