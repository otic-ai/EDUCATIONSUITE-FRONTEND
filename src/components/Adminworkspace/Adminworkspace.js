import React, {useState, useEffect, useContext}from "react";
import { Box, Button, TextField } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./Adminworkspace.css"; // Import the CSS file

const tokens = (mode) => {
  // Mock function for theme-specific colors
  return {
    greenAccent: { 300: "#00FF00" },
    blueAccent: { 700: "#0000FF" },
    primary: { 400: "#CCCCCC" },
    grey: { 100: "#888888" },
  };
};

const mockDataContacts = [
  {
    id: 1,
    registrarId: "REG001",
    name: "John Doe",
    age: 30,
    phone: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main Street",
    city: "New York",
    zipCode: "10001",
  },
  {
    id: 2,
    registrarId: "REG001",
    name: "John Doe",
    age: 30,
    phone: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main Street",
    city: "New York",
    zipCode: "10001",
  },
  // Add more contacts here if needed
];

const Contacts = () => {
  const theme = "light"; // Simulate theme value for useTheme hook
  const colors = tokens(theme);

  const [contacts, setContacts] = useState(mockDataContacts);
  const [newContact, setNewContact] = useState({
    registrarId: "",
    name: "",
    age: 0,
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleAddContact = () => {
    const newId = contacts.length + 1;
    setContacts((prevContacts) => [...prevContacts, { ...newContact, id: newId }]);
    setNewContact({
      registrarId: "",
      name: "",
      age: 0,
      phone: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
    });
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", type: "number" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Box className="contact-form">
        <TextField
          name="id"
          label="ID"
          value={newContact.id}
          onChange={handleInputChange}
        />
        <TextField
          name="registrarId"
          label="Registrar ID"
          value={newContact.regid}
          onChange={handleInputChange}
        />
        <TextField
          name="name"
          label="Name"
          value={newContact.name}
          onChange={handleInputChange}
        />
               <TextField
          name="age"
          label="Age"
          value={newContact.age}
          onChange={handleInputChange}
        />
                <TextField
          name="phone"
          label="Phone Number"
          value={newContact.phonenumber}
          onChange={handleInputChange}
        />
        <TextField
          name="email"
          label="Email"
          value={newContact.email}
          onChange={handleInputChange}
        />
                <TextField
          name="address"
          label="Address"
          value={newContact.address}
          onChange={handleInputChange}
        />
                <TextField
          name="city"
          label="City"
          value={newContact.city}
          onChange={handleInputChange}
        />
                <TextField
          name="zipCode"
          label="Zip Code"
          value={newContact.zipcode}
          onChange={handleInputChange}
        />
        {/* Add more input fields for other contact details as needed */}
        <Button variant="contained" color="primary" onClick={handleAddContact}>
          Add User
        </Button>
      </Box>

      <Box className="data-grid-container">
        <DataGrid
          rows={contacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
