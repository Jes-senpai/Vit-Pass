import React,{useState} from 'react';
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
import Axios from 'axios';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href=".?Home">
        VitPass
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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function View() {
  const classes = useStyles();
const [regid,setregid] = useState("");
let x=0;
const handleview = () => {
    x=0;
    if(x==0){
    Axios.post("http://localhost:3001/api/viewstatusyes",{regid : regid})
    .then((response)=>{
        if(response.data.length>0){
            alert("Approved!!");
            
        }

    })
}
if(x==0){
    Axios.post("http://localhost:3001/api/viewstatusno",{regid : regid})
    .then((response) => {
        if(response.data.length>0){
            alert("Rejected!!");
            
        }
       
    })
}
if(x==0){
    Axios.post("http://localhost:3001/api/viewstatuspending",{regid : regid})
    .then((response) => {
        if(response.data.length>0){
            alert("Request Pending....");
            
        }
       
    })
}
}
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
          View Status
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="regid"
            label="Registration No."
            name="regid"
            type="varchar"
            onChange={(e) =>{
              setregid(e.target.value);
            }}
           
          />
         
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleview}
          >
           View Status
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