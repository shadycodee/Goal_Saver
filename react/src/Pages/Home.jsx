import React from "react";
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Navbar from "@/components/ui/navbar";


const savingsData = [
  { type: "Short term", timeFrame: "Less than a year", example: "Buying a new phone, saving for a trip, paying off a small debt", risk: "Low", strategy: "Budget and save in a bank account or a money jar" },
  { type: "Medium term", timeFrame: "One to five years", example: "Buying a car, saving for college, starting a business", risk: "Moderate", strategy: "Plan and invest in a mutual fund or a certificate of deposit" },
  { type: "Long term", timeFrame: "More than five years", example: "Buying a house, saving for retirement, leaving a legacy", risk: "High", strategy: "Project and invest in a stock or a bond" },
];

const Home = () => {
  return (
    <>
    <Navbar/>
    <Container maxWidth="md" className="py-8">
      <Typography variant="h4" gutterBottom textAlign="center">
      Plan Your Savings Smartly 
      </Typography>
      <Typography variant="body1" paragraph>
      
      Inspired by Khan Academy’s approach to goal-based savings, this app helps you allocate funds into short-term, medium-term, and long-term savings.{" "}
        <a href="https://www.khanacademy.org/college-careers-more/financial-literacy/xa6995ea67a8e9fdd:financial-goals/xa6995ea67a8e9fdd:short-medium-and-long-term-goals/a/short-medium-and-long-term-goals" target="_blank" rel="noopener noreferrer">Read more</a>.
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Goal Type</strong></TableCell>
              <TableCell><strong>Time Frame</strong></TableCell>
              <TableCell><strong>Example</strong></TableCell>
              <TableCell><strong>Risk Level</strong></TableCell>
              <TableCell><strong>Strategy</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {savingsData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.timeFrame}</TableCell>
                <TableCell>{row.example}</TableCell>
                <TableCell>{row.risk}</TableCell>
                <TableCell>{row.strategy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </>
  );
};

export default Home;
