import React,{ useCallback, useEffect, useState, useContext } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthContext from '../utils/AuthContext';
import LoadingSpinner from './LoadSpin';

const SingleWorkspaceView = () => {
  localStorage.setItem('sign', true)
  const [loading, setLoading] = useState(true)
    let {authTokens, proxy} = useContext(AuthContext);
  const [names, setNames] = useState([]); // Initialize 'names' as an empty array
  const [form, setForm] = useState([]);
  const { pk } = useParams();
  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        const response = await fetch( `${proxy}/institution/view/${pk}/`,
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
        setLoading(true)
        const jsonData = await response.json();
       // Extracting 'name' property from each object
        setNames(jsonData);
        setForm(jsonData.institution)
        setLoading(false)
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

  return <div>
     <h1>Available Workspace</h1>
      { loading ? <LoadingSpinner /> : <div>
      {names.map((name, index) => (
          <ul>
           
              <li>  <a key={index}>{name.institution}</a>  </li>
         
          </ul>
      
        ))}
      </div> }  
       
  </div>;
}

export default SingleWorkspaceView