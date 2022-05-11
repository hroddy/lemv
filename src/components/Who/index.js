import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import hero16 from "../../assets/16.png";

function Who() {
  return (
    <div>
    <img src={hero16}/>
    <Container>
      <Typography align="center" justify="center" my={3} variant="h2">Who</Typography>
    </Container>
    </div>
  );
}

export default Who;
