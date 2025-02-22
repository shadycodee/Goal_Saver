import React from 'react'
import { TextField, Button } from '@mui/material';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div>
     <h1>What is your savings budget?</h1>
     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     <Button>Save</Button>

     <div className='short-term-div'>
        <h2>Short Term Savings</h2>
        <Button>Add</Button>
     </div>
     <div className='medium-term-div'>
      <h2>Medium Term Savings</h2>
      <Button>Add</Button>
     </div>
     <div className='long-term-div'>
      <h2>Long Term Savings</h2>
      <Button>Add</Button>
     </div>
    </div>
  )
}

export default Dashboard

