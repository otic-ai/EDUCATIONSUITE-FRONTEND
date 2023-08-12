import React, { useState } from 'react';
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
import Subjects from '../Subjects/Subjects';
import Timetable from '../../components/timetable/Timetable';
// Import other content components as needed

function Admindash() {
  const [open, setOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('home'); // Default to 'home' content

  const handleclick = () => {
    setOpen(!open);
  };

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div>
      <Header click={handleclick} />
      <Sidebar onContentClick={handleContentClick} open={open} />
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
    </div>
  );
}

export default Admindash;
