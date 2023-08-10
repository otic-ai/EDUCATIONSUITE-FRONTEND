import React from "react";
import "./Teachersdash.css";
import Dashboardheader from "../../components/dashboardheader/Dashboardheader";
import Sidebar from "../../components/sidebar/Sidebar";
import Teachercontent from "../../components/Teacher/Teachercontent";
import Footer from "../../components/footer/Footer";
const Teachersdash = () => {
  return (
    <div>
      <Dashboardheader />
      <section className="teachers_section">
        <Sidebar />
        <Teachercontent />
      </section>
      <Footer />
    </div>
  );
};

export default Teachersdash;
