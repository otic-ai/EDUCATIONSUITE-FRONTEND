import React from "react";
import "./Students.css";
import { student } from "../../Data/student.js";
const Students = () => {
  return (
    <>
      <table className="table">
        <h2 className="student_title">Students</h2>
        <hr />
        <tr>
          <th>id</th>
          <th>Reg_NO</th>
          <th>Name</th>
          <th>class</th>
          <th>C_Teacher's_name</th>
          <th>Parent Name</th>
          <th>BOD</th>
        </tr>
        {student.map((item, id) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.reg_no}</td>
              <td>{item.class}</td>
              <td>{item.name}</td>
              <td>{item.teacher_name}</td>
              <td>{item.parent_name}</td>
              <td>{item.BOD}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Students;
