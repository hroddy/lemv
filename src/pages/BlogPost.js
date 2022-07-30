import React from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";

import blogs from "../components/Blogs";


import { useParams } from 'react-router-dom'

const BlogPost = () => {
    const { blogId } = useParams()
    console.log(blogId)
    const blog = blogs.find(b => b.id === blogId)
    
  return (
    <div>
      <Container>
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

                        <CardMedia
                          component="img"
                          src={blog.image}
                          alt={blog.alt}
                          height="170"
                        />
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
      </Container>
    </div>
  );
};

export default BlogPost;
