import React from 'react'
import { TextField, Button, Paper, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={11} sm={8} md={6} lg={3}>
        <Paper elevation={0} style={{ padding: '2rem', border: '2px solid #053225' }}>
          <h1 class="text-4xl font-bold my-3 sm:text-4xl sm:my-4">Create an account</h1>
          <h5>
            Already have an account? <Link to="/login" style={{ textDecoration: 'none', color: '#053225' }}>Sign in</Link>
          </h5>
          <TextField fullWidth margin="normal" id="name" label="Name" variant="standard" color='#053225' />
          <TextField fullWidth margin="normal" id="username" label="Username" variant="standard" color='#053225' />
          <TextField fullWidth margin="normal" id="password" label="Password" variant="standard" type="password" color='#053225' />
          <Button fullWidth variant="contained"  style={{ marginTop: '1rem', backgroundColor: '#053225' }}>
            Create account
          </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default LandingPage