import React, { useState, useEffect, useContext } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import AuthContext from '../../utils/AuthContext';
import { useParams } from 'react-router-dom';
import Header from '../../components/Headerdash/Header';
import { Link } from 'react-router-dom';
import EChartsVisualization from './EChartsVisualization';
import { Menu, MenuItem, Box,Button, ListItemIcon, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function DynamicColumnsDataGrid() {
  let { proxy, authTokens } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const { pk } = useParams();
  const [columns, setColumns] = useState([]);
  const history = useNavigate();
  const [open, setOpen] = useState(false);
 

  const handleAddRow = () => {
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const newRow = { id: newId, ...columns.reduce((acc, col) => ({ ...acc, [col.field]: '' }), {}) };
    setData([...data, newRow]);
  };

  


  const handleclick = () => {
    setOpen(!open);
  };

 

  useEffect(() => {
    // Simulating API call
    const fetchData = async () => {
      try {
        const response = await fetch(`${proxy}/default/formdetails/${pk}/`, {
          method: 'GET',
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
            headerClassName: 'custom-header',
            editable: true, // Make cells editable
          }   ));
       
      const colz =   [{
        field: 'details',
        headerName: 'Details',
        width: 200,
        disableExport: true,
        headerClassName: 'custom-header', 
        renderCell: (params) => (
          <Button variant="contained" color="primary" onClick={async()=>{ 
            const result = window.confirm('Do you want to want to delete this field?');
            if (result) {
            try {
              const response = await fetch(`${proxy}/default/deleteform/${pk}/${params.row.id}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${authTokens.access}`,
                },
              });
              const jsonData = await response.json();
              alert(jsonData.message)
              window.location.reload();
            } catch (error) {
             
              }}

          }} >Delete</Button>
        ),
      },...generatedColumns]
         setColumns(colz);
     
   
        }
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <Link to='/' ><Header click={handleclick} /></Link>
      <EChartsVisualization data={data} />
  
      <Button variant="contained" color="primary" onClick={handleAddRow}>
        Add Row
      </Button>
      <DataGrid
        rows={data}
        columns={columns}
        processRowUpdate= { async (updatedRow, originalRow) => {
        

          const result = window.confirm('Do you want to want to save change?');
          if (result) {
          try {
            const response = await fetch(`${proxy}/default/editformfield/${pk}/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.access}`,
              },
              body:JSON.stringify(updatedRow),
            });
            const jsonData = await response.json();
            alert(jsonData.message)
          
          } catch (error) {
           
            }} else {
                window.location.reload();
            }
          
        } }
        components={{ Toolbar: GridToolbar }}
        slotProps={{ toolbar: { printOptions: { hideToolbar: true ,hideFooter: true}} }}
        
      />
     
    </div>
  );
}

export default DynamicColumnsDataGrid;




