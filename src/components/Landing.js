import React from 'react'
import logo from './images/logo.png'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import landingpro from './images/landingpro.png'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='landing'>
    <div className='header'>
        <img src={logo}/>
        <div className='pricing'>
            <p>Pricing</p>
            <p>Products</p>
            <p>Support</p>
        </div>
        <div className='rightcorner' >
            <p>Login</p>
            <Link to={'/billing'}><button>Get started</button></Link>
        </div>
    </div>
    <div className='unlock'>
    <h1>Unlocking the Potential of Intelligent Technology</h1>
    <img className='image1' src={image1}/>
    <img src={image2}/>
    <img src={image3}/>
    <p>Join with 4600+ Schools and start getting enchasing AI capabilities</p>
    <div className='buttons'>
      <button>Signin</button>
      <Link to={'/billing'}><button>Get started</button></Link>
    </div>
    </div>
    <div className='bars'>
    <img src={landingpro}/>
    </div>
    </div>
  )
}

export default Landing