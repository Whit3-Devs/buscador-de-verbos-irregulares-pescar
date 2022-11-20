import { createTheme } from "@mui/material/styles";
export const  themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#333',
      contrastText: 'rgba(236,235,235,0.87)',
    },
    secondary: {
      main: '#e84940',
    },
    background: {
      default: '#333333',
    },

  },
  typography: {
    fontFamily: 'Open Sans',
  },
});