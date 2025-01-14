import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const Dashboard = lazy(() => import('./Pages/Dashboard'))
const LandingPage = lazy(() => import('./Pages/LandingPage'))
const Login = lazy(() => import('./Pages/Login'))

function App() {


  return (
    <>
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  )
}

export default App
