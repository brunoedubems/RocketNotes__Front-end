import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import{  ThemeProvider } from 'styled-components'; 

import { SignIn } from './pages/SignIn';

import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode >
    <ThemeProvider theme={ theme }>
    <GlobalStyles />
   <SignIn />

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
