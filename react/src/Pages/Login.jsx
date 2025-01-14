import React from 'react'
import {TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <>
    <div>
     <h1>Sign in</h1>
        <h5>Dont have account? <Link to="/">Sign Up</Link></h5>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained" >Sign in</Button>
    </div>
    </>
  )
}

export default Login