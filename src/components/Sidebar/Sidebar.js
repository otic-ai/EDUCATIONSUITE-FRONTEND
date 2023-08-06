import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBars, faBell, faBookReader, faChalkboardTeacher, faClipboardList, faCog, faFileAlt, faGraduationCap, faHotel, faMoneyBill, faShieldAlt, faTable, faUserFriends, faVectorSquare } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar({open}) {
  return (
    <div className={open?"sidebar collapse":"sidebar"}>
      <button>Dashboard</button>
      <ul className='content'>
       <li>< FontAwesomeIcon className="menu" icon={faGraduationCap}/>Students</li>
       <li>< FontAwesomeIcon className="menu" icon={faChalkboardTeacher}/>Teachers</li>
       <li>< FontAwesomeIcon className="menu" icon={faHotel}/>Departments</li>
       <li>< FontAwesomeIcon className="menu" icon={faBookReader}/>Subjects</li>
      </ul>
      <button>Management</button>
      <ul className='content'>
        <li>< FontAwesomeIcon className="menu" icon={faFileAlt}/>Accounts</li>
        <li>< FontAwesomeIcon className="menu" icon={faClipboardList}/> Exam lis</li>
        <li>< FontAwesomeIcon className="menu" icon={faTable}/>Time Table</li>
        <li>< FontAwesomeIcon className="menu" icon={faCog}/> Settings</li>
      </ul>
      <button>Pages</button>
      <ul className='content'>
      <li>< FontAwesomeIcon className="menu" icon={faShieldAlt}/>Authentication</li>
      </ul>
        

    </div>
  )
}
