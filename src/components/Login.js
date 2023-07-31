import React from 'react'
import login from './images/login.png'
import logo from './images/logo.png'

function Login() {
  return (
    <div className='login'>
    <div className='loginimage'>
        <img src={login}/>
    </div>
    <div className='forms'>
        <h1>Welcome to <img src={logo}/></h1>
        <p>Need an account? Sign Up</p> 
        <h1 className='signin'>Sign In</h1>
        <form>
            <label>Username *</label>
            <input type='name' name='name' />
            <label>Password *</label>
            <input type='password' />
            <div className='checkbox'>
            <input type="checkbox" name="rememberpass"/>
            <label className='remember'>Remember me</label>
            <p>Forgot Password?</p>
            </div>
            <button>Login</button>
        </form>
    </div>
    </div>

  )
}

export default Login