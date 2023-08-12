import React from 'react'
import { useState } from "react";
import { lessons } from "../../Data/lessons";
import { PieChart } from "react-minimal-pie-chart";
import { history } from "../../Data/history";
import { events } from "../../Data/upcomingevents";
import Calendar from "react-calendar";
import { piedata } from "../../Data/piechart";

const Teacherhome = () => {
    const [data, setdata] = useState(piedata);
    // clender
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  return (
    <div>
        <div className="content_subsection">
        <div className="twosection">
          <div className="uppersection">
            <div className="lessons">
              <div>
                <span>Upcominglesson</span>
                <span>View all Courses</span>
              </div>
              <hr />
              <div>
                {lessons.map((item, id) => {
                  return (
                    <div key={id} className="scheduleform">
                      <div className="leftside">
                        <h4>{item.name}</h4>
                        <p>{item.desc}</p>
                        <div className="schedulelist">
                          <li>{item.dateicon} </li>
                          <li>{item.date} </li>
                          <span className="separator">|</span>
                          <li>{item.timeicon} </li>
                          <li>{item.time} </li>
                        </div>
                      </div>
                      <div>
                        <p>{item.status}</p>
                        <button className="teacher_buttons">
                          {item.option}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="piecahart">
              <h3>Teaching Trend</h3>
              <hr />
              <p>Lessons Coverage</p>
              <PieChart
                data={data}
                label={({ dataEntry }) =>
                  `${dataEntry.title}: ${Math.round(dataEntry.percentage)}%`
                }
                style={{ width: "150px", height: "150px" }}
                labelStyle={{
                  color: "blue",
                  fontSize: 10,
                  fontWeight: "bold",
                }}
              />
            </div>
          </div>
          <div className="teaching_history">
            <header className="headers">
              <p>Teaching History</p>
              <p>logo</p>
            </header>
            <hr />
            <section className="history_lessons">
              {history.map((item, id) => {
                return (
                  <div key={id} className="scheduleform">
                    <div className="leftside">
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                      <div className="schedulelist">
                        <li>{item.dateicon} </li>
                        <li>{item.date} </li>
                        <span className="separator">|</span>
                        <li>{item.timeicon} </li>
                        <li>{item.time} </li>
                      </div>
                    </div>
                    <div>
                      <button
                        className="teacher_buttons"
                        style={{
                          backgroundColor:
                            item.status === "Pending" ? "blue" : "green",
                        }}>
                        {item.status}
                      </button>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>

        <div>
          <section id="calender">
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </section>
          <section id="upcomingevents">
            <h3>upcomingevents</h3>
            <header className="headers">
              <p>16 june</p>
              <p>logo</p>
            </header>
            <hr />
            <main>
              {events.map((item, id) => {
                return (
                  <div key={id} className="scheduleform">
                    <div className="leftside">
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                      <div className="schedulelist">
                        <li>{item.dateicon} </li>
                        <li>{item.date} </li>
                        <li>{item.timeicon} </li>
                        <li>{item.time} </li>
                      </div>
                    </div>
                    <div>
                      <p>{item.range}</p>
                    </div>
                  </div>
                );
              })}
            </main>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Teacherhome