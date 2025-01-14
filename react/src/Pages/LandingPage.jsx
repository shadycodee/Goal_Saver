import React from 'react';
import {TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
function LandingPage() {

  return (
    <>
    <div>
        <h1>Create an account</h1>
        <h5>Already have an account? <Link to ="/login">Log in</Link></h5>

        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained" >Create account</Button>
    </div>
    
    </>

  )
}

export default LandingPage