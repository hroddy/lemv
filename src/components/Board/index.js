import React from "react";

import Box from "@mui/material/Box";
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

function Board(props) {
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
          The Board
        </Typography>
        <Typography
          color="primary"
          variant="body1"
          mt={5}
          mb={8}
          align="left"
          justify="center"
        >
          Livermore! Eat. More. Vegetables. (LEMV) was founded in 2022 by local
          Livermore residents looking to give back to our community and
          positively impact the health and wellbeing of everyone living in our
          city. We are currently planning a Needs Assessment to gather community
          feedback about Livermorians’ specific needs and current barriers to
          vegetable consumption. <p />
          For more information or to get involved, please email{" "}
          <Link href="mailto:info@lemv.org" target="_blank">
            info@lemv.org{" "}
          </Link>
        </Typography>

        <Grid
          container
          spacing={7}
          direction="colomn"
          alignItems="center"
          mb={6}
        >
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 600,
                maxheight: 300,
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                    align="left"
                  >
                    Karen Roddy
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                    align="left"
                  >
                    President
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Karen and her husband Steve raised their three daughters in
                    Livermore. She has undergraduate degrees in Marketing, Human
                    Nutrition, and Dietetics and is currently working on her
                    master’s degree in Clinical Nutrition at University of the
                    Pacific.
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="300"
                  src={karen}
                  alt="portrait shot of a blonde woman"
                />
              </Box>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                maxheight: 400,
                display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                  >
                    President
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Karen and her husband Steve raised their three daughters in
                    Livermore. She has undergraduate degrees in Marketing, Human
                    Nutrition, and Dietetics and is currently working on her
                    master’s degree in Clinical Nutrition at University of the
                    Pacific.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 600,
                maxheight: 300,
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                    align="left"
                  >
                    Morgan Roddy
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                    align="left"
                  >
                    Secratary
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Morgan graduated in 2021 with an undergraduate degree in
                    Cultural and Regional Studies and a master's degree in
                    Social Justice and Community Organizing from Prescott
                    College in Arizona. Previous projects include internships at
                    the{" "}
                    <Link
                      href="http://www.warehouseworkers.org/"
                      target="_blank"
                    >
                      Warehouse Workers Resource Center
                    </Link>{" "}
                    and{" "}
                    <Link href="https://cangress.org/" target="_blank">
                      Los Angeles Community Action Network.
                    </Link>
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="300"
                  src={morgan}
                  alt="portrait shot of a blonde woman"
                />
              </Box>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                maxheight: 400,
                display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                  >
                    Secratary
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Morgan graduated in 2021 with an undergraduate degree in
                    Cultural and Regional Studies and a master's degree in
                    Social Justice and Community Organizing from Prescott
                    College in Arizona. Previous projects include internships at
                    the{" "}
                    <Link
                      href="http://www.warehouseworkers.org/"
                      target="_blank"
                    >
                      Warehouse Workers Resource Center
                    </Link>{" "}
                    and{" "}
                    <Link href="https://cangress.org/" target="_blank">
                      Los Angeles Community Action Network.
                    </Link>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>

          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 600,
                maxheight: 300,
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                    align="left"
                  >
                    Morgan Roddy
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                    align="left"
                  >
                    Secratary
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Morgan graduated in 2021 with an undergraduate degree in
                    Cultural and Regional Studies and a master's degree in
                    Social Justice and Community Organizing from Prescott
                    College in Arizona. Previous projects include internships at
                    the{" "}
                    <Link
                      href="http://www.warehouseworkers.org/"
                      target="_blank"
                    >
                      Warehouse Workers Resource Center
                    </Link>{" "}
                    and{" "}
                    <Link href="https://cangress.org/" target="_blank">
                      Los Angeles Community Action Network.
                    </Link>
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="300"
                  src={morgan}
                  alt="portrait shot of a blonde woman"
                />
              </Box>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                maxheight: 400,
                display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                  >
                    Secratary
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Morgan graduated in 2021 with an undergraduate degree in
                    Cultural and Regional Studies and a master's degree in
                    Social Justice and Community Organizing from Prescott
                    College in Arizona. Previous projects include internships at
                    the{" "}
                    <Link
                      href="http://www.warehouseworkers.org/"
                      target="_blank"
                    >
                      Warehouse Workers Resource Center
                    </Link>{" "}
                    and{" "}
                    <Link href="https://cangress.org/" target="_blank">
                      Los Angeles Community Action Network.
                    </Link>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 600,
                maxheight: 300,
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                    align="left"
                  >
                    Morgan Roddy
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                    align="left"
                  >
                    Secratary
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Morgan graduated in 2021 with an undergraduate degree in
                    Cultural and Regional Studies and a master's degree in
                    Social Justice and Community Organizing from Prescott
                    College in Arizona. Previous projects include internships at
                    the{" "}
                    <Link
                      href="http://www.warehouseworkers.org/"
                      target="_blank"
                    >
                      Warehouse Workers Resource Center
                    </Link>{" "}
                    and{" "}
                    <Link href="https://cangress.org/" target="_blank">
                      Los Angeles Community Action Network.
                    </Link>
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="300"
                  src={morgan}
                  alt="portrait shot of a blonde woman"
                />
              </Box>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                maxheight: 400,
                display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
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
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                  >
                    Secratary
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Morgan graduated in 2021 with an undergraduate degree in
                    Cultural and Regional Studies and a master's degree in
                    Social Justice and Community Organizing from Prescott
                    College in Arizona. Previous projects include internships at
                    the{" "}
                    <Link
                      href="http://www.warehouseworkers.org/"
                      target="_blank"
                    >
                      Warehouse Workers Resource Center
                    </Link>{" "}
                    and{" "}
                    <Link href="https://cangress.org/" target="_blank">
                      Los Angeles Community Action Network.
                    </Link>
                  </Typography>
                </CardContent>
              </Box>
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
          This page is under construction. As LEMV forms, we will continue to
          update this website. If you would like to become involved, please
          contact us:{" "}
          <Link href="mailto:info@lemv.org" target="_blank">
            info@lemv.org{" "}
          </Link>{" "}
        </Typography>
      </Container>
    </div>
  );
}

export default Board;
