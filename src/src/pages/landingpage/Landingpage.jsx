import React from "react";
import "./Landingpage.css";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
const Landingpage = () => {
  return (
    <div className="landingpage">
      {/* header */}
      <Header />

      <Hero/>
      {/* hero section*/}
     
    </div>
  );
};
export default Landingpage;
