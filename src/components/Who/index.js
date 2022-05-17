import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import WhoCarousel from "../Who-Carousel";

function Who(props) {
  return (
    <div>
      <WhoCarousel updateCurrentPage={props.updateCurrentPage} />
      <Container>
        <Typography
          color="primary"
          align="center"
          justify="center"
          my={3}
          variant="h2"
        >
          Who
        </Typography>
        <Typography
          color="primary"
          fontFamily="Roboto"
          fontSize="30"
          variant="body1"
          mt={5}
          align="left"
          justify="center"
        >
          Adequate vegetable intake improves health outcomes1 and reduces
          medical expenses by reducing medications1, decreasing disease states2,
          improving quality of life3, and displacing less healthy food
          choices1,2; however, only 10% of American adults consume the
          recommended daily allowance of vegetables4. Many low-income Americans
          face significant barriers to consuming more vegetables1. These
          barriers can include limited access due to financial constraints and
          transportation; lack of knowledge about benefits of vegetable quantity
          and diversity; lack of knowledge about preparation and/or
          incorporating vegetables into their current diet; and limited
          availability of culturally suitable vegetables5. Livermore! Eat. More.
          Vegetables. is a newly forming community outreach program aimed at
          increasing vegetable consumption for all Livermore, California
          residents. This program’s objective is to increase residents’ intake
          of vegetables by educating citizens about the benefits of eating
          vegetables, rallying them to find ways to increase their intake, and
          utilizing sponsorships and grants to ease access for those who need
          it. While Livermore! Eat. More. Vegetables. is aimed at all Livermore
          residents, the proposed 6-month study will focus on Livermore’s
          low-income residents by measuring this population’s vegetable
          knowledge, use, and access pre- and post-intervention. By measuring
          the impact of the proposed intervention, this study can increase the
          body of knowledge available about community health programs aimed at
          improving vegetable consumption, improve health outcomes for
          Livermore’s low-income residents, increase Livermore! Eat. More.
          Vegetables’ access to sponsorships and grant funding as well as serve
          as a model for other communities interested in improving health
          outcomes through increased vegetable consumption.
        </Typography>
      </Container>
    </div>
  );
}

export default Who;
