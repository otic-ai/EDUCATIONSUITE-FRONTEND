import React from 'react'
import hours from "../../assets/hours.png";
import lesson from "../../assets/lessons.png";
import students from "../../assets/students.png";
import classes from "../../assets/classes.png";
import './Contentanalysis.css'

const Contentanalysis = () => {
  return (
    <div className="content_analysis">
    {/* TOTALTEACHERS */}
    <div>
      <div>
        <p>Teachers</p>
        <h3>55</h3>
      </div>
      <img  src={students} alt="" />
    </div>
    {/* totalclasse */}
    <div>
      <div>
        <p>Totalclasses</p>
        <h3>02/7</h3>
      </div>
      <img src={classes} alt="" />
    </div>
    {/* totallessons */}
    <div>
      <div>
        <p>Totallessons</p>
        <h3>14</h3>
      </div>
      <img src={lesson} alt="" />
    </div>
    {/* totalhours */}
    <div>
      <div>
        <p>Totalhours</p>
        <h3>7</h3>
      </div>
      <img src={hours} alt="" />
    </div>
  </div>
  )
}

export default Contentanalysis