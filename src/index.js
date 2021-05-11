import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { lightBlue, blueGrey, green } from "@material-ui/core/colors";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[700],
      light: lightBlue[50],
    },
    secondary: {
      main: blueGrey[700],
      light: blueGrey[50],
    },
    success: {
      main: green[500],
      light: green[100]
    }
  },
  typography: {
    fontFamily: 'Raleway'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
