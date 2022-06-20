import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const MobileNav = ({handleOpenNavMenu, anchorElNav, handleCloseNavMenu, pages, updateCurrentPage}) => {
  return (
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: "flex", md: 'flex', lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'block', md: 'block' },
              }}
            >
              {pages.map((page,i) => (
                <MenuItem key={`${page.id}-${i}`} onClick={handleCloseNavMenu}>
                  <Typography href={`${page.href}`}
                  // onClick={() => updateCurrentPage(page.href)}
                  textAlign="center" color="primary">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
  )
}

export default MobileNav