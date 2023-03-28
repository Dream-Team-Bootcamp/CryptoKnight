import React from 'react';
import './App.css';
import CryptoTicker from './components/CryptoTicker';
import BackgroundAnimation from './components/BackgroundAnimation';
import Frank from './components/Frank';
import CryptoChart from "./components/CryptoChart";



function App() {
  return (
    <React.Fragment>
       <BackgroundAnimation />
       <Frank />
      <CryptoTicker />
      <CryptoChart />
    </React.Fragment>
  );
}
export default App;
