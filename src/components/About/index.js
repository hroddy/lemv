import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import hero from "../../assets/hero.png";

function About() {
  return (
    <section>
      <img src={hero} sx={{width: 90}} />
      <Typography
        id="about"
        component="h2"
        variant="h2"
        align="center"
        fontStyle="italic"
        my={7}
        color="primary"
      >
        Who are we?
      </Typography>
      <Container>
        <Grid
          container
          spacing={5}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
         
        </Grid>
      </Container>
    </section>
  );
}

export default About;
