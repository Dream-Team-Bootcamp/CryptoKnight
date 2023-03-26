import React from "react";
import "./App.css";
import CryptoTicker from "./components/CryptoTicker";
import ChatBot from "./components/ChatBot";
import CryptoDisplay from "./components/CryptoDisplay";
import ParticlesBg from "./components/BackgroundAnimation";
import CryptoChart from "./components/CryptoChart";

function App() {
  return (
    <div className="App">
      
      <ParticlesBg />
      <CryptoTicker />
      <CryptoDisplay />
      <ChatBot />
      <CryptoChart />
    </div>
  );
}

export default App;
