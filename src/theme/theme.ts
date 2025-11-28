import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3A6D68',
      dark: '#2F5C58',
      light: '#BFE3DD',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#7BAFA9',
      paper: '#E7F1EE',
    },
    text: {
      primary: '#264C48',
      secondary: '#3A6D68',
    },
  },
  shape: {
    borderRadius: 12,
  },
});
