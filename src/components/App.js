import React from "react";
import "./App.css";
import CryptoTicker from "./components/CryptoTicker";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Frank from "./components/Frank";
import NavBar from "./components/Navbar";
import CryptoChart from "./components/CryptoChart";
import Knightly from "./components/Knightly";
import WordSoup from "./components/WordSoup";
import NewsFrame from "./components/NewsFrame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWeb3 from "./components/ConnectWeb3";



function App() {
  return (
    <Router>
      <BackgroundAnimation />
      <CryptoTicker />
     
      <NavBar ConnectWeb3Component={ConnectWeb3} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<CryptoChart />} />
        <Route path="/contact" element={
          <div>
            <Knightly />
            <WordSoup />
          </div>
        } />
      </Routes>
      <Frank />
    </Router>
  );
}

export default App;
