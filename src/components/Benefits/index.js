import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import hero22 from "../../assets/22.png";

function Benefits() {
  return (
    <div>
      <img src={hero22} />
      <Container>
        <Typography align="center" justify="center" my={3} variant="h2">
          Benefits
        </Typography>
      </Container>
    </div>
  );
}

export default Benefits;
