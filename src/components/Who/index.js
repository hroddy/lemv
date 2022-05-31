import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import WhoCarousel from "../Who-Carousel";

import karen from "../../assets/team/karen.jpg";
import morgan from "../../assets/team/morgan.JPG";
import hannah from "../../assets/team/hannah.jpg";
import rachel from "../../assets/team/rachel.JPG";

function Who(props) {
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
          variant="body1"
          mt={5}
          mb={10}
          align="left"
          justify="center"
        >
          Livermore! Eat. More. Vegetables. (LEMV) was founded in 2022 by local
          Livermore residents looking to give back to our community and
          positively impact the health and wellbeing of everyone living in our
          city. We are currently planning a Needs Assessment to gather community
          feedback about Livermorians’ specific needs and current barriers to
          vegetable consumption. For more information or to get involved, please
          email{" "}
          <Link href="mailto:info@lemv.org" target="_blank">
            info@lemv.org{" "}
          </Link>
        </Typography>

        <Grid
          container
          spacing={7}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={6}
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Karen Roddy
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  Karen and her husband Steve raised their three daughters in
                  Livermore. She has undergraduate degrees in Marketing, Human
                  Nutrition, and Dietetics and is currently working on her
                  master’s degree in Clinical Nutrition at University of the
                  Pacific.
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Morgan Roddy
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  Morgan graduated in 2021 with an undergraduate degree in
                  Cultural and Regional Studies and a master's degree in Social
                  Justice and Community Organizing from Prescott College in
                  Arizona. Previous projects include internships at the{" "}
                  <Link href="http://www.warehouseworkers.org/" target="_blank">
                    Warehouse Workers Resource Center
                  </Link>{" "}
                  and{" "}
                  <Link href="https://cangress.org/" target="_blank">
                    Los Angeles Community Action Network.
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={7}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={6}
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Hannah Roddy
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  Hannah completed the Fullstack Web Development Boot Camp
                  through UC Berkeley Extension in 2021 and is the web developer
                  for LEMV. She also owns and operates a small business in
                  Livermore: Purple Dog Training.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6}>
            <Card sx={{ maxWidth: 345, maxheight: 400 }}>
              <CardMedia
                component="img"
                height="400"
                src={rachel}
                alt="portrait shot of a dark haired woman with blue dyed hair tips"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Rachel Roddy
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  Rachel is currently completing her undergraduate degree in
                  Classics at UC Davis in preparation to attend law school in
                  2023.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <hr />
        <Typography
          color="primary"
         fontSize={12}
          variant="body1"
          mt={6}
          mb={4}
          align="left"
          justify="center"
        >
          
         This page is under construction. As LEMV forms, we will continue
          to update this website. If you would like to become involved, please
          contact us:{" "}
          <Link href="mailto:info@lemv.org" target="_blank">
            info@lemv.org{" "}
          </Link>{" "}
        </Typography>
      </Container>
    </div>
  );
}

export default Who;
