
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateWorkspaces";
import Header from "../../components/header/Header";
import AuthContext from "../../utils/AuthContext";
import Headerdash from "../Headerdash/Header";

const CreateWorkspaces = () => {

  localStorage.setItem('sign', false)
  let {authTokens, proxy} = useContext(AuthContext);
  const history = useNavigate();
  const [formData, setFormData] = useState({
   name:'',
   postalcode:'',
   country:'',
   city:'',
   address:'',
   email:'',
   contact:'',
   fax:'',
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e)  => {
    e.preventDefault();
    // You can handle form submission here, e.g., make an API call to your backend
    try {
        // Make the POST request to your backend API using fetch
        const response = await fetch(`${proxy}/institution/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        if (data.message ==='Username Exists'){
          alert(data.message)
        } else {
          history("/");
          alert('Registration successful, Login ')
        }
       
      
      } catch (error) {
        console.error('Error creating account:', error);
      }
  };


  return (
    <div className="signuppage">
      <Headerdash />
      <div className="signupform">
        <h2>Create Institution Workspace</h2>
        <form onSubmit={handleSubmit}>
        

          <div className="formcontrol">
          <div>
              <label>Institution Name<span className="required">*</span></label>
              <input type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              />
            </div>
             
            <div>
              <label>Postal Code</label>
              <input type="text"
              id="postalcode"
              name="postalcode"
              value={formData.postalcode}
              onChange={handleChange}
              />
            </div>
           
          </div>

          <div className="formcontrol">
            <div>
              <label>Country<span className="required">*</span></label>
              <input type="text" 
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              />
            </div>
            <div>
              <label>City<span className="required">*</span></label>
              <input type="text" 
               id="city"
               name="city"
               value={formData.city}
               onChange={handleChange}
              />
            </div>
         
            <div>
              <label>Address<span className="required">*</span></label>
              <input type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              />
            </div>


          </div>
          <div className="formcontrol">
            <div>
              <label>Email<span className="required">*</span></label>
              <input type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              />
            </div>
            <div>
              <label>Phone Number<span className="required">*</span></label>
              <input type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              />
            </div>
          </div>
          <div className="formcontrol">
           
            <div>
              <label>Fax</label>
              <input type="text"
              id="fax"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              />
            </div>
            <div className="formcontrol">
            <div>
              <label>Institution Logo<span className="required">*</span></label>
              <input type="text"
              id="logo"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
               required
              />
            </div>
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

export default CreateWorkspaces;
