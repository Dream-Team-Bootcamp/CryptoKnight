import React, { useState, useEffect } from "react";
import Web3 from "web3";

function EthereumConnector() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function connect() {
      try {
        // Check if Web3 has been injected by the browser (Mist/MetaMask)
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          await window.ethereum.enable(); // Request account access
          setWeb3(web3);
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);
        }
        // If no injected web3 instance is detected, fall back to Ganache
        else {
          const provider = new Web3.providers.HttpProvider(
            "http://localhost:7545"
          );
          const web3 = new Web3(provider);
          setWeb3(web3);
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);
        }
      } catch (error) {
        console.error(error);
      }
    }

    connect();
  }, []);

  return (
    <div>
      <h1>Ethereum Connector</h1>
      {web3 ? (
        <p>Connected to {web3.currentProvider.host}</p>
      ) : (
        <p>No web3 provider detected.</p>
      )}
      {accounts.length > 0 ? (
        <p>Current account: {accounts[0]}</p>
      ) : (
        <p>No accounts found.</p>
      )}
    </div>
  );
}

export default EthereumConnector;
