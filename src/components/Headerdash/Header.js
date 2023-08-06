import React from 'react'
import './Headerdash.css'
import logo from '../../components/images/logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Headerdash = ({click}) => {
  return (
    <div className='header'>
      <img src={logo} alt='logo'/>
      <button  onClick={click}>< FontAwesomeIcon className="menu" icon={faBars}/></button>
        
        <form>
          <input type='text' placeholder='Search here' name='name'/>
        </form>
    </div>
  )
}

export default Headerdash
