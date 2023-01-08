import React from "react";
import { Box, Alert, AlertTitle } from "@mui/material";
const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Your order has been placed successfully — <strong>check it out!</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
