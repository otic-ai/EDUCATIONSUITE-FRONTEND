import React,{ useCallback, useEffect, useState, useContext,  } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useParams } from 'react-router-dom';
import AuthContext from '../utils/AuthContext';
import { useNavigate } from "react-router-dom";

const FormFillPage = () => {
  let {authTokens} = useContext(AuthContext);
  const history = useNavigate();
  const [names, setNames] = useState([]); // Initialize 'names' as an empty array
  const [form, setForm] = useState([]);
  const { pk,name } = useParams();
  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        const response = await fetch( `/default/list/${name}/${pk}/`,
        {
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${authTokens.access}`,
          }
      }); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
       // Extracting 'name' property from each object
        setNames(jsonData);
        setForm(jsonData.formDesign)
       
      } catch (error) {
        alert('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (formData)  => {
  
    // You can handle form submission here, e.g., make an API call to your backend
    try {
        // Make the POST request to your backend API using fetch  /default/registerformData/
        const response = await fetch(`/default/registerformData/${pk}/`, {
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
        alert(data.message)
       // history("/login");
      } catch (error) {
        console.error('Error creating account:', error);
      }
  };

  const surveyJson = form
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender)  =>   {
   
    handleSubmit(sender.data)
   
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default FormFillPage