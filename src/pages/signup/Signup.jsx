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
              <label>School Name<span className="required">*</span></label>
              <input type="text" />
            </div>
            <div>
              <label>School Name<span className="required">*</span></label>
              <input type="text" />
            </div>
          </div>

          <div className="formcontrol">
            <div>
              <label>Address<span className="required">*</span></label>
              <input type="text" />
            </div>
          </div>

          <div className="formcontrol">
            <div>
              <label>Country<span className="required">*</span></label>
              <input type="text" />
            </div>
            <div>
              <label>City<span className="required">*</span></label>
              <input type="text" />
            </div>
            <div>
              <label>State/Province<span className="required">*</span></label>
              <input type="text" />
            </div>
            <div>
              <label>Postal Code</label>
              <input type="text" />
            </div>
          </div>
          <div className="formcontrol">
            <div>
              <label>Email<span className="required">*</span></label>
              <input type="text" />
            </div>
            <div>
              <label>Phone Number<span className="required">*</span></label>
              <input type="text" />
            </div>
          </div>
          <div className="formcontrol">
            <div>
              <label>Mobile Number<span className="required">*</span></label>
              <input type="number" />
            </div>
            <div>
              <label>Fax</label>
              <input type="text" />
            </div>
          </div>
          <div className="formcontrol">
            <div>
              <label>Websiteurl<span className="required">*</span></label>
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
