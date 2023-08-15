import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="landingpage_header">
      <div className="header_content">
        <div className="header_left">
          <div>
            <img className="header_logo" src={logo} alt="logo" />
          </div>
          <div className="liststyles">
            <ul> 
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>

              <li>Products</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="header_right">
        <Link to="/login" style={{ textDecoration: "none" }}>
            <span>Login</span>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
