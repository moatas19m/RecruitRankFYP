import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const LandingPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Platform
        </Typography>
        <Typography variant="h5" gutterBottom>
          Explore our features and offerings.
        </Typography>
        <Button variant="contained" href="/register" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;
