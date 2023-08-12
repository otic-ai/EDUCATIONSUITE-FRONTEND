import React ,{useContext }from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBars, faBell,faReceipt, faSignOut,faBookReader, faChalkboardTeacher, faClipboardList, faCog, faFileAlt, faGraduationCap, faHome, faHotel, faMoneyBill, faShieldAlt, faTable, faUserFriends, faVectorSquare } from '@fortawesome/free-solid-svg-icons'
import AuthContext from "../../utils/AuthContext";


export default function Sidebar({open,onContentClick}) {
  let {logoutUser, proxy} = useContext(AuthContext);
  return (
    <div className={open?"sidebar collapse":"sidebar"}>
      <button>Dashboard</button>
      <ul className='content'>
      <li onClick={() => onContentClick('home')}>< FontAwesomeIcon className="menu" icon={faHome}/>Home</li>
       <li onClick={() => onContentClick('students')}>< FontAwesomeIcon className="menu" icon={faGraduationCap}/>Students</li>
       <li onClick={() => onContentClick('teachers')}>< FontAwesomeIcon className="menu" icon={faChalkboardTeacher}/>Teachers</li>
       <li onClick={() => onContentClick('workspace')}>< FontAwesomeIcon className="menu" icon={faHotel}/>Workspace</li>
       <li onClick={() => onContentClick('subjects')}>< FontAwesomeIcon className="menu" icon={faBookReader}/>Subjects</li>
      </ul>
      <button>Management</button>
      <ul className='content'>
        <li>< FontAwesomeIcon className="menu" icon={faFileAlt}/>Accounts</li>
        <li>< FontAwesomeIcon className="menu" icon={faClipboardList}/> Exam lis</li>
        <li onClick={() => onContentClick('timetable')}>< FontAwesomeIcon className="menu" icon={faTable}/>Time Table</li>
        <li>< FontAwesomeIcon className="menu" icon={faCog}/> Settings</li>
      </ul>
      <button>Pages</button>
      <ul className='content'>
      <li>< FontAwesomeIcon className="menu" icon={faShieldAlt}/>Authentication</li>
      <li onClick={() => logoutUser()} >< FontAwesomeIcon className="menu" icon={faSignOut}/>Sign Out</li>
      </ul>
        

    </div>
  )
}
