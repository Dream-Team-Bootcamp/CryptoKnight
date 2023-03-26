import React, { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";

const CryptoChart = () => {
  const [coin, setCoin] = useState("bitcoin");
  const [timeInterval, setTimeInterval] = useState("1d");
  const [chartData, setChartData] = useState({});

  const handleCoinChange = (event) => {
    setCoin(event.target.value);
  };

  const handleTimeIntervalChange = (event) => {
    setTimeInterval(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${timeInterval}`
      );
      const data = await response.json();
      const dates = data.prices.map((price) =>
        new Date(price[0]).toLocaleDateString()
      );
      const prices = data.prices.map((price) => price[1]);
      setChartData({
        labels: dates,
        datasets: [
          {
            label: `${coin.toUpperCase()} Price`,
            data: prices,
            fill: true,
            backgroundColor: "rgb(75, 192, 192)",
            borderColor: "red",
            tension: 0.1,
          },
        ],
      });
    };
    fetchData();
  }, [coin, timeInterval]);

  useEffect(() => {
    const chart = new Chart("crypto-chart", {
      type: "line",
      data: chartData,
    });
    return () => {
      chart.destroy();
    };
  }, [chartData]);

  return (
    <div>
      <label htmlFor="coin-select">Select a coin:</label>
      <select id="coin-select" value={coin} onChange={handleCoinChange}>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="tether">Tether</option>
        <option value="binancecoin">Binance Coin</option>
        <option value="cardano">Cardano</option>
        <option value="dogecoin">Dogecoin</option>
        <option value="xrp">XRP</option>
        <option value="usd-coin">USD Coin</option>
        <option value="polkadot">Polkadot</option>
        <option value="bitcoin-cash">Bitcoin Cash</option>
        <option value="uniswap">Uniswap</option>
        <option value="litecoin">Litecoin</option>
        <option value="chainlink">Chainlink</option>
        <option value="solana">Solana</option>
        <option value="stellar">Stellar</option>
        <option value="matic-network">Polygon</option>
        <option value="ethereum-classic">Ethereum Classic</option>
        <option value="vechain">VeChain</option>
        <option value="binance-usd">Binance USD</option>
        <option value="filecoin">Filecoin</option>
        <option value="theta-token">Theta Token</option>
        <option value="tron">TRON</option>
        <option value="wrapped-bitcoin">Wrapped Bitcoin</option>
        <option value="terra-luna">Terra</option>
        <option value="neo">NEO</option>
        <option value="cosmos">Cosmos</option>
        <option value="internet-computer">Internet Computer</option>
        <option value="bitcoin-cash-sv">Bitcoin SV</option>
        <option value="algorand">Algorand</option>
        <option value="hedera-hashgraph">Hedera Hashgraph</option>
        <option value="maker">Maker</option>
        <option value="tezos">Tezos</option>
        <option value="filecoin">Filecoin</option>
        <option value="bitcoin-gold">Bitcoin Gold</option>
        <option value="quant">Quant</option>
        <option value="omisego">OMG Network</option>
        <option value="waves">Waves</option>
        <option value="zilliqa">Zilliqa</option>
        <option value="chiliz">Chiliz</option>
        <option value="siacoin">Siacoin</option>
        <option value="pancakeswap">PancakeSwap</option>
        <option value="decentraland">Decentraland</option>
        <option value="helium">Helium</option>
        <option value="dash">Dash</option>
        <option value="yearn-finance">Yearn.finance</option>
        <option value="elrond">Elrond</option>
        <option value="omg">OMG Network</option>
        <option value="ravencoin">Ravencoin</option>
        <option value="avalanche">Avalanche</option>
        <option value="nexo">NEXO</option>
        <option value="loopring">Loopring</option>
      </select>
      <label htmlFor="time-interval-select">Select a time interval:</label>
      <select
        id="time-interval-select"
        value={timeInterval}
        onChange={handleTimeIntervalChange}
      >
        <option value="15">15 minute</option>
        <option value="60">1 hour</option>
        <option value="1">1 day</option>
        <option value="7">1 week</option>
        <option value="30">1 month</option>
        <option value="90">90 days</option>
        <option value="365">1 year</option>
        <option value="max">All time</option>
      </select>

      <canvas id="crypto-chart" height="400px" width="400px"></canvas>
    </div>
  );
};

export default CryptoChart;
