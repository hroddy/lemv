// import React from "react";
// import { createStyles, makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import logo from "../../assets/lemv-logo-2.png";
// import AdbIcon from '@mui/icons-material/Adb';

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1
//     },
//     menuButton: {
//       marginRight: theme.spacing(2)
//     },
//     toolbar:{
//       justifyContent:'space-between'
//     },
//     container:{
//       display:'flex',
//       alignItems:'center',
//     },
//     title: {
//       flexGrow: 1,
//       textAlign: "center"
//     },
//     logo: {
//       maxWidth: 40,
//       marginRight: '10px'
//     }
//   })
// );

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// export function ButtonAppBar() {
//   const classes = useStyles();
//  const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar classes={{root:classes.toolbar}}>
//            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//           <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </IconButton>
//           <div className={classes.container}>
//           <img src={logo} alt="Kitty Katty!" className={classes.logo} />
//           <Typography variant="h6" className={classes.title}>
//             Kitty Katty!
//           </Typography>
//           </div>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// export default ButtonAppBar

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { makeStyles } from "@material-ui/core";
import { Link } from "@mui/material";
import MobileNav from './MobileNav';
import logo from "../../assets/lemv-logo-2.png";

const pages = ['How', 'Benefits'];
const pages1 = ['Who', 'Other'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = ({updateCurrentPage}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


const useStyles = makeStyles((theme) => ({
  logoClass: {
    width: 200,
    height: 200,
    cursor: 'pointer',
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
    <AppBar elevation={0} color="secondary" position="static">
      <Container  spacing={6} maxWidth="xl">
        <Toolbar disableGutters>
 

<MobileNav updateCurrentPage={updateCurrentPage} handleOpenNavMenu={handleOpenNavMenu} anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} pages={[...pages, ...pages1]} />

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
                    <Box sx={{ width: '100%', display: { xs: 'none', md: 'flex' } }}>
 <div style={{display: 'flex', justifyContent: 'space-evenly', width: '70%', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }} >

            {pages.map((page) => (
              <Button
                color="primary"
                key={page}
                onClick={() => updateCurrentPage(page)}
                sx={{ my: 2, display: 'block' }}
              >
                {page}
              </Button>
            ))}

          
                <Link
          
                 onClick={() => updateCurrentPage("Home")}
                 >
              <img
                src={logo}
                className={classes.logoClass}
                alt="Livermore Eat More Vegetables"
              />
            </Link>
       
            {pages1.map((page) => (
              <Button
                key={page}
                onClick={() => updateCurrentPage(page)}
                sx={{ my: 2, display: 'block' }}
              >
                {page}
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
