import React, { useState, useEffect, useContext } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AuthContext from '../utils/AuthContext';
import { Menu, MenuItem, Box,Button, ListItemIcon, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";

const DataManagement = () => {
    let { proxy, authTokens } = useContext(AuthContext);
    const [tableNames, setTableNames] = useState([]);
    const history = useNavigate();
    const [selectedRow, setSelectedRow] = useState(null);
    const [loading, setLoading] = useState(true)
    const [anchorEl, setAnchorEl] = useState(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleUpload = async () => {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append("name", 'file');
        try {
          const response = await axios.post(`${proxy}/default/api/upload/`, formData,{
         
            headers: {    
            "content-type": "multipart/form-data",
             'Authorization': `Bearer ${authTokens.access}`,
              },
        
          });
          const data =  response.json();
          window.location.reload();
          console.log(data.message); // Handle the response from the API
         
        } catch (error) {
         
        
        }
      } else {
        alert('No file selected')
      }
    };


    const handleMenuOpen = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
      };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
      };
    
      const handleOptionClick = async (option) => {
        // Perform action based on selected option and row data
       
        if (option==='view'){
            console.log('Selected option:', option);
            console.log('Selected row:', selectedRow.id);
            history(`/formdetails/${tableNames[(selectedRow.id-1)].name}`)
        } else if (option==='xxxusers'){
          history(`/form-user-permissions/${selectedRow.tableName}`)
        } else if (option==='Delete'){
          const result = window.confirm('Do you want to want to delete this data?');
          if (result) {
          try {
            const response = await fetch(`${proxy}/default/delete_table_name/${tableNames[(selectedRow.id-1)].name}`,
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
            setLoading(true)
           await response.json();
            window.location.reload();
            // Extracting 'name' property from each object
          
            setLoading(false)
          } catch (error) {
            console.error('Error fetching data:', error);
          }}
        }

        handleMenuClose();
      };
    useEffect(() => {
      // Fetch table names from your API endpoint
      fetch(`${proxy}/default/get_table_name`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokens.access}`,
        },
      })  // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => setTableNames(data));
    }, []);
  
    const columns = [
      { field: 'id',  headerName: 'ID', width: 70 },
     
      { field: 'name',headerName: 'Table Name', width: 250 },
      {
        field: 'Actions',
   
        width: 100,
     
        renderCell: (params) => (
          <div>
            <Button
              aria-controls="actions-menu"
              aria-haspopup="true"
              onClick={(e) => handleMenuOpen(e, params.row)}
            >
              <MoreVertIcon />
            </Button>
            <Menu
              id="actions-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
        
        <MenuItem onClick={() => handleOptionClick('view')}>
          <ListItemIcon>
            {/* Add your custom icon for each option */}
          </ListItemIcon>
          <ListItemText>View Data</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleOptionClick('Delete')}>
          <ListItemIcon>
            {/* Add your custom icon for each option */}
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
        {/* Add more custom options as needed */}
      </Menu>
    </div>
  ),
},
    ];
  
    const rows = tableNames.map((tableName, index) => ({ id: index + 1, name: tableName.title ,tablename: tableName.name}));
  
  return (
    <div>
       <input
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={handleFileChange}
      />   <Button variant="contained" color="primary" onClick={handleUpload}>
      Upload File
    </Button>
    <DataGrid  rows={rows} columns={columns} pageSize={5} />
  </div>
  )
}

export default DataManagement