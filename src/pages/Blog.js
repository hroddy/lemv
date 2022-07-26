import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
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
            </Grid>

            {/* blog post column */}
            <Grid item sm={8} ml={45}>
              {filteredBlogs.map((blog) => {
                return (
                  <Card sx={{ maxWidth: 800 }}>
                    <div style={{ flex: "flex" }}>
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
                    </div>
                  </Card>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* MD DISPLAY */}
      <Container alignItems="space-evenly">
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex", lg: "none" },
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

            <Grid item sm={2} position="fixed">
              <Typography
                color="primary"
                align="left"
                justify="start"
                variant="h4"
                fontFamily="Playfair Display"
                fontSize={30}
                mb={4}
              >
                LEMV Blog
              </Typography>

              <Typography mb={1} fontSize={15} color="primary">
                Search posts by tags
              </Typography>
              <TextField
                variant="filled"
                size="small"
                hiddenLabel
                placeholder='Try "recipe"'
                onChange={(e) => updateFilter(e.target.value.toLowerCase())}
              />
            </Grid>

            {/* blog post column */}
            <Grid item sm={9} ml={30}>
              {filteredBlogs.map((blog) => {
                return (
                  <Card sx={{ maxWidth: 800 }}>
                    <div style={{ flex: "flex" }}>
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

                      <img src={blog.image} alt={blog.alt} height="150" />
                      <Typography px={4} my={3}>
                        {blog.body.map((section) => (
                          <div>
                            {section}
                            <p />
                          </div>
                        ))}
                      </Typography>
                    </div>
                  </Card>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* SM DISPLAY
      <Container alignItems="space-evenly">
        <Box
          sx={{
            display: { xs: "flex", sm: "none", md: "none", lg: "none" },
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

      {/* <Grid item sm={2} position="fixed">
              <Typography
                color="primary"
                align="left"
                justify="start"
                variant="h4"
                fontFamily="Playfair Display"
                fontSize={30}
                mb={2}
              >
                LEMV Blog
              </Typography>

              <Typography mb={1} fontSize={14} color="primary">
                Search posts by tags
              </Typography>
              <TextField
                variant="filled"
                size="small"
                hiddenLabel
                placeholder='Try "recipe"'
                onChange={(e) => updateFilter(e.target.value.toLowerCase())}
              />
            </Grid> */}

      {/* blog post column */}
      {/* <Grid item sm={10} ml={25}>
              {filteredBlogs.map((blog) => {
                return (
                  <Card sx={{ maxWidth: 570 }}>
                    <div style={{ flex: "flex" }}>
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

                      <img src={blog.image} alt={blog.alt} height="120" />
                      <Typography px={4} my={3}>
                        {blog.body.map((section) => (
                          <div>
                            {section}
                            <p />
                          </div>
                        ))}
                      </Typography>
                    </div>
                  </Card>
                );
              })}
            </Grid>
          </Grid> 
        </Box>
      </Container>*/}
      {/* XS DISPLAY */}
      <Container alignItems="center">
        <Box
          sx={{
            display: { xs: "flex", sm: "none", md: "none", lg: "none" },
          }}
        >
          <Grid>
          <AppBar position="sticky" color="secondary" elevation={0} sx={{ height: "70px" }}>
            <Toolbar disableGutters>
              <Grid
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                container
                spacing={2}
              >
                <Grid item xs={6}>
                  <Typography
                    color="primary"
                    align="left"
                    justify="start"
                    variant="h4"
                    fontFamily="Playfair Display"
                    fontSize={30}
                    mb={2}
                  >
                    LEMV Blog
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    variant="filled"
                    size="small"
                    hiddenLabel
                    placeholder="Search by tags"
                    curosr="pointer"
                    onChange={(e) => updateFilter(e.target.value.toLowerCase())}
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        
          {/* title/search/filter column */}

          {/* blog post column */}
         
            <div style={{marginRight: "auto", marginLeft: "auto"}}>
              {filteredBlogs.map((blog) => {
                return (
                  <Card sx={{ maxWidth: 430 }}>
                    <div style={{ flex: "flex" }}>
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

                      <img src={blog.image} alt={blog.alt} height="120" />
                      <Typography px={4} my={3}>
                        {blog.body.map((section) => (
                          <div>
                            {section}
                            <p />
                          </div>
                        ))}
                      </Typography>
                    </div>
                  </Card>
                );
              })}
            </div>
            </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Blog;
