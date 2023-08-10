import React from "react";
import Contentsub from "../contentsub/Contentsub";
import "./Timetable.css";
import { timetable } from "../../Data/timetable.js";
const Timetable = () => {
  return (
    <div className="timetable">
      <Contentsub />
      <main>
        <h2>Timetable</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Startime</th>
              <th>endtime</th>
              <th>date</th>
              <th>action</th>
            </tr>
          </thead>

          <tbody>
            <hr />
            {timetable.map((item, id) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td className="studentlogo">
                    <span>{item.logo}</span>
                    <span> {item.name}</span>
                  </td>
                  <td>{item.class}</td>
                  <td>{item.subject}</td>
                  <td>{item.starttime}</td>
                  <td>{item.endtime}</td>
                  <td>{item.date}</td>
                  <td>{item.action}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Timetable;
