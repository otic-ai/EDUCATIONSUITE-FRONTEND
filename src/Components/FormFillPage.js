import React,{ useCallback, useEffect, useState } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useParams } from 'react-router-dom';

const FormFillPage = () => {
  const [names, setNames] = useState([]); // Initialize 'names' as an empty array
  const [form, setForm] = useState([]);
  const { pk } = useParams();
  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        const response = await fetch( `/default/list/${pk}/`,
        {
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'Accept': 'application/json'
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
  const surveyJson = form
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default FormFillPage