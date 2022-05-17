import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logo from "../../assets/lemv-logo-2.png";

const useStyles = makeStyles((theme) => ({
  logoClass: {
    width: 200,
    height: 200,
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

function Nav(props) {
  const { updateCurrentPage } = props;

  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar position="fixed">
        <Grid
          container
          spacing={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Button
              href="how"
              onClick={() => updateCurrentPage("How")}
              color="primary"
            >
              <Link underline="hover">
              <Typography fontFamily="Roboto" variant="h7" fontWeight="400" color="primary">
                How To
              </Typography>
              </Link>
            </Button>
          </Grid>

          <Grid item>
            <Button
              href="benefits"
              onClick={() => updateCurrentPage("Benefits")}
              color="primary"
            >
              <Link underline="hover">
              <Typography fontFamily="Roboto" variant="h7" fontWeight="400" color="primary">
                The Benefits
              </Typography>
              </Link>
            </Button>
          </Grid>
          <Grid item mb={1}>
            <Link href="home" onClick={() => updateCurrentPage("Home")}>
              <img
                src={logo}
                className={classes.logoClass}
                alt="Livermore Eat More Vegetables"
              />
            </Link>
          </Grid>
          <Grid item>
            <Button
              href="who"
              onClick={() => updateCurrentPage("Who")}
              color="primary"
            >
               <Link underline="hover">
               <Typography fontFamily="Roboto" variant="h7" fontWeight="400" color="primary">
                Who are we?
              </Typography>
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="other"
              onClick={() => updateCurrentPage("Other")}
              color="primary"
            >
              <Link underline="hover">
              <Typography fontFamily="Roboto" variant="h7" fontWeight="400" color="primary">
                Other
              </Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
}

export default Nav;
