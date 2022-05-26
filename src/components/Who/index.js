import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";

import WhoCarousel from "../Who-Carousel";

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

function Who(props) {

  const classes = useStyles();

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
          fontFamily="Playfair Display"
        >
          Who are we?
        </Typography>
        <img src={pageUnder} className={classes.underClass}/>
      </Container>
    </div>
  );
}

export default Who;
