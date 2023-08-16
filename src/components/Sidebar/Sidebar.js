import React ,{useContext, useEffect, useState }from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBars, faMarker,faBell,faReceipt, faSignOut,faBookReader, faChalkboardTeacher, faClipboardList, faCog, faFileAlt, faGraduationCap, faHome, faHotel, faMoneyBill, faShieldAlt, faTable, faUserFriends, faVectorSquare } from '@fortawesome/free-solid-svg-icons'
import AuthContext from "../../utils/AuthContext";
import { Link } from 'react-router-dom';
import Dropdown from '../DropDown/DropDown';


export default function Sidebar({open,onContentClick}) {
  const load = localStorage.getItem('loading')
  const workspaceID = localStorage.getItem('id')
  const [admin,setAdmin]= useState(false)

  const [selectedOption, setSelectedOption] = useState('');
  let {logoutUser, proxy} = useContext(AuthContext);
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleOptionSelect = (option) => {
    console.log('Selected option:', option);
  };
  
  useEffect(()=>{

    if (load ==='false'){
      setAdmin(true)
       
    } else {
      setAdmin(false)
    }
 
  },[open,onContentClick,load,workspaceID])
  return (
    <div className={open?"sidebar collapse":"sidebar"}>

      
  { admin ?    <div>
    <button className='work-space'>  <Dropdown /></button>
  <div style={{height:'20px'}} />
      <button>Dashboard</button>
      <ul className='content'>
  
      <li onClick={() => onContentClick('home')}>< FontAwesomeIcon className="menu" icon={faHome}/>Home</li>
       <li onClick={() => onContentClick('students')}>< FontAwesomeIcon className="menu" icon={faGraduationCap}/>Students</li>
       <li onClick={() => onContentClick('teachers')}>< FontAwesomeIcon className="menu" icon={faReceipt}/>Forms</li>
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
      </div>: <div />}
      <button>Pages</button>
      <ul className='content'>
    <Link to='/workspace/create'  style={{textDecoration:'none'}}> <li>< FontAwesomeIcon className="menu" icon={faMarker}/>Create Workspace</li></Link> 
      <li onClick={() => logoutUser()} >< FontAwesomeIcon className="menu" icon={faSignOut}/>Sign Out</li>
      </ul>
        

    </div>
  )
}
