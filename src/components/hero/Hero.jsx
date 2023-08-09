import React from "react";
import "./Hero.css";
import ellipse1 from "../../assets/Ellipse1.png";
import ellipse2 from "../../assets/Ellipse2.png";
import ellipse3 from "../../assets/Ellipse3.png";
import Framelanding from "../../assets/Framelanding.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="landingpage_hero">
      <div className="hero_left">
        <div>
          <Link to="/Login">
            <button className="buttonss">Signin</button>
          </Link>
          <Link to="/Signup">
            <button className="buttonss">Get started</button>
          </Link>
        </div>
        <div>
          <div className="hero_left_image">
            <img src={ellipse1} alt="pic" />
            <img src={ellipse2} alt="pic" />
            <img src={ellipse3} alt="pic" />
          </div>
          {/* joined members */}
          <div className="hero_join">
            <span>
              Join with <span>4600+Schools</span> and start getting
            </span>
            <span>enchasing AI capabilities</span>
          </div>
        </div>
        <div>
          <span>Unlocking the potential</span>
          <span>of intelligent</span>
          <span>Technology</span>
        </div>
      </div>
      <div className="hero_right">
        <img src={Framelanding} alt="" />
      </div>
    </div>
  );
};

export default Hero;