import React from "react";
import "./Subject.css";
import { subjects } from "../../Data/subjects.js";
import Contentsub from "../contentsub/Contentsub";
const Subjects = () => {
  return (
    <div className="subjects">
      <Contentsub />
      <main>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <hr />
            {subjects.map((item, id) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.class}</td>
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

export default Subjects;
