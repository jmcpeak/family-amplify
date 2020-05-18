import React from 'react';
import {
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';

const InputProps = {
  startAdornment: (
    <InputAdornment position="start">
      <LockOutlined />
    </InputAdornment>
  ),
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  textField: {
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const placeholder = largeScreen
    ? 'What city is the Family Reunion usually held in?'
    : null;

  return (
    <Grid
      alignContent="center"
      alignItems="center"
      className={classes.root}
      container
      justify="center"
      spacing={5}
    >
      <Grid item>
        <img alt="logo" src="/static/clover.png" />
      </Grid>
      {!largeScreen && (
        <Grid item>
          <Grid alignItems="center" container direction="column">
            <Grid item>
              <Typography variant="h4">What city is the Family</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4">Reunion usually held in?</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      <Grid className={classes.textField} item>
        <form autoComplete="off" noValidate>
          <TextField
            autoFocus
            fullWidth
            id="city"
            InputProps={InputProps}
            label="Security Question"
            name="city"
            placeholder={placeholder}
            required
            size="medium"
            variant="outlined"
          />
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
