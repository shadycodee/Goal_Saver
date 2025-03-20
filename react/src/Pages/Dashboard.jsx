import { useState } from "react";
import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, LinearProgress } from "@mui/material";

export default function Dashboard() {
  const [budget, setBudget] = useState(0);
  const [savings, setSavings] = useState({ short: 0, medium: 0, long: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState("");
  const [amount, setAmount] = useState("");
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const openModal = (term) => {
    setSelectedTerm(term);
    setModalOpen(true);
  };

  const addSavings = () => {
    setSavings({ ...savings, [selectedTerm]: savings[selectedTerm] + Number(amount) });
    setModalOpen(false);
    setAmount("");
  };

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Typography variant="subtitle2" color="textSecondary">Date: {formattedDate}</Typography>
      
      <div style={{ marginBottom: "16px" }}>
        <Typography variant="body1">Set Your Savings Budget</Typography>
        <TextField
          type="number"
          fullWidth
          variant="outlined"
          placeholder="Enter amount"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      
      <div style={{ display: "grid", gap: "16px" }}>
        {['short', 'medium', 'long'].map((term) => (
          <Card key={term} style={{ padding: "16px" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>{term.charAt(0).toUpperCase() + term.slice(1)} Term Savings</Typography>
              <LinearProgress variant="determinate" value={(savings[term] / budget) * 100} />
              <Button variant="contained" color="primary" style={{ marginTop: "8px" }} onClick={() => openModal(term)}>
                Add Savings
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Add Savings to {selectedTerm} Term</DialogTitle>
        <DialogContent>
          <TextField
            type="number"
            fullWidth
            variant="outlined"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginTop: "16px" }}
          />
          <Button variant="contained" color="primary" style={{ marginTop: "16px" }} onClick={addSavings}>
            Confirm
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}