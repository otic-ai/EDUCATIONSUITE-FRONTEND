
import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../utils/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadSpinner/LoadSpinner';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./forms.css";
import { Menu, MenuItem, Box,Button, ListItemIcon, ListItemText } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Forms = (props) => {
    const history = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
   const workspaceID= localStorage.getItem('id')
    const [loading, setLoading] = useState(true)
    const reset = props.start
    const [add, setAdd]= useState(1)
    const [names, setNames] = useState([]); 
    let {proxy,authTokens} = useContext(AuthContext);
    const handleMenuOpen = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
      };
    
      const handleOptionClick = (option) => {
        // Perform action based on selected option and row data
       
        if (option==='view'){
            console.log('Selected option:', option);
            console.log('Selected row:', selectedRow.id);
            history(`/formdetails/${selectedRow.tableName}`)
        }
        handleMenuClose();
      };
    const columns = [
        {
            field: 'details',
            headerName: 'Details',
            width: 200,
            headerClassName: 'custom-header', 
            renderCell: (params) => (
              <Link to={`/formview/${params.row.tableName}/${params.row.id}`}>View Form</Link>
            ),
          },
        { field: "name", headerClassName: 'custom-header', headerName: "Name", flex: 1 },
        { field: "Date",headerClassName: 'custom-header',  headerName: "Date Added", type: "number" },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            headerClassName: 'custom-header', 
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
              <MenuItem onClick={() => handleOptionClick('Edit')}>
              <ListItemIcon>
                {/* Add your custom icon for each option */}
              </ListItemIcon>
              <ListItemText>Edit Design</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => handleOptionClick('design')}>
              <ListItemIcon>
                {/* Add your custom icon for each option */}
              </ListItemIcon>
              <ListItemText>Add Users</ListItemText>
            </MenuItem>
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
    const fetchData = async () => {
        try {
          const response = await fetch(`${proxy}/default/list/${workspaceID}`,
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
          const jsonData = await response.json();
          // Extracting 'name' property from each object
          setNames(jsonData);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect(() => {
        
        // Function to make the API call /default/list/
        
      const n = add + 1
      setAdd(n)
      
          fetchData();  
       
      }, []);

  return (
    <div>  <h1>Available Forms</h1>
    {loading ? <LoadingSpinner /> : <div>
    
       
      <Box >
      <DataGrid
        rows={names}
        columns={columns}
        
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[15]}
        
          disableRowSelectionOnClick
      />
    </Box>
    
      </div> }</div>
  )
}

export default Forms