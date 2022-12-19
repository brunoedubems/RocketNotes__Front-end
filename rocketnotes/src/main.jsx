import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import{  ThemeProvider } from 'styled-components'; 
import { AuthProvider } from  './hooks/auth'

import { Routes } from './routes';

import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode >
    <ThemeProvider theme={ theme }>
     <GlobalStyles />
        <AuthProvider>
            <Routes />
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
