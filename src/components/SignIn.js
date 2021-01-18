import React, { useState } from 'react';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as UrlLink } from "react-router-dom"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Frodo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [stateName, setName] = useState({username: ""});
  const [statePassword, setPassword] = useState({password: ""});
  const name = stateName.username;
  const pw = statePassword.password;

  const usernameHandler = (inputName) => {
    setName({username: inputName});
  }

  const passwordHandler = (inputPassword) => {
    setPassword({password: inputPassword});
  }

  function postDataToServer() {

    axios.post('http://localhost:8080/login', {
      username: name,
      password: pw
    }, {
      headers: { "Content-Type": "application/json"}
    })
    .then(res => storeDataInLocalStorage(res.data.token))
    .catch(err => console.log(err))
  };

  const storeDataInLocalStorage = (data) => {
    localStorage.setItem("token", data)
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={inputName => usernameHandler(inputName.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Passwort"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={inputPassword => passwordHandler(inputPassword.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Logindaten speichern"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => postDataToServer()}
          >
            Einloggen
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Passwort vergessen?
              </Link>
            </Grid>
            <Grid item>
              <UrlLink to="/sign-up/" style={{textDecoration: "none"}}>
                Du hast keinen Account? Registrieren
              </UrlLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>

      <UrlLink to="/" style={{color: "red", textDecoration: "none"}}>Home</UrlLink>
    </Container>
  );
}