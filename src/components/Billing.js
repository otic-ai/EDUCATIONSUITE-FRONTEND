import React from 'react'
import logo from './images/logo.png'

function Billing() {
  return (
    <div className='billing'>
    <div className='header'>
        <img src={logo}/>
        <div className='pricing'>
            <p>Pricing</p>
            <p>Products</p>
            <p>Support</p>
        </div>
        <div className='rightcorner' >
            <p>Login</p>
            <button>Get started</button>
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
                </div>
            </div>
        </div>
    <svg className='trial' xmlns="http://www.w3.org/2000/svg" width="auto" height="391" viewBox="0 0 1920 391" fill="none">
<g filter="url(#filter0_i_251_3232)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 346L52.8 317.167C107.2 288.333 212.8 230.667 320 221.056C427.2 211.444 532.8 249.889 640 288.333C747.2 326.778 852.8 365.222 960 394.056C1067.2 422.889 1172.8 442.111 1280 384.444C1387.2 326.778 1492.8 192.222 1600 115.333C1707.2 38.4444 1812.8 19.2222 1867.2 9.61111L1920 0V519H1867.2C1812.8 519 1707.2 519 1600 519C1492.8 519 1387.2 519 1280 519C1172.8 519 1067.2 519 960 519C852.8 519 747.2 519 640 519C532.8 519 427.2 519 320 519C212.8 519 107.2 519 52.8 519H0V346Z" fill="#FCA034"/>
</g>
<defs>
<filter id="filter0_i_251_3232" x="0" y="0" width="1920" height="524" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.156667 0 0 0 0 0.391667 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_251_3232"/>
</filter>
</defs>
</svg>
</div>
    </div>
  )
}

export default Billing