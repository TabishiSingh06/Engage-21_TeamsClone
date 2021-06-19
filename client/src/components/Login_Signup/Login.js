import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Link, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Login.css';

const Login = () => {

  const paperStyle = {
    padding: "50px",
    height: "75vh",
    width: "500px",
    margin: "50px auto",
    borderRadius: "0"
  }
  const avatarStyle = {
    height: "4rem",
    width: "4rem",
    backgroundColor: "#4b53bc",
  }
  const textFieldStyle = {
    fontSize: "40px",
    marginTop: "20px",
  }


  const avatarIconStyle = {
    height: "2rem",
    width: "2rem",
    backgroundColor: "#4b53bc",
  }

  const signUpBtnStyles = {
    textTransform: 'none',
    fontSize: '1rem',
    fontFamily: 'Noto Sans JP',
    fontWeight: '100',
    borderRadius: '0',
    marginTop: "30px",
    padding: "15px",
  }


  return (
    <div className="container">
      <Grid className="mainDiv">
        <Paper elevation={5} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <AccountCircleIcon style={avatarIconStyle}>
              </AccountCircleIcon>
            </Avatar>

            <h1>Create your account</h1>
            <Button
            fullWidth
            style={signUpBtnStyles}
              variant="contained"              
              color="primary"
              startIcon={<FontAwesomeIcon icon={["fas", "coffee"]} />}
            >
              Sign up with Google 
      </Button>
            <Divider variant="middle" style={{ margin: "5px" }} />


            <TextField inputProps={{ style: { fontSize: 23 } }} InputLabelProps={{ style: { fontSize: 23 } }} style={textFieldStyle} id="standard-search" label="Username" type="username" required fullWidth />
            <TextField inputProps={{ style: { fontSize: 23 } }} InputLabelProps={{ style: { fontSize: 23 } }} style={textFieldStyle} id="standard-password-input" label="Password" type="password" required fullWidth />
            <TextField inputProps={{ style: { fontSize: 23 } }} InputLabelProps={{ style: { fontSize: 23 } }} style={textFieldStyle} id="standard-password-input" label="Confirm Password" type="password" required fullWidth />

          </Grid>
          <div className="formLinks">
            <Link style={{ fontSize: "20px" }} href="#" >
              Forgot Password?
             </Link>

            <Typography style={{ fontSize: "20px" }}>
              Do you have an account?
            <Link style={{ fontSize: "20px" }} href="#" >
                Log In.
             </Link>
            </Typography></div>

          <Grid align='center'>
            <Button style={signUpBtnStyles} size="large" variant="contained" color="primary" fullWidth >
              Sign Up
            </Button>
          </Grid>



        </Paper>
      </Grid>
    </div>

  )
};

export default Login;