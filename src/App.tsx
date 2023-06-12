import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import { blueGrey, cyan, deepPurple, green, grey, orange, purple, red, teal, yellow } from '@mui/material/colors';
import Main from './components/Main';


function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#fae7b4',
        paper: '#1d1d1f',
      },
      primary: {
        main: '#51280B',
        contrastText: '#FFF',
      },
      secondary: {
        main: '#8B4513',
        contrastText: '#000',
      },
    },
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
      button: {
        textTransform: 'none',
      },
      h1: {
        fontSize: 64,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
      },
      h2: {
        fontSize: 40,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
      },
      h3: {
        fontSize: 32,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
      },
      h4: {
        fontSize: 24,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
      },
      h5: {
        fontSize: 20,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
      },
      h6: {
        fontSize: 16,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
      },
      subtitle1: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 20,
      },
      subtitle2: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 14,
      },
      body1: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
      },
      body2: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 12,
        fontWeight: 300,
        lineHeight: 1.27,
      },
      fontWeightLight: 300,
      htmlFontSize: 16,
      fontWeightBold: 800,
    },
    shape: {
      borderRadius: 0,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px #968DB3;
        }

        ::-webkit-scrollbar-thumb {
          background: #2F2244;
        },

        & .MuiLink-root {
          text-decoration: none;
          color: #BCBC86;
        }

        a {
          text-decoration: none;
        }

        // a.active[aria-current='page'] {
        //   & .MuiListItemButton-root {
        //     background-color: #2F2244
        //   }

        //   & .MuiListItemButton-root:active {
        //     background-color: #2F2244
        //   }

        //   & .MuiTypography-root, & .MuiSvgIcon-root {
        //     color: #fff
        //   }

        //   & .MuiButton-text {
        //     text-decoration: underline;
        //   }
        // }
      `
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
