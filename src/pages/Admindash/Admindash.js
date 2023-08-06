import React, { useState } from 'react'
import logo from '../../components/images/logo.png'
import Header from '../../components/Headerdash/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Admindash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBars, faBell, faBookReader, faChalkboardTeacher, faClipboardList, faCog, faFileAlt, faGraduationCap, faHotel, faMoneyBill, faShieldAlt, faTable, faUserFriends, faVectorSquare } from '@fortawesome/free-solid-svg-icons'
import { LineChart,BarChart,Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Admindash() {
    const [open,setOpen] = useState(false)
    const handleclick = () => {
        setOpen(!open);
    }
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
    <div>
    <Header click={handleclick}/>
    <Sidebar open={open}/>
    
    </div>
  )
    

}

export default Admindash