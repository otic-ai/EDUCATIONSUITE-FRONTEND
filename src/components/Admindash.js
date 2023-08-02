import React from 'react'
import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBookReader, faChalkboardTeacher, faClipboardList, faCode, faCog, faFileAlt, faHospital, faHotel, faTable, faUserGraduate} from '@fortawesome/free-solid-svg-icons'

function Admindash() {
  return (
    <div className='admin'>
      <nav>
        <img src={logo}/>
        <button>< FontAwesomeIcon className="menu" icon={faBars}/></button>
        <form>
          <input type='text' placeholder='Search here' name='name'/>
        </form>
      </nav>
      <div className='sidebar'>
        <button>Dashboard</button>
        <ul className='content'>
          <li>< FontAwesomeIcon className="menu" icon={faUserGraduate}/>Students</li>
          <li>< FontAwesomeIcon className="menu" icon={faChalkboardTeacher}/>Teachers</li>
          <li>< FontAwesomeIcon className="menu" icon={faHotel}/>Departments</li>
          <li>< FontAwesomeIcon className="menu" icon={faBookReader}/>Subjects</li>
        </ul>
        <button>Management</button>
        <ul className='content'>
          <li>< FontAwesomeIcon className="menu" icon={faFileAlt}/>Accounts</li>
          <li>< FontAwesomeIcon className="menu" icon={faClipboardList}/>Exam List</li>
          <li>< FontAwesomeIcon className="menu" icon={faTable}/>Timetable</li>
          <li>< FontAwesomeIcon className="menu" icon={faCog}/>Settings</li>
        </ul>
      </div>
      <div className='tabs'>
        <p>Students</p>
        <p>Awards</p>
        <p>Department</p>
        <p>Revenue</p>
      </div>
      <div className='tabs1'>
        <div className='tabs12'>
        <p>Overview</p>
        <p>Number of students</p>
        </div>
        
        <div className='tabs12'>
        <p>Star students</p>
        <p>Star students</p>
        </div>
      </div>
    </div>
  )
}

export default Admindash