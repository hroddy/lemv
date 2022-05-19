import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import WhoCarousel from "../Who-Carousel";

import pageUnder from "../../assets/page-under.png"

function Who(props) {
  return (
    <div>
      <WhoCarousel updateCurrentPage={props.updateCurrentPage}/>
      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={3}
          variant="h2"
        >
          Who are we?
        </Typography>
        <img src={pageUnder}/>
      </Container>
    </div>
  );
}

export default Who;
