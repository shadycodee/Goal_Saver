import React from 'react'
import { TextField, Button, Paper, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function handleSignIn(){
        navigate('/dashboard');
    }
  return (
    <>
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={11} sm={8} md={6} lg={3}>
    <Paper elevation={0}  variant="outlined" style={{ padding: '2rem', border: '2px solid #053225' }}>
    <h1>Sign in</h1>
        <h5>Dont have an account? <Link to="/" style={{ textDecoration: 'none', color: '#053225' }}>Register</Link></h5>
        <TextField fullWidth id="outlined-basic" label="Username" variant="standard" color='#053225' />
        <TextField fullWidth id="outlined-basic" label="Password" variant="standard" color='#053225' />
        <Button fullWidth variant="contained" onClick={handleSignIn} style={{ marginTop: '1rem', backgroundColor: '#053225' }}>Sign in</Button>
    </Paper>
    </Grid>
        </Grid>
    

    
    </>
  )
}

export default Login