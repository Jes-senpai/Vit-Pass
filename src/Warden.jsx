import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Link from '@material-ui/core/Link';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import Axios from 'axios';
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
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      link: {
        margin: theme.spacing(1, 1.5),
      },
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

export default function Parent() {
  const classes = useStyles();
  const [regid,setregid] = useState("");
  const [approval,setapproval] = useState("");
  const handlerequest = () => {
  
    Axios.post("http://localhost:3001/api/getwardenstudent", {regid: regid})
    .then((response) => {
  
  if(response.data.length>0){  
      if(approval=="Yes"){
        alert("Approved!!");
        Axios.post("http://localhost:3001/api/wardenapprove", {regid: regid})
        }
        else{
          alert("Disaaproved!!");
          Axios.post("http://localhost:3001/api/notapprove", {regid: regid})
        }
      }
      else{
        alert("No Request found!!");
      }
      })
  
   
  }
  return (<>
      <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            VitPass
          </Typography>
          <Button href="/Login4" color="inherit" variant="filled" className={classes.link}>
            Logout

          </Button>
        </Toolbar>
      </AppBar>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VerifiedUserRoundedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Verification
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="regid"
            label="Reg No."
            name="regid"
            type="varchar"
            onChange={(e) =>{
              setregid(e.target.value);
            }}
            autoFocus
          />
          <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          fullWidth
          onChange={(e) =>{
              setapproval(e.target.value);
            }}
          
          className={classes.selectEmpty}
        >
         
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
          
        </Select>
        <FormHelperText>Permission*</FormHelperText>
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handlerequest}
          >
            Submit
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
    </>
  );
}