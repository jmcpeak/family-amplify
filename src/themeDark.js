import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#c7e5c8',
        light: '#fbfffc',
        dark: '#97b498',
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
