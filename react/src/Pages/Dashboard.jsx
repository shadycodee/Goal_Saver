import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [savingsBudget, setSavingsBudget] = useState(0);
  const [budgetInput, setBudgetInput] = useState("");
  const [savings, setSavings] = useState({
    shortTerm: [],
    mediumTerm: [],
    longTerm: [],
  });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const today = format(new Date(), "EEEE, MMMM d, yyyy");

  const handleBudgetSubmit = () => {
    setSavingsBudget(budgetInput);
    setBudgetInput("");
  };

  const addSaving = (type, description, targetDate, amount) => {
    setSavings((prev) => ({
      ...prev,
      [type]: [...prev[type], { description, targetDate, amount }],
    }));
  };
  
  const handleLogout = () => {
    // Perform logout action
    console.log("User logged out");
    navigate('/login');
  };
  

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Date Display */}
      <h1 className="text-2xl font-bold text-center">{today}</h1>
      <div className="flex justify-end">
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-red-500 hover:text-white mt-2">Logout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm logout</DialogTitle>
          
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <DialogDescription>Are you sure you want to log out? You will need to sign in again to access your account.</DialogDescription>
        </div>
        <DialogFooter>
          <Button variant="destructive" onClick={handleLogout}>Logout</Button>
          <Button type="submit" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
      

      {/* Set Savings Budget */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Savings Budget: ₱{savingsBudget}</h2>
            <Button onClick={handleBudgetSubmit} className="hover:bg-[#25b34b] hover:text-white" variant="outline">Set Budget</Button>
          </div>
          <Input 
            placeholder="Enter savings budget" 
            value={budgetInput} 
            onChange={(e) => setBudgetInput(e.target.value)} 
          />
        </CardContent>
      </Card>
      
      <div className="flex flex-wrap justify-between gap-4">
        {/* Savings Sections */}
      {["shortTerm", "mediumTerm", "longTerm"].map((type) => (
        <Card key={type}>
          <CardContent className="p-4 space-y-4">
            <h2 className="text-lg font-semibold capitalize">{type.replace("Term", "-Term Savings")}</h2>
            <div className="space-y-2">
              {savings[type].map((item, index) => (
                <div key={index} className="p-2 border rounded-lg">
                  <p><strong>Description:</strong> {item.description}</p>
                  <p><strong>Target Date:</strong> {item.targetDate}</p>
                  <p><strong>Budget:</strong> ₱{item.amount}</p>
                </div>
              ))}
            </div>
            <AddSavingForm onSave={(desc, date, amount) => addSaving(type, desc, date, amount)} />
          </CardContent>
        </Card>
      ))}
      </div>
      
    </div>
  );
}

function AddSavingForm({ onSave }) {
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (description && targetDate && amount) {
      onSave(description, targetDate, amount);
      setDescription("");
      setTargetDate("");
      setAmount("");
    }
  };

  return (
    <div className="space-y-2">
      <Label>Description</Label>
      <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
      <Label>Target Date</Label>
      <Input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} />
      <Label>Budget</Label>
      <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter budget" />
      <Button className="hover:bg-[#25b34b] hover:text-white mt-2" onClick={handleSubmit} variant="outline">Add Savings</Button>
    </div>
  );
}
