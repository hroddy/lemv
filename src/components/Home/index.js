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
          color="primary"
          align="left"
          justify="center"
          mt={7}
          variant="h4"
        >
          Food is an opportunity for joy in our lives. Eating nourishing food is
          an act of self-love.
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
          Vegetables can be a key source of important nutrients. Few people's
          diets include enough vegetables for optimal health.
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
          Livermore! Eat. More. Vegetables. is a non-profit (filing in process)
          organization with a goal of increasing Livermore residents' vegetable
          consumption. This website is an education tool, sharing insights on
          how to enjoyably include more vegetables each day. In addition, we
          provide links to research on the latest discoveries about how the
          quality of our lives improves from eating vegetables.
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
          Why eat vegetables? Adequate vegetable intake improves health outcomes
          and reduces medical expenses by reducing medications, decreasing
          disease states, improving quality of life, and displacing less healthy
          food choices; however, only 10% of American adults consume the
          recommended daily allowance of vegetables.
        </Typography>
      </Container>
    </section>
  );
}

export default Home;
