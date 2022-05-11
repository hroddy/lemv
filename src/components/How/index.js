import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import hero15 from "../../assets/15.png";

function How() {
  return (
    <div>
      <Container>
      <Typography align="center" justify="center" my={3} variant="h2">How To</Typography>
    </Container>
    <Box my={3}>
    <img src={hero15}/>
    </Box>
    </div>
   
  );
}

export default How;
