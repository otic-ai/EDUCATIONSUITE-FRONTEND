import React from "react";
import "./Signup.css";
import Header from "../../components/header/Header";
const Signup = () => {
  return (
    <div className="signuppage">
      <Header />
      <div className="signupform">
        <h2>Create account</h2>
        <form>
          <div className="formcontrol">
            <div>
              <label>School Name</label>
              <input type="text" />
            </div>
            <div>
              <label>School Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="formcontrol">
            <div>
              <label>Address</label>
              <input type="text" />
            </div>
          </div>

          <div className="formcontrol">
            <div>
              <label>Country</label>
              <input type="text" />
            </div>
            <div>
              <label>City</label>
              <input type="text" />
            </div>
            <div>
              <label>State/Province</label>
              <input type="text" />
            </div>
            <div>
              <label>Postal Code</label>
              <input type="text" />
            </div>
          </div>
          <div className="formcontrol">
            <div>
              <label>Email</label>
              <input type="text" />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="text" />
            </div>
          </div>
          <div className="formcontrol">
            <div>
              <label>Mobile Number</label>
              <input type="text" />
            </div>
            <div>
              <label>Fax</label>
              <input type="text" />
            </div>
          </div>
          <div className="formcontrol">
            <div>
              <label>Websiteurl</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <button className="formbutton">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
