import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import { Link } from "@mui/material";
import MobileNav from "./MobileNav";
import logo from "../../assets/lemv-logo-2.png";

const pages = [{id: "How", label: "How To"},{id: "Benefits", label: 'The Benefits'}];
const pages1 = [{id: "Who", label: "Who Are We?"}, {id: "Other", label: "Other"}];

const ResponsiveAppBar = ({ updateCurrentPage }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const useStyles = makeStyles((theme) => ({
    logoClass: {
      width: 200,
      height: 200,
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        height: 150,
        width: 150,
      },
      [theme.breakpoints.down("xs")]: {
        height: 100,
        width: 100,
      },
    },
  }));

  const classes = useStyles();

  return (
    <AppBar elevation={0} position="static" color="secondary">
      <Container spacing={6} maxWidth="xl">
        <Toolbar disableGutters>
          <MobileNav
            updateCurrentPage={updateCurrentPage}
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={[...pages, ...pages1]}
          />

          <Typography sx={{ flexGrow: 1 }}>
            <Link
              // href="/home"
              noWrap
              onClick={() => updateCurrentPage("Home")}
              align="center"
              sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "none"}, mr: 1 }}
            >
              <img src={logo} width="150" alt="Livermore Eat More Vegetables" />
            </Link>
          </Typography>

          <Box sx={{ width: "100%", display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "60%",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {pages.map((page, i) => (
                <Button
                  color="primary"
                  key={`${page.id}-${i}`}
                  onClick={() => updateCurrentPage(page.id)}
                  sx={{ my: 2, display: "block" }}
                >
                  {page.label}
                </Button>
              ))}

              <Link onClick={() => updateCurrentPage("Home")}>
                <img
                  src={logo}
                  className={classes.logoClass}
                  alt="Livermore Eat More Vegetables"
                />
              </Link>

              {pages1.map((page, i) => (
                <Button
                key={`${page.id}-${i}`}
                  onClick={() => updateCurrentPage(page.id)}
                  sx={{ my: 2, display: "block" }}
                  color="primary"
                >
                  {page.label}
                </Button>
              ))}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
