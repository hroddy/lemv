import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import pic7 from "../assets/7.png";

const Blog = () => {
  return (
    <div>
      {/* LG MD DISPLAY */}
      <Container alignItems="space-evenly">
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
        >
          <Grid
            direction="row"
            container
            spacing={0}
            justifyContent="space-between"
            alignItems="space-evenly"
            mt={6}
          >
            {/* title/search/filter column */}

            <Grid item sm={4}>
              <Typography
                color="primary"
                align="left"
                justify="start"
                variant="h4"
                fontFamily="Playfair Display"
                mb={4}
              >
                LEMV Blog
              </Typography>

              <Typography mb={1} fontSize={20} color="primary">
                Search
              </Typography>
              <TextField
                variant="filled"
                size="small"
                hiddenLabel
                placeholder='Try "Recipe"'
              />

              {/* <Typography mt={4} color="primary">Filter</Typography> */}
            </Grid>

            {/* blog post column */}
            <Grid item sm={8}>
              <Card sx={{ maxWidth: 800 }}>
                <Typography
                  color="primary"
                  align="center"
                  justify="center"
                  variant="h4"
                  fontFamily="Playfair Display"
                  my={3}
                  px={4}
                >
                  What is diet?
                </Typography>
                <img src={pic7} height="200" />
                <Typography px={4} my={3}>
                  Eating vegetables is a key step to strong nutrition but there
                  are many elements to a healthy diet.
                  <p />
                  “Diets” as we think of them in our culture are usually
                  restrictive, defined by nos and the labeling of some foods as
                  bad. Dieting often involves shame and guilt. In this sense,
                  going on a diet is something you do temporarily, not because
                  you want to but because you should. While that is one
                  definition of diet, it is not the way we use the word.
                  <p />
                  Another definition of diet is “the kinds of food that a
                  person, animal, or community habitually eats.” According to
                  this definition, our diet is our everyday eating habits. For
                  example, my overall eating habits usually include pastas, stir
                  frys, salads, lentils, bread, chocolate, and lots more. More
                  specifically, I habitually have yogurt or avocado toast for
                  breakfast. I also tend to crave something sweet after dinner.
                  These would all be considered elements of my diet.
                  <p />
                  Some people are very aware of their diet and may have specific
                  limitations based on allergies or intolerances. Sometimes our
                  diet is heavily influenced by our environments, such as who we
                  live with, where we buy our food, or what we can afford.
                  <p />
                  If you are looking to change your diet, the first step is to
                  start paying attention. Keeping a one week food journal can be
                  a great way to start thinking about your overall food habits.
                  Please note that this does not mean counting calories, which
                  can be harmful rather than helpful. Once you have a good
                  understanding of what you usually eat, you can decide what, if
                  anything, you want to change.
                  <p />
                  Another good way to start thinking about food differently is
                  UCLA’s free Mindful Eating Series. This is “a collaboration
                  between UCLA CAPS and UCLA RISE that features pre-recorded
                  content and resources related to food, eating, and body image.
                  Resources offered here will provide information about how to
                  improve your relationship with food and your body, inclusive
                  of opportunities to practice new skills while eating a meal.”
                  This series includes videos, podcasts, books, and other
                  resources relating to our relationships with food.
                  <p />
                  In the end, you should enjoy what you eat! If you are looking
                  for ways to add more vegetables into your diet, check out our
                  How page: www.lemv.org/how
                </Typography>
              </Card>

              <Card sx={{ maxWidth: 800 }}>
                <Typography
                  color="primary"
                  align="center"
                  justify="center"
                  variant="h4"
                  fontFamily="Playfair Display"
                  my={3}
                  px={4}
                >
                  Intoduction to LEMV
                </Typography>
               
                <Typography px={4} my={3}>
                  Livermore! Eat. More. Vegetables. (LEMV) was founded in 2022
                  by local Livermore residents looking to give back to our
                  community and positively impact the health and wellbeing of
                  everyone living in our city. We are currently planning a Needs
                  Assessment to gather community feedback about Livermorians’
                  specific needs and current barriers to vegetable consumption.
                </Typography>
                <img src={pic7} height="200" />
                <Typography px={4} my={3}>
                  To learn more about the people who make this possible, check
                  out our “Who are we?” page on our main website:
                  www.lemv.org/who
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* SM DISPLAY */}
      {/* <Container alignItems="center">
        <Box
          sx={{
            display: { xs: "none", sm: "flex", md: "none", lg: "none" },
          }}
        >
          <iframe
            src="https://dentalpacific.az1.qualtrics.com/jfe/form/SV_ey9TLlpoVF6axyS"
            height="800px"
            width="800px"
            title="survey-sm"
          ></iframe>
        </Box>
      </Container> */}
      {/* XS DISPLAY */}
      {/* <Container alignItems="center">
        <Box
          sx={{
            display: { xs: "flex", sm: "none", md: "none", lg: "none" },
          }}
        >
          <iframe
            src="https://dentalpacific.az1.qualtrics.com/jfe/form/SV_ey9TLlpoVF6axyS"
            height="600px"
            width="400px"
            title="survey-xs"
          ></iframe>
        </Box>
      </Container> */}
    </div>
  );
};

export default Blog;
