import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Contacts from "../../components/Adminworkspace/Adminworkspace";

function Workspaces() {
  const [forms, setForms] = useState([]);

  const handleFormSubmit = (formData) => {
    // Save the form data to the forms state
    setForms([...forms, formData]);
  };

  return (
    <Box m="20px">
      <Typography variant="h3">Workspaces</Typography>
      {/* Render the list of forms */}
      {forms.map((form, index) => (
        <div key={index}>
          <Typography variant="h4">Form {index + 1}</Typography>
          <Typography>{JSON.stringify(form)}</Typography>
        </div>
      ))}
      {/* Pass the handleFormSubmit function to the Contacts component */}
      <Contacts onSubmitForm={handleFormSubmit} />
    </Box>
  );
}

export default Workspaces;
