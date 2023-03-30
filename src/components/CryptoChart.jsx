// import dependencies and css
import React, { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import moment from "moment";
import '../assets/styles/CryptoChart.css';

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
  );// add coin logo data later to imporove visual bg
  const data = await response.json();
  const labels = data.prices.map((price) => {
    const date = moment(price[0]);
    const label = date.format("DD MMM YY HH:mm");
    if (timeInterval === "1d" || timeInterval === "60" || timeInterval === "15") {
      return `${label}`
    } else {
      return label;
    }
  });
  
      const prices = data.prices.map((price) => price[1]);
      setChartData({
        labels: labels,
        fontColor: "red",
        datasets: [
          {
            label: `${coin.toUpperCase()} Price`,
            data: prices,
            fill: true,
            backgroundColor: "black",
            borderColor: "green",
            tension: 0.4,
            // pointBorderWidth: 1,
            // pointBorderRadius: 1
            // bacgroundImage: `url(${coinLogoUrl})` // will imporve in future for better visual clarity 
          
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
      <label className="coin-select-label" htmlFor="coin-select">Select a coin:</label>
      <select className="coin-select" id="coin-select" value={coin} onChange={handleCoinChange}>
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
        <option value="bitcoin-cash-abc">Bitcoin Cash ABC</option>
        <option value="aave">Aave</option>
        <option value="crypto-com-coin">Crypto.com Coin</option>
        <option value="compound">Compound</option>
        <option value="ftx-token">FTX Token</option>
        <option value="holo">Holo</option>
        <option value="kusama">Kusama</option>
        <option value="zcash">Zcash</option>
        <option value="nano">Nano</option>
        <option value="dash">Dash</option>
        <option value="omisego">OMG Network</option>
        <option value="qtum">Qtum</option>
        <option value="digibyte">DigiByte</option>
        <option value="icon">ICON</option>
        <option value="ontology">Ontology</option>
        <option value="basic-attention-token">Basic Attention Token</option>
        <option value="vechain">VeChain</option>
        <option value="sushi">SushiSwap</option>
        <option value="thorchain">THORChain</option>
        <option value="serum">Serum</option>
        <option value="loopring">Loopring</option>
        <option value="bitcoin-sv">Bitcoin SV</option>
        <option value="terrausd">TerraUSD</option>
        <option value="harmony">Harmony</option>
        <option value="pancakeswap">PancakeSwap</option>
        <option value="zcoin">Zcoin</option>
        <option value="icon">ICON</option>
        <option value="compound-governance-token">Compound Governance Token</option>
        <option value="0x">0x</option>
        <option value="celo">Celo</option>
        <option value="rune">THORChain</option>
        <option value="kusama">Kusama</option>
        <option value="bancor">Bancor</option>
        <option value="harmony">Harmony</option>
        <option value="aeternity">Aeternity</option>
        <option value="dent">Dent</option>
        <option value="iotex">IoTeX</option>
        <option value="status">Status</option>
        <option value="iostoken">IOST</option>
        <option value="verge">Verge</option>
        <option value="nervos-network">Nervos Network</option>
        <option value="ankr">Ankr</option>
        <option value="zcoin">Zcoin</option>
        <option value="qtum">Qtum</option>
        <option value="waves">Waves</option>
        <option value="renbtc">renBTC</option>
      </select>

      {/* Time interval select input */}
      <label className="time-int-label" htmlFor="time-interval-select">Select a time interval:</label>
      <select className="time-int-select"
        id="time-interval-select"
        value={timeInterval}
        onChange={handleTimeIntervalChange}
      >
        {/* List of time interval options */}
        <option value="15">15 minute</option>
        <option value="60">1 hour</option>
        <option value="1">1 day</option>
        <option value="7">1 week</option>
        <option value="30">1 month</option>
        <option value="90">90 days</option>
        <option value="365">1 year</option>
        <option value="max">All time</option>
      </select>
      {/* Chart render to canvas. check canvas styling,,,*/}
      <canvas id="crypto-chart" style={{ fontSize: 3, backgroundColor: "transparent", padding: '1%', borderRadius: '5px', maxWidth: '100%'}}></canvas>
    </div>
  );
};

export default CryptoChart;
