import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import blogs from "../components/Blogs";

const Blog = () => {
  const [filter, updateFilter] = useState("");
  const filteredBlogs = blogs.filter((blog) =>
    blog.tags.join("").toLowerCase().includes(filter)
  );
  return (
    <div>
      {/* LG DISPLAY */}
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
                    <CardActionArea href={`/post/${blog.id}`}>
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
                        <Typography
                        color="primary"
                        align="right"
                        mb={2}
                        mx={3}
                        variant="body2"
                      >
                        by {blog.author} on {blog.date}
                      </Typography>

                        <CardMedia
                          component="img"
                          src={blog.image}
                          alt={blog.alt}
                          height="170"
                        />
                        <Typography px={4} my={3}>
                          {blog.body.map((section) => (
                            <div>{section}</div>
                          ))}
                        </Typography>
                      </div>
                    </CardActionArea>
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
                     <CardActionArea href={`/post/${blog.id}`}>
                    <div style={{ flex: "flex" }}>
                      <Typography
                        color="primary"
                        align="center"
                        justify="center"
                        variant="h4"
                        fontFamily="Playfair Display"
                        mt={3}
                        px={4}
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        color="primary"
                        align="right"
                        mb={2}
                        mx={3}
                        variant="body2"
                      >
                        by {blog.author} on {blog.date}
                      </Typography>
                      <CardMedia
                        component="img"
                        src={blog.image}
                        alt={blog.alt}
                        height="150"
                      />
                      
                      <Typography px={4} my={3}>
                        {blog.body.map((section) => (
                          <div>{section}</div>
                        ))}
                      </Typography>
                    </div>
                    </CardActionArea>
                  </Card>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* SM DISPLAY */}
      <Container alignItems="space-evenly">
        <Box
          sx={{
            display: { xs: "none", sm: "flex", md: "none", lg: "none" },
          }}
        >
          <Grid container spacing={1}>
            {/* title/search/filter column start */}
            <AppBar
              position="sticky"
              color="secondary"
              elevation={0}
              sx={{ height: "70px" }}
            >
              <Toolbar disableGutters>
                <Grid
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  container
                  spacing={30}
                >
                  <Grid item xs={6}>
                    <Typography
                      color="primary"
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
                      onChange={(e) =>
                        updateFilter(e.target.value.toLowerCase())
                      }
                    />
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>

            {/* title/search/filter column end */}

            {/* blog post column start */}

            <div style={{ flex: "flex" }}>
              {filteredBlogs.map((blog) => {
                return (
                  <Card sx={{ maxWidth: 800, flex: "flex" }}>
                     <CardActionArea href={`/post/${blog.id}`}>
                    <div style={{ flex: "flex" }}>
                      <Typography
                        color="primary"
                        align="center"
                        justify="center"
                        variant="h4"
                        fontFamily="Playfair Display"
                        mt={3}
                        px={4}
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        color="primary"
                        align="right"
                        mt={1}
                        mb={2}
                        mx={3}
                        variant="body2"
                      >
                        by {blog.author} on {blog.date}
                      </Typography>
                      <CardMedia
                        component="img"
                        src={blog.image}
                        alt={blog.alt}
                        height="175"
                      />
                      <Typography px={4} my={3}>
                        {blog.body.map((section) => (
                          <div>{section}</div>
                        ))}
                      </Typography>
                    </div>
                    </CardActionArea>
                  </Card>
                );
              })}
            </div>
            {/* blog post column end */}
          </Grid>
        </Box>
      </Container>
      {/* XS DISPLAY */}
      <Container alignItems="center">
        <Box
          sx={{
            display: { xs: "flex", sm: "none", md: "none", lg: "none" },
          }}
        >
          <Grid>
            <AppBar
              position="sticky"
              color="secondary"
              elevation={0}
              sx={{ height: "70px" }}
            >
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
                      onChange={(e) =>
                        updateFilter(e.target.value.toLowerCase())
                      }
                    />
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>

            {/* title/search/filter column */}

            {/* blog post column */}

            <div style={{ marginRight: "auto", marginLeft: "auto" }}>
              {filteredBlogs.map((blog) => {
                return (
                  <Card sx={{ maxWidth: 600 }}>
                     <CardActionArea href={`/post/${blog.id}`}>
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
                      <Typography
                        color="primary"
                        align="right"
                        mb={2}
                        mx={3}
                        variant="body2"
                      >
                        by {blog.author} on {blog.date}
                      </Typography>
                      <CardMedia
                        component="img"
                        src={blog.image}
                        alt={blog.alt}
                        height="120"
                      />
                      <Typography px={4} my={3}>
                        {blog.body.map((section) => (
                          <div>{section}</div>
                        ))}
                      </Typography>
                    </div>
                    </CardActionArea>
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
