import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

const AddSavingsModal = ({ open, handleClose }) => {
  const [savingName, setSavingName] = useState("");
  const [achieveDate, setAchieveDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleSave = () => {
    console.log({ savingName, achieveDate, amount });
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Add New Saving Goal
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Saving Name"
          value={savingName}
          onChange={(e) => setSavingName(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Date to be Achieved"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={achieveDate}
          onChange={(e) => setAchieveDate(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default AddSavingsModal;
