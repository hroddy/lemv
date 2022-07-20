import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import blogs from "../components/Blogs";

const Blog = () => {
  const [filter, updateFilter] = useState("");
  console.log(filter);
  const filteredBlogs = blogs.filter((blog) =>
    blog.tags.join("").toLowerCase().includes(filter)
  );
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

            <Grid item sm={4} position="fixed">
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

              <Typography mb={1} fontSize={18} color="primary">
                Search posts by tags
              </Typography>
              <TextField
                variant="filled"
                size="small"
                hiddenLabel
                placeholder='Try "recipe"'
                onChange={(e) => updateFilter(e.target.value.toLowerCase())}
              />

              {/* <Typography mt={4} color="primary">Filter</Typography> */}
            </Grid>

            {/* blog post column */}
            <Grid item sm={8} ml={45}>
              <Card sx={{ maxWidth: 800 }}>
                {filteredBlogs.map((blog) => {
                  return (
                    <div >
                      <Typography
                        color="primary"
                        align="center"
                        justify="center"
                        variant="h4"
                        fontFamily="Playfair Display"
                        my={3}
                        px={4}
                      >
                        {blog.title}
                      </Typography>

                      <img src={blog.image} alt={blog.alt} height="200" />
                      <Typography px={4} my={3}>
                        {blog.body.map((section) => (
                          <div>
                            {section}
                            <p />
                          </div>
                        ))}
                      </Typography>
                      <hr />
                    </div>
                  );
                })}
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
