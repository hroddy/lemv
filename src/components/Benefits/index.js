import React from "react";
import BenefitsCarousel from "../Benefits-Carousel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import pageUnder from "../../assets/page-under.png"

function Benefits(props) {
  return (
    <div>
      <BenefitsCarousel updateCurrentPage={props.updateCurrentPage} />

      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={3}
          variant="h2"
        >
         The Benefits
        </Typography>
        <img src={pageUnder}/>
      </Container>
    </div>
  );
}

export default Benefits;
