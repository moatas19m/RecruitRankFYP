// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#800080', // Fallback color
    },
  },
  gradients: {
    primary: 'linear-gradient(to right, #cc8dcc, #794b79)',
  },
});

export default theme;
