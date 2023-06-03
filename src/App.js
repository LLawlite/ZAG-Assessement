import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';
import Payment from './Components/Payment';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/details" element=<DetailsPage /> />
        <Route exact path="/payment" element=<Payment /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
