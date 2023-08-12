import React from "react";
import { useState } from "react";
import "./Teachercontent.css";
import "react-calendar/dist/Calendar.css";
import Contentanalysis from "../contentanalysis/Contentanalysis";
import Headerdash from "../Headerdash/Header";
import Sidebarteach from "../Sidebarteach/Sidebarteach";
import Teacherhome from "../Teacherhome/Teacherhome";

const Teachercontent = () => {
  const [open, setOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('home2'); // Default to 'home' content

  const handleclick = () => {
    setOpen(!open);
  };

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };
  return (
    <div className="content">
      <Headerdash click={handleclick} />
      <Sidebarteach onContentClick={handleContentClick} open={open} />
      <Contentanalysis />
      {selectedContent === 'home2' && <Teacherhome />}
    </div>
  );
};

export default Teachercontent;
