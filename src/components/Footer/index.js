import * as React from "react";
import Box from "@mui/material/Box";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div>
      <Box component="footer">
        <Toolbar>
          <CopyrightIcon sx={{ width: 12 }} />
          <Typography
            sx={{ fontSize: 12 }}
            align="left"
            justify="center"
            color="tertiary"
            fontFamily="Playfair Display"
          >
            Made by Hannah Roddy, {new Date().getFullYear()}
          </Typography>
        </Toolbar>
      </Box>
    </div>
  );
};

export default Footer;
