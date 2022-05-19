import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import HowCarousel from "../How-Carousel";
import { makeStyles } from "@material-ui/core";

import pageUnder from "../../assets/page-under.png"

const useStyles = makeStyles((theme) => ({
  underClass: {
    width: 500,
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: 300,
    }
  },
}));

function How(props) {

  const classes = useStyles();

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
        <img src={pageUnder} className={classes.underClass}/>
      </Container>
    </div>
  );
}

export default How;
