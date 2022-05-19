import React from "react";
import OtherCarousel from "../Other-Carousel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import pageUnder from "../../assets/page-under.png"

function Other(props) {
  return (
    <div>
      <OtherCarousel updateCurrentPage={props.updateCurrentPage} />
      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={3}
          variant="h2"
        >
          Other
        </Typography>
        <img src={pageUnder}/>
        <Typography
          color="primary"
          fontFamily="Roboto"
          fontSize="30"
          variant="body1"
          mt={5}
          align="left"
          justify="center"
        >
          Page will include links to ...
          <br />
          Research study links What about fruit? <br />
          For Parents Calorie content vs nutritional content <br />
          Health at every size <br />
          Other healthy habits <br />
        </Typography>
      </Container>
    </div>
  );
}

export default Other;
