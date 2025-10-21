import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#282828',
      paper: '#303947',
    },
    primary: {
      main: '#f24c02',
    },
    secondary: {
      main: '#4083cc',
    },
    text: {
      primary: '#fff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontSize: 14,
    htmlFontSize: 16,
    h5: {
      fontSize: '1.5rem', // 24px
    },
    body1: {
      fontSize: '1rem', // 16px
    },
    body2: {
      fontSize: '0.875rem', // 14px
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '16px',
        },
        body: {
          lineHeight: 1.5,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#303947',
        },
      },
    },
  },
});

export default theme;
