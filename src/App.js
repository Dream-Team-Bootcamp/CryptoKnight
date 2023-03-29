import React from 'react';
import './App.css';
import CryptoTicker from './components/CryptoTicker';
import BackgroundAnimation from './components/BackgroundAnimation';
import Frank from './components/Frank';
// import CryptoChart from "./components/CryptoChart";
import NavBar from './components/Navbar';
// import Home from './components/Placeholder1';
import CryptoChart from './components/CryptoChart';
import Contact from './components/Placeholder3';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <BackgroundAnimation />
      <CryptoTicker />
      <NavBar />
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<CryptoChart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Frank />
      
      {/* <CryptoChart /> */}
    </Router>
  );
}

export default App;
