import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBars, faBell, faBookReader, faChalkboardTeacher, faClipboardList,faCog, faFileAlt, faGraduationCap, faHotel, faMoneyBill, faShieldAlt, faTable, faUserFriends, faUserGraduate, faVectorSquare} from '@fortawesome/free-solid-svg-icons'
import React, { PureComponent } from 'react';
import { LineChart,BarChart,Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Admindash = () => {
  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className='admin'>
      <nav>
        <img src={logo}/>
        <button>< FontAwesomeIcon className="menu" icon={faBars}/></button>
        <form>
          <input type='text' placeholder='Search here' name='name'/>
        </form>
        <div>
        < FontAwesomeIcon className="menu2" icon={faBell}/>
        < FontAwesomeIcon className="menu3" icon={faVectorSquare}/>
        </div>
        
      </nav>
      <div className='sidebar'>
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
          <li>< FontAwesomeIcon className="menu" icon={faClipboardList}/>Exam List</li>
          <li>< FontAwesomeIcon className="menu" icon={faTable}/>Timetable</li>
          <li>< FontAwesomeIcon className="menu" icon={faCog}/>Settings</li>
        </ul>
        <button>Pages</button>
        <ul className='content'>
        <li>< FontAwesomeIcon className="menu" icon={faShieldAlt}/>Authentication</li>
        </ul>
      </div>
      <div className='tabs'>
        <p>Students< FontAwesomeIcon className="menu" icon={faUserFriends}/></p>
        <p>Awards< FontAwesomeIcon className="menu" icon={faAward}/></p>
        <p>Department< FontAwesomeIcon className="menu" icon={faHotel}/></p>
        <p>Revenue< FontAwesomeIcon className="menu" icon={faMoneyBill}/></p>
      </div>
      <div className='tabs1'>
        <div className='tabs12'>
        <LineChart className='linechart'
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#040458" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#faa51a" />
        </LineChart>
        <BarChart className='linechart'
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#040458" background={{ fill: '#eee' }} />
          <Bar dataKey="uv" fill="#faa51a" />
        </BarChart>
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