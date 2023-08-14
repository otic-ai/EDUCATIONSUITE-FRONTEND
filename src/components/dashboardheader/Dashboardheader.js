import React from "react";
import "./Dashboardheader.css";
import logo from "../../assets/logo.png";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import SearchIcon from '@mui/icons-material/Search';

import Avatar from '@mui/material/Avatar';
const Dashboardheader = ({click}) => {
  return (
    <div className="dashboardheader">
      <div className="header_leftside">
        <img src={logo} alt="" />
        <div className="viewicon">
          <button  onClick={click}><ViewHeadlineIcon fontSize="large" color="primary" /></button>
        </div>
        <div className="dashboardform">
          <SearchIcon fontSize="inherit" style={{ fontSize: '2rem' }} color="primary" />
          <form>
            <input type="text" placeholder="search here" />
          </form>
        </div>
      </div>
      <div className="header_rightside">
        <CircleNotificationsIcon fontSize="large" color="primary" />
        <CenterFocusWeakIcon fontSize="large" color="primary" />
        <div className="profile">
          < Avatar fontSize="large" color="secondary" src={logo} />
          <div>
            <p>Administrator</p>
            <p>Nesta paul</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardheader;
