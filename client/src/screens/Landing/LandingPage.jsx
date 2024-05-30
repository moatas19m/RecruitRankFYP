// LandingPage.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import './Landing.css';

const LandingPage = () => {
  const theme = useTheme();

  return (
    <Box 
      className="Landingwrapper"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden', // Prevent scrolling
      }}
    >
      <Navbar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          textAlign: 'center' // Center align text
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to RecruitRanks
        </Typography>
        <Typography variant="h5" gutterBottom>
          Explore our features and offerings.
        </Typography>
        <Button 
          variant="contained" 
          href="/register" 
          sx={{
            mt: 2,
            background: theme.gradients.primary,
            color: 'white',
            '&:hover': {
              background: theme.gradients.primary,
              opacity: 0.8,
            },
          }}
        >
          Get Started
        </Button>
      </Box>
      <Footer />
      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Box>
  );
};

export default LandingPage;
