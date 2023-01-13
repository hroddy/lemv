import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import WhoCarousel from "../components/Who-Carousel";

import aaron from "../assets/team/aaron.jpg";
import diana from "../assets/team/diana.jpeg";
import karen from "../assets/team/karen.jpg";
import morgan from "../assets/team/morgan.JPG";
import molly from "../assets/team/molly.jpg";
import emily from "../assets/team/emily.jpg";
import hannah from "../assets/team/hannah.JPG";
import rachel from "../assets/team/rachel.JPG";

const Who = () => {
  return (
    <div>
      <WhoCarousel />
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
          align="left"
          justify="center"
        >
          Livermore! Eat. More. Vegetables. (LEMV) was founded in 2022 by local
          Livermore residents looking to give back to our community and
          positively impact the health and wellbeing of everyone living in our
          city. We are currently planning a Needs Assessment to gather community
          feedback about Livermorians’ specific needs and current barriers to
          vegetable consumption.
        </Typography>

        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justifyItems="center"
          my={2}
        >
          <Grid item sm={6}>
            <Typography
              color="primary"
              variant="body1"
              align="left"
              justify="center"
            >
              For more information or to get involved, please email{" "}
              <Link href="mailto:info@lemv.org" target="_blank">
                info@lemv.org{" "}
              </Link>
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography color="primary" variant="body1">
              <Button
                variant="filled"
                sx={{ backgroundColor: "#97d600" }}
                href="/board"
              >
                Click here to view the Board Members
              </Button>
            </Typography>
          </Grid>
        </Grid>

        <Typography
          color="primary"
          align="center"
          justify="center"
          mt={7}
          mb={5}
          variant="h4"
          fontSize={32}
          fontFamily="Playfair Display"
        >
          Our Faces
        </Typography>

        <Grid
          container
          spacing={7}
          direction="colomn"
          alignItems="center"
          mb={6}
        >
          {/* MOLLY CUBBA START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 850,
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
                    Molly Cubba, MSCN
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Molly Cubba graduated in 2022 with a master’s degree in
                    Clinical Nutrition at University of the Pacific. She also
                    holds a bachelor’s degree in Nutrition and Dietetics from
                    Chico State. Molly created a Needs Assessment for LEMV. This
                    survey included one on one interviews and helped LEMV
                    understand what barriers Livermore residents face for
                    incorporating vegetables into their diet. Data from the
                    survey is being incorporated into intervention strategies.
                  </Typography>
                </CardContent>
                <img
                  component="img"
                  height="300"
                  src={molly}
                  alt="portrait shot of a woman with long dark hair"
                ></img>
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
                  src={molly}
                  alt="portrait shot of a dark haired woman"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                  >
                    Molly Cubba, MSCN
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Molly Cubba graduated in 2022 with a master’s degree in
                    Clinical Nutrition at University of the Pacific. She also
                    holds a bachelor’s degree in Nutrition and Dietetics from
                    Chico State. Molly created a Needs Assessment for LEMV. This
                    survey included one on one interviews and helped LEMV
                    understand what barriers Livermore residents face for
                    incorporating vegetables into their diet. Data from the
                    survey is being incorporated into intervention strategies.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* MOLLY CUBBA END */}

          {/* AARON MANDEL START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 850,
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
                    Aaron Mandel
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Aaron Mandel graduated in 2021 with a bachelor's in Computer
                    Science from the University of California, Santa Cruz. He
                    has Fullstack knowledge and experience with game development
                    both for desktop and the web. Aaron is currently working on
                    an educational game that aims to teach the foundations of
                    nutrition. In addition to general knowledge about required
                    macro- and micro-nutrients, the game will provide
                    information regarding healthy lifestyle choices for
                    populations such as diabetics (and pre-diabetics) and those
                    who are interested in learning more about weight management.
                    With Aaron's help, LEMV will be pursuing grant funding for
                    the game in the near future.
                  </Typography>
                </CardContent>
                <img
                  component="img"
                  height="300"
                  src={aaron}
                  alt="portrait shot of a dark haired woman"
                ></img>
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
                  src={aaron}
                  alt="portrait shot of a dark haired woman"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                  >
                    Aaron Mandel
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Aaron Mandel graduated in 2021 with a bachelor's in Computer
                    Science from the University of California, Santa Cruz. He
                    has Fullstack knowledge and experience with game development
                    both for desktop and the web. Aaron is currently working on
                    an educational game that aims to teach the foundations of
                    nutrition. In addition to general knowledge about required
                    macro- and micro-nutrients, the game will provide
                    information regarding healthy lifestyle choices for
                    populations such as diabetics (and pre-diabetics) and those
                    who are interested in learning more about weight management.
                    With Aaron's help, LEMV will be pursuing grant funding for
                    the game in the near future.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* AARON MANDEL END */}

          {/* DIANA PRINCE START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 850,
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
                    Diana Price, RD, MS
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Diana Price is a member of LEMV's{" "}
                    <Link
                      href="lemv.org/board"
                      target="_blank"
                      cursor="pointer"
                    >
                      Board of Directors
                    </Link>
                    . Diana has a bachelor's in Nutrition from Cal Poly San Luis
                    Obispo, a master's in Nutrition and Functional Medicine from
                    the University of Western States, and is a Registered
                    Dietitian Nutritionist. Diana is a business owner in
                    Livermore;{" "}
                    <Link
                      href="https://www.honestnutritionusa.com/"
                      target="_blank"
                      cursor="pointer"
                    >
                      Honest Nutrition USA
                    </Link>{" "}
                    offers nutrition counseling services specializing in
                    digestive wellness including celiac disease, gluten
                    intolerance, Crohn’s, ulcerative colitis, IBS, and food
                    sensitivities. As someone who knows the power of food, Diana
                    is passionate about gut health, wellness, and ultimately
                    happiness. Her mission is to educate, inspire and motivate
                    people so that they can become the healthiest version of
                    themselves.
                  </Typography>
                </CardContent>
                <img
                  component="img"
                  height="300"
                  src={diana}
                  alt="portrait shot of a blonde woman"
                ></img>
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
                  src={diana}
                  alt="portrait shot of a blonde woman"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                  >
                    Diana Price, RD, MS
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Diana Price is a member of LEMV's{" "}
                    <Link
                      href="lemv.org/board"
                      target="_blank"
                      cursor="pointer"
                    >
                      Board of Directors
                    </Link>
                    . Diana has a bachelor's in Nutrition from Cal Poly San Luis
                    Obispo, a master's in Nutrition and Functional Medicine from
                    the University of Western States, and is a Registered
                    Dietitian Nutritionist. Diana is a business owner in
                    Livermore;{" "}
                    <Link
                      href="https://www.honestnutritionusa.com/"
                      target="_blank"
                      cursor="pointer"
                    >
                      Honest Nutrition USA
                    </Link>{" "}
                    offers nutrition counseling services specializing in
                    digestive wellness including celiac disease, gluten
                    intolerance, Crohn’s, ulcerative colitis, IBS, and food
                    sensitivities. As someone who knows the power of food, Diana
                    is passionate about gut health, wellness, and ultimately
                    happiness. Her mission is to educate, inspire and motivate
                    people so that they can become the healthiest version of
                    themselves.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* DIANA PRICE END */}

          {/* KAREN RODDY START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 850,
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
                    Karen Roddy, MSCN
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Karen Roddy is a cofounder of LEMV and a member of the{" "}
                    <Link
                      href="lemv.org/board"
                      target="_blank"
                      cursor="pointer"
                    >
                      Board of Directors
                    </Link>
                    . Karen has a master's in Clinical Nutrition at University
                    of the Pacific as well as bachelors' degrees in Marketing,
                    Human Nutrition, and Dietetics. After working for Ernst &
                    Young as Director of Marketing, Karen and her husband Steve
                    moved to Livermore, where they have lived for over 20 years
                    and raised their three daughters. She was the founder and
                    president of a non-profit 501(c)(3) in Livermore,
                    Outstanding Academic Opportunities (OAO), which served 400
                    homeschooling families from Concord to Livermore by hiring
                    teachers and creating classes for junior high and high
                    school students.
                  </Typography>
                </CardContent>
                <img
                  component="img"
                  height="300"
                  src={karen}
                  alt="portrait shot of a woman with short dark hair"
                ></img>
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
                    Karen Roddy, MSCN
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Karen Roddy is a cofounder of LEMV and a member of the{" "}
                    <Link
                      href="lemv.org/board"
                      target="_blank"
                      cursor="pointer"
                    >
                      Board of Directors
                    </Link>
                    . Karen has a master's in Clinical Nutrition at University
                    of the Pacific as well as bachelors' degrees in Marketing,
                    Human Nutrition, and Dietetics. After working for Ernst &
                    Young as Director of Marketing, Karen and her husband Steve
                    moved to Livermore, where they have lived for over 20 years
                    and raised their three daughters. She was the founder and
                    president of a non-profit 501(c)(3) in Livermore,
                    Outstanding Academic Opportunities (OAO), which served 400
                    homeschooling families from Concord to Livermore by hiring
                    teachers and creating classes for junior high and high
                    school students.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* KAREN RODDY END */}

          {/* HANNAH RODDY START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 850,
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
                    Hannah Roddy
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Hannah completed the Fullstack Web Development Boot Camp
                    through UC Berkeley Extension in 2021 and is the web
                    developer and graphic designer for LEMV. She also owns and
                    operates a small business in Livermore: Purple Dog Training.
                  </Typography>
                </CardContent>
                <img
                  component="img"
                  height="300"
                  src={hannah}
                  alt="portrait shot of a dark haired woman"
                ></img>
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Hannah completed the Fullstack Web Development Boot Camp
                    through UC Berkeley Extension in 2021 and is the web
                    developer and graphic designer for LEMV. She also owns and
                    operates a small business in Livermore: Purple Dog Training.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* HANNAH RODDY END */}

          {/* MORGAN RODDY START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 850,
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
                    Morgan Roddy, MA
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Morgan Roddy is a cofounder of LEMV and a member of the{" "}
                    <Link
                      href="lemv.org/board"
                      target="_blank"
                      cursor="pointer"
                    >
                      Board of Directors
                    </Link>
                    . Morgan graduated in 2021 with a bachelor's degree in
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
                <img
                  component="img"
                  height="300"
                  src={morgan}
                  alt="portrait shot of a woman with long dark hair"
                ></img>
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
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Morgan Roddy is a cofounder of LEMV and a member of the{" "}
                    <Link
                      href="lemv.org/board"
                      target="_blank"
                      cursor="pointer"
                    >
                      Board of Directors
                    </Link>
                    . Morgan graduated in 2021 with a bachelor's degree in
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
          {/* MORGAN RODDY END */}

          {/* RACHEL RODDY START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 850,
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
                    Rachel Roddy
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Rachel Roddy graduated with a bachelor's degree in Classical
                    Civilizations in 2022 from UC Davis and will be attending
                    law school in 2023.
                  </Typography>
                </CardContent>
                <img
                  component="img"
                  height="300"
                  src={rachel}
                  alt="portrait shot of a dark haired woman"
                ></img>
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
                  src={rachel}
                  alt="portrait shot of a dark haired woman"
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Rachel Roddy graduated with a bachelor's degree in Classical
                    Civilizations in 2022 from UC Davis and will be attending
                    law school in 2023.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* RACHEL RODDY END */}
        </Grid>

        <hr />
        <Typography
          color="primary"
          fontSize={12}
          variant="body1"
          mt={6}
          mb={4}
          align="center"
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
};

export default Who;
