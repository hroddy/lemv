import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import hero19 from "../../assets/19.png";

function Other(props) {
  return (
    <div>
     <img src={hero19}/>
      <Container>
        <Typography align="center" justify="center" my={3} variant="h2">Other</Typography>
      </Container>
    </div>
  );
}

export default Other;
