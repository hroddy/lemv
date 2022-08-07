import React from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";

import blogs from "../components/Blogs";

import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { blogId } = useParams();
  console.log(blogId);
  const blog = blogs.find((b) => b.id === blogId);

  return (
    <div>
      <Container>
        <Card>
          <div style={{ flex: "flex" }}>
            <Typography
              color="primary"
              align="center"
              justify="center"
              variant="h4"
              fontFamily="Playfair Display"
              my={2}
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
              height="250"
            />
            <Typography px={4} my={3} color="primary" variant="body1">
              {blog.body.map((section) => (
                <div>
                  {section}
                  <p />
                </div>
              ))}
            </Typography>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default BlogPost;
