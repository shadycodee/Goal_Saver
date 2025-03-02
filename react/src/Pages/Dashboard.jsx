import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import AddSavingsModal from "../AddSavingsModal";
import "../styles/Dashboard.css";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const currentDate = new Date()
    .toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();

  return (
    <Box className="dashboard-container">
      <Typography variant="h5" className="date-text">{currentDate}</Typography>
      <Box className="budget-section">
        <Typography variant="h4">Enter your savings budget</Typography>
        <TextField fullWidth label="Amount" variant="outlined" className="budget-input" />
        <Button variant="contained" className="save-btn">Save</Button>
      </Box>
      <Box className="savings-container">
        <Box className="savings-box short-term">
          <Typography variant="h6">Short Term Savings</Typography>
          <Button onClick={handleOpen} className="add-btn">Add</Button>
        </Box>
        <Box className="savings-box medium-term">
          <Typography variant="h6">Medium Term Savings</Typography>
          <Button onClick={handleOpen} className="add-btn">Add</Button>
        </Box>
        <Box className="savings-box long-term">
          <Typography variant="h6">Long Term Savings</Typography>
          <Button onClick={handleOpen} className="add-btn">Add</Button>
        </Box>
      </Box>
      <AddSavingsModal open={modalOpen} handleClose={handleClose} />
    </Box>
  );
}

export default Dashboard;
