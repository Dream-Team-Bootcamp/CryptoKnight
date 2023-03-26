import React, { useState, useEffect } from 'react';
import { Chart } from 'chart.js/auto';


const CryptoChart = () => {
  const [coin, setCoin] = useState('bitcoin');
  const [timeInterval, setTimeInterval] = useState('1d');
  const [chartData, setChartData] = useState({});

  const handleCoinChange = (event) => {
    setCoin(event.target.value);
  };

  const handleTimeIntervalChange = (event) => {
    setTimeInterval(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${timeInterval}`);
      const data = await response.json();
      const dates = data.prices.map((price) => new Date(price[0]).toLocaleDateString());
      const prices = data.prices.map((price) => price[1]);
      setChartData({
        labels: dates,
        datasets: [
          {
            label: `${coin.toUpperCase()} Price`,
            data: prices,
            fill: true,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'red',
            tension: 0.1,
          },
        ],
      });
    };
    fetchData();
  }, [coin, timeInterval]);

  useEffect(() => {
    const chart = new Chart('crypto-chart', {
      type: 'line',
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
        <option value="litecoin">Litecoin</option>
        {/* add more coins as needed */}
      </select>
      
      <canvas id="crypto-chart"></canvas>
    </div>
  );
};

export default CryptoChart;

