import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#388e3c',
        light: '#80e27e',
        dark: '#087f23',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f3e5f5',
        light: '#ffffff',
        dark: '#c0b3c2',
        contrastText: '#ffffff',
      },
    },
  })
);
