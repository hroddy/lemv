import React from "react";
import Carousel from "../Carousel";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


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
