import React from "react";
import BenefitsCarousel from "../Benefits-Carousel";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  underClass: {
    width: 500,
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: 300,
    },
  },
}));

function Benefits(props) {
  const classes = useStyles();

  return (
    <div>
      <BenefitsCarousel updateCurrentPage={props.updateCurrentPage} />

      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          mt={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          Why is it important to eat vegetables?
        </Typography>
        <Typography
          color="primary"
          fontSize="30"
          variant="body1"
          my={5}
          align="left"
          justify="center"
        >
          Research has proven that adequate vegetable intake improves health
          outcomes and reduces medical expenses by reducing medications,
          decreasing disease states, improving quality of life, and displacing
          less healthy food choices; however, only 10% of American adults
          consume the recommended daily allowance of vegetables. [cite]
          <p />
          As a culture, we have begun to focus more on self care and few things
          impact our health as surely as the food we eat. Eating nourishing food
          is also an act of self-love.
          <p />
          <span style={{ fontStyle: "italic" }}>
            {" "}
            This page is under construction. As LEMV forms, we will continue to
            update this website. If you would like to become involved, please
            contact us: <Link href="mailto:info@lemv.org" target="_blank">
              info@lemv.org{" "}
            </Link>{" "}
          </span>
        </Typography>
      </Container>
    </div>
  );
}

export default Benefits;
