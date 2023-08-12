import React, { useState, useEffect ,  useContext} from 'react';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import AuthContext from '../../utils/AuthContext';
import { useParams } from 'react-router-dom';
import Header from '../../components/Headerdash/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';

function DynamicColumnsDataGrid() {
    let {proxy,authTokens} = useContext(AuthContext);
  const [data, setData] = useState([]);
  const { pk } = useParams();
  const [columns, setColumns] = useState([]);
  const history = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('home'); 
  
  const handleclick = () => {
    setOpen(!open);
  };

  const handleContentClick = (content) => {
    setSelectedContent(content);
    
  };

  useEffect(() => {
    // Simulating API call
    const fetchData = async () => {
      try {
        const response = await fetch(`${proxy}/default/formdetails/${pk}/`,
        {
          method: 'GET', // Replace with the appropriate HTTP method (e.g., POST, PUT, DELETE)
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`,
          },
        });
        const jsonData = await response.json();

        // Set data
        setData(jsonData);
        const dataWithIds = jsonData.map((item, index) => ({ ...item, id: index + 1 }));
        setData(dataWithIds);
        // Generate columns dynamically based on the keys in the first row
        if (dataWithIds.length > 0) {
          const columnFields = Object.keys(jsonData[0]);
          const generatedColumns = columnFields.map((field) => ({
            field,
            headerName: field,
            width: 150,
          }));
          setColumns(generatedColumns);
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{  width: '100%' }}>
     <Link to='/' ><Header click={handleclick} /></Link>   
   
      <DataGrid rows={data} columns={columns} components={{ Toolbar: GridToolbar }} />
    </div>
  );
}

export default DynamicColumnsDataGrid;
