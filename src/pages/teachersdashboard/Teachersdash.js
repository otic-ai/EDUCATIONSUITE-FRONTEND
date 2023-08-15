import React from "react";
import "./Teachersdash.css";
import Dashboardheader from "../../components/dashboardheader/Dashboardheader";
import Sidebar from "../../components/sidebar/Sidebar";
import Teachercontent from "../../components/Teacher/Teachercontent";
import Footer from "../../components/footer/Footer";
import Adminprofile from "../../components/adminprofile/Adminprofile";
import Contentheader from "../../components/contentheader/Contentheader";
import Formsearch from "../../components/formsearch/Formsearch";
import Students from "../../components/students/Students";
import Subjects from "../../components/subjects/Subjects";
import Timetable from "../../components/timetable/Timetable";
const Teachersdash = () => {
  return (
    <div>
      <Dashboardheader />
      <section className="teachers_section">
        <Sidebar />
        <main>
          {/* <Contentheader />
          <Formsearch />
          <Adminprofile />
          <Students />
          <Subjects />
          <Timetable /> */}
          <Teachercontent />
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default Teachersdash;
