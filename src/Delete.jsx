import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import BlockRoundedIcon from '@material-ui/icons/BlockRounded';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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

export default function Delete() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
     <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
          <Button href="/Home" color="inherit" variant="filled" className={classes.link}>
            VitPass
          </Button>
          </Typography>
          <Button href="/Login" color="inherit" variant="filled" className={classes.link}>
            Logout

          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BlockRoundedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Withrawal
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="application"
            label="Application No."
            name="application"
            type="number"
            autoFocus
          />
         
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Withdraw Request
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
             
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
             
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      
    </Container>
  );
}