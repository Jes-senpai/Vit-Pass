import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LocalPostOfficeRoundedIcon from '@material-ui/icons/LocalPostOfficeRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

export default function SignIn()  {
  const classes = useStyles();
  const [name,setname] = useState("");
  const [regid,setregid] = useState("");
  const [mentorid,setmentorid] = useState("");
  const [todate,settodate] = useState("");
  const [fromdate,setfromdate] = useState("");
  const [reason,setreason] = useState("");

  let history = useHistory();
const submitleave = () => {

Axios.post("http://localhost:3001/api/leaverequest",{regid : regid, name : name, mentorid : mentorid, fromdate : fromdate,
   todate : todate, reason : reason})
   .then((response) => {
    if(response){
      alert(" Leave Requested!!");
    }
    
  }
  )
  history.push("./Student");
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalPostOfficeRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Leave Application
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            onChange={(e) =>{
              setname(e.target.value);
            }}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="regid"
            label="Reg-No."
            type="text"
            id="regid"
            onChange={(e) =>{
              setregid(e.target.value);
            }}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="mentorid"
            label="Mentor Id"
            type="text"
            id="mentorid"
            onChange={(e) =>{
              setmentorid(e.target.value);
            }}
          />
          <TextField
    id="fromdate"
    label="From"
    type="date"
    defaultValue="2017-05-24"
    fullWidth
    onChange={(e) =>{
              setfromdate(e.target.value);
            }}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}/>
    <TextField
    id="todate"
    label="To"
    type="date"
    fullWidth
    onChange={(e) =>{
              settodate(e.target.value);
            }}
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="reason"
            label="Reason"
            type="text"
            id="reason"
            onChange={(e) =>{
              setreason(e.target.value);
            }}
          />
         
          <Button
            type="submit"
            fullWidth
            onClick={submitleave}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Request
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