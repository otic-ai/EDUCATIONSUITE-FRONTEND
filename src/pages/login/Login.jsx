import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import google from "../../assets/google.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import linkedn from "../../assets/linkedn.png";
import login from "../../assets/login.png";
import pseudo from "../../assets/pseudo.png";
import pseudodots from "../../assets/pseudodots.png";
import freerectangle from "../../assets/freerectangle.png";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";

const Login = () => {
  let {loginUser, proxy} = useContext(AuthContext);
  const history = useNavigate();
const [formData, setFormData] = useState({
  username: '',
  password: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};


  return (
    <div className="login">
      <div className="login_left">
        <div>
          <img className="pseudo" src={pseudo} alt="" />
          <img className="pseudodots" src={pseudodots} alt="" />
        </div>
        <div>
          <img className="loginimage" src={login} alt="" />
        </div>
        <img className="freerectangle" src={freerectangle} alt="" />
      </div>
      <div className="login_right">
        <div>
          <div>
            <p>Welcome to</p>
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <span>
            Need an account ?
            <Link to="/signup">
              <span className="signup">Sign up</span>
            </Link>
          </span>
        </div>
        <span><p>Sign in</p></span>
        <form  onSubmit={loginUser} >
          <div className="form-controls">
            <input  type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
            />
            <span>Username</span>
          </div>
          <div className="form-controls">
            <input 
             type="password"
             id="password"
             name="password"
             value={formData.password}
             onChange={handleChange}
             required
            />
            <span>Password</span>
          </div>
          <div className="remember_me">
            <div>
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <span htmlFor="rememberMe">Remember Me</span>
            </div>
            <p>Forgotpassword ?</p>
          </div>
          <div className="submitform">
            <button type="submit">Submit</button>
          </div>
        </form>
        <p className="text_or">OR</p>
        <div className="social_media">
          <div>
            <a href="">
              <img src={google} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={linkedn} alt="" />
            </a>
          </div>
          <div>
            <a href="">
              <img src={facebook} alt="" />
            </a>
          </div>
          <div>
            <Link to={'/teachers'}>Login As Teacher</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;