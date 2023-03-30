import React from "react";
import "./App.css";
import CryptoTicker from "./components/CryptoTicker";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Frank from "./components/Frank";
import NavBar from "./components/Navbar";
import CryptoChart from "./components/CryptoChart";
import Contact from "./components/Placeholder3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';
import Home from "./components/Home";
// import NewsFrame from "./components/NewsFrame";

const chains = [arbitrum, mainnet, polygon];
const projectId = process.env.REACT_APP_PROJECT_ID

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  return (
    <Router>
      <WagmiConfig client={wagmiClient}>
        <BackgroundAnimation />
        <CryptoTicker />
        <NavBar projectId={projectId} ethereumClient={ethereumClient} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/news" element={<NewsFrame />} /> */}
          <Route path="/prices" element={<CryptoChart />} />
          {/* <Route path="/team" element={<Team />} /> */}
        </Routes>
        <Frank />
      </WagmiConfig>
    </Router>
  );
}

export default App;
