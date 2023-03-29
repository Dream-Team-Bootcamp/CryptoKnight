import React from 'react';
import './App.css';
import CryptoTicker from './components/CryptoTicker';
import BackgroundAnimation from './components/BackgroundAnimation';
import Frank from './components/Frank';
import NavBar from './components/Navbar';
// import Home from './components/Placeholder1';
import CryptoChart from './components/CryptoChart';
// import NewsFrame from './components/NewsFrame';
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
        {/* <Route path="/News" element={<NewsFrame />} /> */}
      </Routes>
      <Frank />
      
      {/* <CryptoChart /> */}
    </Router>
  );
}

export default App;
