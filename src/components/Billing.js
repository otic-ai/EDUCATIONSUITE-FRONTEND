import React from 'react'
import logo from './images/logo.png'

function Billing() {
  return (
    <div className='billing'>
    <div className='header'>
        <img src={logo}/>
        <div className='nav-toggle' id='navToggle'>
        <img id="navClosed" class="navIcon" src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/hamburger.svg" alt="hamburger menu"/>
        <img id="navOpen" class="navIcon hidden" src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/close.svg" alt="close hamburger"/>
        </div>
        <div className='pricing'>
            <p>Pricing</p>
            <p>Products</p>
            <p>Support</p>
            <p>Login</p>
        </div>
    </div>
    <div className='vector'>
        <h1>Choose your plan </h1>
        <h3>Choose your plan Choose your plan Choose your plan Choose your plan Choose your plan Choose your plan </h3>
        <div className='billbutton'>
           <button className='month'>Monthly</button> 
           <button className='anual' >Anually</button> 
        </div>
        <div className='options'>
            <div className='content'>
                <>Basic</>
                <h1>$20</h1> 
                <div className='content1'>
                <li>500 Students</li> 
                <br/>
                <li>Unlimited projects</li> 
                <br/>
                <li>Extended Free Trial</li> 
                <button>Get started</button>
                </div>
                
            </div>
            <div className='content'>
                <>Standard</>
                <h1>$99</h1> 
                <div className='content1'>
                <li>10000 Students</li> 
                <br/>
                <li>Unlimited projects</li> 
                <br/>
                <li>Extended Free Trial</li> 
                <button>Get started</button>
                </div>
            </div>
            <div className='content'>
                <>Enterprise</>
                <h1>Let's Talk</h1> 
                <div className='content1'>
                <li>10000+ Students</li> 
                <br/>
                <li>Unlimited projects</li> 
                <br/>
                <li>Extended Free Trial</li> 
                <button>Get started</button>
                </div>
            </div>
        </div>
  
</div>
    </div>
  )
}

export default Billing