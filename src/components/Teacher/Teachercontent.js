import React from "react";
import { useState } from "react";
import "./Teachercontent.css";
import { lessons } from "../../Data/lessons";
import { piedata } from "../../Data/piechart";
import { PieChart } from "react-minimal-pie-chart";
import { history } from "../../Data/history";
import { events } from "../../Data/upcomingevents";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Contentanalysis from "../contentanalysis/Contentanalysis";
import Dashboardheader from '../../components/dashboardheader/Dashboardheader';
import Sidebarteach from '../../components/Sidebarteach/Sidebarteach';
import Teacherhome from "../Teacherhome/Teacherhome";

const Teachercontent = () => {
  const [selectedContent, setSelectedContent] = useState('home2');
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState(piedata);
  // clender
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleclick = () => {
    setOpen(!open);
  };
  const handleContentClick = (content) => {
    setSelectedContent(content);
    
  };
  return (
    <div className="content">
      <Dashboardheader click={handleclick} />
      <Sidebarteach onContentClick={handleContentClick} open={open} />
      <header>
        <h3>Teacher</h3>
        <h3>Home/Teacher</h3>
      </header>
      <Contentanalysis />
      <div className="content_subsection">
      {selectedContent === 'home2' && <Teacherhome />}

      </div>
    </div>
  );
};

export default Teachercontent;
