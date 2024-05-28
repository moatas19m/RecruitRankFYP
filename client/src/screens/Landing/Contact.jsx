import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography>
          Have any questions? Reach out to us through our contact form or follow us on our social media platforms.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
