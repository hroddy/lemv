import React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Wordpress = () => {
  return (
    <div>
      {/* LG MD DISPLAY */}
      {/* <Container alignItems="center"> */}
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
        >
          <iframe
            src="https://livermoreeatmorevegetables.wordpress.com"
            height="700px"
            width="2000px"
            title="survey"
          ></iframe>
        </Box>
      {/* </Container> */}
      {/* SM DISPLAY */}
      <Container alignItems="center">
        <Box
          sx={{
            display: { xs: "none", sm: "flex", md: "none", lg: "none" },
          }}
        >
          <iframe
            src="https://livermoreeatmorevegetables.wordpress.com"
            height="800px"
            width="800px"
            title="survey-sm"
          ></iframe>
        </Box>
      </Container>
      {/* XS DISPLAY */}
      {/* <Container alignItems="center"> */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none", md: "none", lg: "none" },
          }}
        >
          <iframe
            src="https://livermoreeatmorevegetables.wordpress.com"
            height="600px"
            width="600px"
            title="survey-xs"
          ></iframe>
        </Box>
      {/* </Container> */}
    </div>
)}

export default Wordpress;