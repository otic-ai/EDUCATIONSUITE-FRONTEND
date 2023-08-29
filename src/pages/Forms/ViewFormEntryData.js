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
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { GridFilterOperator } from '@mui/x-data-grid';
import { isValid, isDate } from 'date-fns'; 





function DynamicColumnsDataGrid() {
  let { proxy, authTokens } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const { pk } = useParams();
  const [columns, setColumns] = useState([]);
  const history = useNavigate();
  const [open, setOpen] = useState(false);
 

  const handleAddRow = async () => {
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const newRow = { id: newId, ...columns.reduce((acc, col) => ({ ...acc, [col.field]: '' }), {}) };
   newRow['ID']= newId;
    setData([ newRow,...data]);
    
  };

  


  const handleclick = () => {
    setOpen(!open);
  };

  const defaultSortModel = [
    { field: 'id', sort: 'desc' }, // Set 'sort' to 'desc' for descending order
  ];
  

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
        }
        );
        const jsonData = await response.json();

        // Set data
        setData(jsonData);
        const dataWithIds = jsonData.map((item, index) => ({ ...item, id: index + 1 }));
        setData(dataWithIds);

        // Generate columns dynamically based on the keys in the first row
        if (dataWithIds.length > 0) {
          const columnFields = Object.keys(jsonData[0]);
          const generatedColumns = columnFields.map((field) => (
          
            {
              
            field,
            headerName: field,
         
            headerClassName: 'custom-header',
           
           type:typeof dataWithIds[0][field] === 'number' ? 'number': isValid(field) ? 'dateTime':'string',
            editable: (typeof dataWithIds[0][field] === 'number' || typeof dataWithIds[0][field] === 'string' || dataWithIds[0][field] !=='DATE') && field !=='ID' ? true : false, // Make cells editable
          }   ));
       
      const colz =   [{
        field: 'details',
        headerName: '',
        editable:false,
       
        disableExport: true,
        headerClassName: 'custom-header', 
        renderCell: (params) => (
          <IconButton variant="contained" color="primary" onClick={async()=>{ 
            const firstKey = Object.keys(params.row)[0];
  const firstValue = params.row[firstKey];
            const result = window.confirm(`Do you want to want to delete this field?`);
            if (result) {
              const idds = Object.keys(params.row)[0]
            try {
              const response = await fetch(`${proxy}/default/deleteform/${pk}/${firstValue }`, {
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

          }} > <DeleteIcon /></IconButton>
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
            if (jsonData.message !=='Successful'){
              alert('Invalid Format for the column')
              return originalRow;
            }
          return updatedRow  
          
          } catch (error) {
           
            }} else {
       
            return originalRow;
            }
          
        } }
        components={{ Toolbar: GridToolbar }}
        slotProps={{ toolbar: { printOptions: { hideToolbar: true ,hideFooter: true}} }}
        sortModel={defaultSortModel}
      />
     
    </div>
  );
}

export default DynamicColumnsDataGrid;




