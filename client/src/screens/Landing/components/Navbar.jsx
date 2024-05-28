import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

const pages = ['About', 'Contact'];
const authLinks = ['Login', 'Register'];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            LOGO
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, marginLeft: 'auto' }}>
            {pages.map((page) => (
              <Button key={page} sx={{ color: 'white' }} href={`/${page.toLowerCase()}`}>
                {page}
              </Button>
            ))}
            {authLinks.map((link) => (
              <Button key={link} sx={{ color: 'white' }} href={`/${link.toLowerCase()}`}>
                {link}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
