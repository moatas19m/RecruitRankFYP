import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ background: theme.gradients.primary, py: 3, mt: 'auto', width: '100%', position: 'relative' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="body1" color="white">
          &copy; {new Date().getFullYear()} RecruitRanks
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
