import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HowCarousel from "../How-Carousel";

import pageUnder from "../../assets/page-under.png"

function How(props) {
  return (
    <div>
      <HowCarousel updateCurrentPage={props.updateCurrentPage} />
      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={3}
          variant="h2"
        >
          How To
        </Typography>
        <img src={pageUnder}/>
      </Container>
    </div>
  );
}

export default How;
