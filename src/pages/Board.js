import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import karen from "../assets/team/karen.jpg";
import dale from "../assets/team/dale.jpg";
import kori from "../assets/team/kori.jpg";

import nancy from "../assets/team/nancy.jpg";
import kathleen from "../assets/team/kathleen.png";
import diana from "../assets/team/diana.jpeg";
import morgan from "../assets/team/morgan.JPG";

const Board = () => {
  return (
    <div>
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
          LEMV's board is being assembled. More members will be added to this
          page.
        </Typography>

        <Grid
          container
          spacing={7}
          direction="colomn"
          alignItems="center"
          mb={6}
        >
          {/* KAREN RODDY START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 930,
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
                    Karen Roddy has bachelors' degrees in Marketing, Human
                    Nutrition, and Dietetics and is currently working on her MS
                    in Clinical Nutrition at University of the Pacific. After
                    working for Ernst & Young as Director of Marketing, Roddy
                    and her husband Steve moved to Livermore, where they have
                    lived for over 20 years and raised their three daughters.
                    She was the founder and president of a non-profit 501(c)(3)
                    in Livermore, Outstanding Academic Opportunities (OAO),
                    which served 400 homeschooling families from Concord to
                    Livermore by hiring teachers and creating classes for junior
                    high and high school students.
                  </Typography>
                </CardContent>
                <img
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
                    Karen Roddy has bachelors' degrees in Marketing, Human
                    Nutrition, and Dietetics and is currently working on her MS
                    in Clinical Nutrition at University of the Pacific. After
                    working for Ernst & Young as Director of Marketing, Roddy
                    and her husband Steve moved to Livermore, where they have
                    lived for over 20 years and raised their three daughters.
                    She was the founder and president of a non-profit 501(c)(3)
                    in Livermore, Outstanding Academic Opportunities (OAO),
                    which served 400 homeschooling families from Concord to
                    Livermore by hiring teachers and creating classes for junior
                    high and high school students.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* KAREN RODDY END */}

          {/* DALE WALLIS START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 930,
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
                    Dale Wallis, MS, CPA
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                    align="left"
                  >
                    Treasurer
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Dale Wallis has bachelor's and master's degrees in
                    accounting from Oklahoma State University. Wallis is
                    licensed as a CPA in Oklahoma and California. During his
                    almost 50-year career, Wallis has served in management of
                    two of the “Big-4” CPA firms – KPMG in Tulsa, Oklahoma, and
                    Ernst & Young in San Diego, California – as well as a
                    partner in a small CPA firm. In retirement he continues to
                    practice as a sole proprietor. Wallis has served on the
                    Board of Directors for a variety of corporations and
                    nonprofits and is also passionate about education. His
                    teaching interests include ethics in accounting and
                    financial statement analysis. To read more about Dale, view
                    his{" "}
                    <Link
                      href="https://drive.google.com/file/d/14pufkM4fhWerzifTG-AWTysCbzIwwE_x/view"
                      target="_blank"
                      cursor="pointer"
                    >
                      career summary
                    </Link>
                  </Typography>
                </CardContent>
                <img
                  component="img"
                  height="300"
                  src={dale}
                  alt="portrait shot of a man in a suit"
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
                  src={dale}
                  alt="portrait shot of a man in a suit"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                  >
                    Dale Wallis, MS, CPA
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                  >
                    Treasurer
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Dale Wallis has bachelors' and masters' degrees in
                    accounting from Oklahoma State University. Wallis is
                    licensed as a CPA in Oklahoma and California. During his
                    almost 50-year career, Wallis has served in management of
                    two of the “Big-4” CPA firms – KPMG in Tulsa, Oklahoma, and
                    Ernst & Young in San Diego, California – as well as a
                    partner in a small CPA firm. In retirement he continues to
                    practice as a sole proprietor. Wallis has served on the
                    Board of Directors for a variety of corporations and
                    nonprofits and is also passionate about education. His
                    teaching interests include ethics in accounting and
                    financial statement analysis.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* DALE WALLIS END */}

          {/* MORGAN RODDY START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 930,
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
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                    align="left"
                  >
                    Secretary
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Morgan Roddy graduated in 2021 with a bachelor's degree in
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
                  alt="portrait shot of a dark haired woman"
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
                    Morgan Roddy, MA
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontSize={20}
                    component="div"
                    color="primary"
                  >
                    Secretary
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Morgan Roddy graduated in 2021 with a bachelor's degree in
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

          {/* Nancy Hamler START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 930,
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
                    Kori Dover, RD, MS
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                   Kori Dover holds a bachelor's in Human Nutrition and
                    Dietetics from Metropolitan State University of Devner and a
                    master’s in Dietetics from California State University
                    Sacramento. Currently, Dover is the California Beef
                    Council’s Registered Dietitian and resident health
                    professional, providing evidence-based education, resources,
                    and communication around health and nutrition. She is also
                    the voice behind <Link html="https://www.gfreekori.com/" target="_blank">GFree Kori</Link>, where she explores "Gluten-Free
                    & Guilt-Free Living" as a food lover and mom who also
                    happens to be a registered dietitian who has celiac. As
                    Dover says,"There is no one-size-fits-all model in health,
                    nutrition or with food. We create connections, celebrate and
                    honor our cultures with food, and eating well should not
                    leave you unsatisfied and hungry. Most of all, food and
                    eating should not be based on fear."
                  </Typography>
                </CardContent>

                <img
                  component="img"
                  height="300"
                  src={kori}
                  alt="portrait shot of a blonde woman"
                  align="right"
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
                  src={kori}
                  alt="portrait shot of a blonde woman"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                  >
                    Kori Dover, RD, MS
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Kori Dover holds a bachelor's in Human Nutrition and
                    Dietetics from Metropolitan State University of Devner and a
                    master’s in Dietetics from California State University
                    Sacramento. Currently, Dover is the California Beef
                    Council’s Registered Dietitian and resident health
                    professional, providing evidence-based education, resources,
                    and communication around health and nutrition. She is also
                    the voice behind <Link html="https://www.gfreekori.com/" target="_blank">GFree Kori</Link>, where she explores "Gluten-Free
                    & Guilt-Free Living" as a food lover and mom who also
                    happens to be a registered dietitian who has celiac. As
                    Dover says,"There is no one-size-fits-all model in health,
                    nutrition or with food. We create connections, celebrate and
                    honor our cultures with food, and eating well should not
                    leave you unsatisfied and hungry. Most of all, food and
                    eating should not be based on fear."
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* Nancy Hamler END */}

          {/* Nancy Hamler START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 930,
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
                    Nancy Hamler, DMSc, MPA, RDN, PA-C
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Dr. Nancy Hamler is a licensed physician assistant who began
                    her healthcare career as a registered dietitian. She
                    graduated from Samuel Merritt’s Master Physician Assistant
                    program and completed her Doctor of Medical Science (DMSc)
                    degree through Lynchburg University alongside a Fellowship
                    in Emergency Medicine. While she started her clinical career
                    in Family Medicine, she currently practices at a local
                    community emergency department as well as serving as Asst.
                    Clinical Professor at University of the Pacific and adjunct
                    faculty for Rocky Mountain University’s DMSc program.
                    Additionally, Dr Hamler has taught for the Nutrition &
                    Dietetics departments at UC Davis and California State
                    University, Sacramento.
                  </Typography>
                </CardContent>

                <img
                  component="img"
                  height="300"
                  src={nancy}
                  alt="portrait shot of a blonde woman"
                  align="right"
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
                  src={nancy}
                  alt="portrait shot of a blonde woman"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                  >
                    Nancy Hamler, DMSc, MPA, RDN, PA-C
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Dr. Nancy Hamler is a licensed physician assistant who began
                    her healthcare career as a registered dietitian. She
                    graduated from Samuel Merritt’s Master Physician Assistant
                    program and completed her Doctor of Medical Science (DMSc)
                    degree through Lynchburg University alongside a Fellowship
                    in Emergency Medicine. While she started her clinical career
                    in Family Medicine, she currently practices at a local
                    community emergency department as well as serving as Asst.
                    Clinical Professor at University of the Pacific and adjunct
                    faculty for Rocky Mountain University’s DMSc program.
                    Additionally, Dr Hamler has taught for the Nutrition &
                    Dietetics departments at UC Davis and California State
                    University, Sacramento.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* Nancy Hamler END */}

           {/* Angela Piazza START */}
           <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 930,
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
                    Angela Piazza
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Angela Piazza's bio will be coming soon...
                  </Typography>
                </CardContent>
                {/* <img
                  component="img"
                  height="300"
                  src={angela}
                  alt="portrait shot of a blonde woman"
                /> */}
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
                {/* <CardMedia
                  component="img"
                  height="400"
                  src={angela}
                  alt="portrait shot of a blonde woman"
                /> */}
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
                    Angela Piazza's bio will be coming soon...
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* Angela Piazza END */}

          {/* DIANA PRINCE START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 930,
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
                    Diana Price has a bachelor's in Nutrition from Cal Poly San
                    Luis Obispo, a master's in Nutrition and Functional Medicine
                    from the University of Western States, and is a Registered
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
                    Diana Price has a bachelor's in Nutrition from Cal Poly San
                    Luis Obispo, a master's in Nutrition and Functional Medicine
                    from the University of Western States, and is a Registered
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

          {/* Kathleen Willkom START */}
          <Grid item sm={12}>
            <Card
              sx={{
                maxWidth: 930,
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
                    Kathleen Willkom-Nicholas, RD, MS
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Kathleen Willkom-Nicholas has been serving the residents of
                    Alameda County for over 20 years. Willkom-Nicholas graduated
                    from the University of the Philippines with her bachelor’s
                    in Community Nutrition. Willkom-Nicholas then attended San
                    Jose State University earning her master's in Clinical
                    Nutrition. After completing her master's degree, she entered
                    the Women, Infant, and Children Nutrition Program, joining
                    Alameda County WIC in 1996. Since that time,
                    Willkom-Nicholas was the site manager of the Hayward and
                    Fremont WIC locations and is now the Program Director.
                  </Typography>
                </CardContent>
                <img
                  component="img"
                  height="300"
                  src={kathleen}
                  alt="portrait shot of a dark haired woman"
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
                  src={kathleen}
                  alt="portrait shot of a dark haired woman"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary"
                  >
                    Kathleen Willkom-Nicholas, RD, MS
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="left"
                  >
                    Kathleen Willkom-Nicholas has been serving the residents of
                    Alameda County for over 20 years. Willkom-Nicholas graduated
                    from the University of the Philippines with her bachelor's
                    in Community Nutrition. Willkom-Nicholas then attended San
                    Jose State University earning her master's in Clinical
                    Nutrition. After completing her master's degree, she entered
                    the Women, Infant, and Children Nutrition Program, joining
                    Alameda County WIC in 1996. Since that time,
                    Willkom-Nicholas was the site manager of the Hayward and
                    Fremont WIC locations and is now the Program Director.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          {/* Kathleen Willkom END */}
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
};

export default Board;
