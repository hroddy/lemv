import React from "react";
import Carousel from "../Carousel";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";
import hero3 from "../../assets/hero-3.png";

function Home(props) {
  return (
    <section>
       <Carousel updateCurrentPage={props.updateCurrentPage} />

      <Container>
        <Typography
          component="h2"
          variant="h2"
          my={3}
          align="center"
          justify="center"
        >
          This is fake text
        </Typography>
        <Typography variant="body-1" my={3} align="center" justify="center">
          This is fake text This is fake text This is fake text This is fake
          text
        </Typography>
      </Container>
    </section>
  );
}

export default Home;
