import React from "react";
import Grid from "@mui/material/Grid";
//import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import logo from "../../assets/lemv-logo-2.png";

function Nav(props) {
  const { updateCurrentPage } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);

  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  const open3 = Boolean(anchorE3);

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleCloseA1 = () => {
    setAnchorEl(null);
  };
  const handleCloseA2 = () => {
    setAnchorE2(null);
  };
  const handleCloseA3 = () => {
    setAnchorE3(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar position="fixed">
        <Grid
          container
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item my={3}>
            <Avatar src={logo} sx={{ width: 200, height: 200 }} />
          </Grid>

          <Grid
            container
            spacing={6}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Button
                id="basic-button"
                aria-controls={open1 ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick1}
              >
                How to add more vegetables?
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open1}
                onClose={handleCloseA1}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={updateCurrentPage}>
                  Balanced plate education
                </MenuItem>
                <MenuItem onClick={updateCurrentPage}>
                  Intergrating more vegetables into current eating habits
                </MenuItem>
                <MenuItem onClick={updateCurrentPage}>
                  Care of vegetables when stored/cooked to maximize enjoyment
                  and nutrition benefits
                </MenuItem>
                <MenuItem onClick={updateCurrentPage}>
                  Cooking recipes that incorporate vegetables easily and taste
                  great
                </MenuItem>
                <MenuItem onClick={updateCurrentPage}>
                  Cooking recipes that incoprporate vegetables easily and taste
                  great
                </MenuItem>
                <MenuItem onClick={updateCurrentPage}>
                  Pairing flavors for maximum taste enjoyment (Wendy Bazillian,
                  Intersection of Flavor and Health)
                </MenuItem>
              </Menu>
            </Grid>

            <Grid item>
              <Button
                id="basic-button-2"
                aria-controls={open2 ? "basic-menu-2" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                onClick={handleClick2}
              >
                What are the benefits of more vegetables?
              </Button>
              <Menu
                id="basic-menu-2"
                anchorEl={anchorE2}
                open={open2}
                onClose={handleCloseA2}
                MenuListProps={{
                  "aria-labelledby": "basic-button-2",
                }}
              >
                <MenuItem onClick={updateCurrentPage}>Decrease medical issues, medications, and expenses</MenuItem>
                <MenuItem onClick={updateCurrentPage}>Improve QOL</MenuItem>
                <MenuItem onClick={updateCurrentPage}>Improve GI issues; increase transit time</MenuItem>
                <MenuItem onClick={updateCurrentPage}>Gut health; maintain diverse microbiome</MenuItem>
              </Menu>
            </Grid>

            <Grid item>
              <Button
                id="basic-button-3"
                aria-controls={open3 ? "basic-menu-3" : undefined}
                aria-haspopup="true"
                aria-expanded={open3 ? "true" : undefined}
                onClick={handleClick3}
              >
                Who are we?
              </Button>
              <Menu
                id="basic-menu-3"
                anchorEl={anchorE3}
                open={open3}
                onClose={handleCloseA3}
                MenuListProps={{
                  "aria-labelledby": "basic-button-3",
                }}
              >
                <MenuItem onClick={updateCurrentPage}>About us</MenuItem>
                <MenuItem onClick={updateCurrentPage}>Grant funding</MenuItem>
                <MenuItem onClick={updateCurrentPage}>Contact</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
}

export default Nav;
