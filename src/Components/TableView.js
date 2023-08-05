// src/components/Table.js
import React, { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../utils/AuthContext';
import { useParams } from 'react-router-dom';


const Table = () => {
  const [data, setData] = useState([]);
  const { pk } = useParams();
  let {logoutUser} = useContext(AuthContext);
  let {authTokens} = useContext(AuthContext); 

  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        const response = await fetch(`/default/details/${pk}`,
        {
          method: 'GET', // Replace with the appropriate HTTP method (e.g., POST, PUT, DELETE)
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
          },
        }); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
       
        setData(jsonData);
        
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(item).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
