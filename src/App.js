import React from 'react';
import { CssBaseline, useMediaQuery } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Login from './components/Login';
import themeDark from './themeDark';
import themeLight from './themeLight';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={prefersDarkMode ? themeDark : themeLight}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
};

export default App;
