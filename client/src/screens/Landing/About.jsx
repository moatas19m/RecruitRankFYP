import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const About = () => {
  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography>
          We are a team dedicated to providing the best experience to our users. Learn more about our services and company culture here.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default About;
