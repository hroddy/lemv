import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";

import WhoCarousel from "../Who-Carousel";

import karen from "../../assets/team/karen.jpg";
import morgan from "../../assets/team/morgan.JPG";
import hannah from "../../assets/team/hannah.JPG";

const useStyles = makeStyles((theme) => ({
  underClass: {
    width: 500,
    height: 500,
    [theme.breakpoints.down("sm")]: {
      height: 300,
      width: 300,
    },
  },
  portraitClass: {
    width: 500,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },
}));

function Who(props) {
  const classes = useStyles();

  return (
    <div>
      <WhoCarousel updateCurrentPage={props.updateCurrentPage} />
      <Container align="center">
        <Typography
          color="primary"
          align="center"
          justify="center"
          mt={5}
          variant="h4"
          fontFamily="Playfair Display"
        >
          Who are we?
        </Typography>
        <Typography
          color="primary"
          fontSize="30"
          variant="body1"
          mt={5}
          mb={10}
          align="left"
          justify="center"
        >
          Livermore! Eat. More. Vegetables. (LEMV) was founded in 2022 by local
          Livermore residents looking to give back to our community and
          positively impact the health and wellbeing of everyone living in our
          city. We are currently working with the University of the Pacific’s
          School of Health Sciences Department of Nutrition to gather community
          feedback about Livermorians’ specific needs and current barriers to
          vegetable consumption. For more information or to get involved, please
          email:{" "}
          <Link href="mailto:info@lemv.org" target="_blank">
            info@lemv.org{" "}
          </Link>
        </Typography>

        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={10}
        >
          <Grid item sm={6}>
            <Card sx={{ maxWidth: 345, maxheight: 400 }}>
              <CardMedia
                component="img"
                height="400"
                src={karen}
                alt="portrait shot of a blonde woman"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="primary">
                  Karen Roddy
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  insert bio insert bio insert bio insert bio insert bio insert
                  bio insert bio insert bio insert bio insert bio
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6}>
            <Card sx={{ maxWidth: 345, maxheight: 400 }}>
              <CardMedia
                component="img"
                height="400"
                src={morgan}
                alt="portrait shot of a dark haired woman"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="primary">
                  Morgan Roddy
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  insert bio insert bio insert bio insert bio insert bio insert
                  bio insert bio insert bio insert bio insert bio
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={10}
        >
          <Grid item sm={6}>
            <Card sx={{ maxWidth: 345, maxheight: 400 }}>
              <CardMedia
                component="img"
                height="400"
                src={hannah}
                alt="portrait shot of a dark haired woman"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="primary">
                  Hannah Roddy
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  insert bio insert bio insert bio insert bio insert bio insert
                  bio insert bio insert bio insert bio insert bio
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6}>
            <Card sx={{ maxWidth: 345, maxheight: 400 }}>
              <CardMedia
                component="img"
                height="400"
                src={hannah}
                alt="portrait shot of a dark haired woman"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="primary">
                  Rachel Roddy
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  insert bio insert bio insert bio insert bio insert bio insert
                  bio insert bio insert bio insert bio insert bio
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        
        <Typography
          color="primary"
          fontSize="30"
          variant="body1"
          mt={10}
          mb={5}
          align="left"
          justify="center"
        >
          <span style={{ fontStyle: "italic" }}>
            {" "}
            This page is under construction. As LEMV forms, we will continue to
            update this website. If you would like to become involved, please
            contact us:{" "}
            <Link href="mailto:info@lemv.org" target="_blank">
              info@lemv.org{" "}
            </Link>{" "}
          </span>
        </Typography>
      </Container>
    </div>
  );
}

export default Who;
