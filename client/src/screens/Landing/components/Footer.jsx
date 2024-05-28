import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', py: 3, mt: 'auto' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" color="white">
          &copy; {new Date().getFullYear()} My Company
        </Typography>
        <Link href="/login" color="inherit" underline="none">
          Login
        </Link>
        <Link href="/register" color="inherit" underline="none">
          Register
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
