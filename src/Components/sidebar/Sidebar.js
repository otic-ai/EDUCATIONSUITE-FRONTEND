import React from "react";
import "./Sidebar.css";
import { dashboarddata, management, pages } from "../../Data/dashboard";
const Sidebar = () => {
  console.log(dashboarddata);
  return (
    <div className="sidebar">
      <h1>Dashboard</h1>
      <div className="sidebar_">
        {dashboarddata.map((item) => {
          return (
            <div className="dashboarddata">
              <span>{item.icon} </span>
              <h4>{item.name}</h4>
              <span>{item.icon1}</span>
            </div>
          );
        })}
      </div>
      <h1>Management</h1>

      <div>
        {management.map((item) => {
          return (
            <div className="dashboarddata">
              <span>{item.icon} </span>
              <h4>{item.name}</h4>
              <span>{item.icon1}</span>
            </div>
          );
        })}
      </div>
      <h1>Pages</h1>
      <div>
        {pages.map((item) => {
          return (
            <div className="dashboarddata">
              <span>{item.icon} </span>
              <h4>{item.name}</h4>
              <span>{item.icon1}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
