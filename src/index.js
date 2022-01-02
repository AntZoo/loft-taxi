import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme } from 'loft-taxi-mui-theme'; // Импортируем саму тему
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppProvider } from './helpers/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
