import React, { Component } from "react";
import Box from "@mui/material/Box";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

class Footer extends Component {
  render() {
    return (
      <div>
        <Box component="footer">
          <Toolbar>
            <CopyrightIcon sx={{ width: 11 }} color="text.secondary" />
            <Typography
              sx={{ fontSize: 10 }}
              align="left"
              justify="center"
              color="text.secondary"
              fontFamily="Roboto"
            >
              Made by Hannah Roddy, {new Date().getFullYear()}
            </Typography>
          </Toolbar>
        </Box>
      </div>
    );
  }
}

export default Footer;
