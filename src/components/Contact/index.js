import React, { useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
const { validateEmail } = require("../../utils/helpers");

const Contact = () => {
  return (
    <div>
      {/* LG MD DISPLAY */}
      <Container alignItems="center">
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
          
        >
          <iframe
            src="https://dentalpacific.az1.qualtrics.com/jfe/form/SV_agu3GAEbAFv9Ar4"
            height="800px"
            width="1200px"
          ></iframe>
        </Box>
      </Container >
       {/* SM DISPLAY */}
       <Container alignItems="center">
        <Box
          sx={{
            display: { xs: "none", sm: "flex", md: "none", lg: "none" },
          }}
          
        >
          <iframe
            src="https://dentalpacific.az1.qualtrics.com/jfe/form/SV_agu3GAEbAFv9Ar4"
            height="800px"
            width="800px"
          ></iframe>
        </Box>
      </Container>
      {/* XS DISPLAY */}
      <Container alignItems="center">
        <Box
          sx={{
            display: { xs: "flex", sm: "none", md: "none", lg: "none" },
          }}
        >
          <iframe
            src="https://dentalpacific.az1.qualtrics.com/jfe/form/SV_agu3GAEbAFv9Ar4"
            height="600px"
            width="400px"
          ></iframe>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
