import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Login.scss';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

  

const Login = () => {
  const classes = useStyles();
  return(
    <div className={styles.component}>
      <h2>Login</h2>  
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Login"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
      </form>
      <Button component={Link} to={'/'}>Login</Button>
    </div>
  );
};

export default Login;