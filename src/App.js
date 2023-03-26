import React from 'react';
import './App.css';
import CryptoTicker from './components/CryptoTicker';
import ParticlesBg from './components/BackgroundAnimation';
import Frank from './components/Frank';

function App() {
  return (
    <React.Fragment>
       <ParticlesBg />
       <Frank />
      <CryptoTicker />
    </React.Fragment>
  );
}

export default App;
