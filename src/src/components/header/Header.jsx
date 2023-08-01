import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header className="landingpage_header">
      <div className="header_content">
        <div className="header_left">
          <div>
            <img className="header_logo" src={logo} alt="logo" />
          </div>
          <div className="liststyles">
            <ul >
              <li>Pricing</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="header_right">
          <span>Login</span>
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
