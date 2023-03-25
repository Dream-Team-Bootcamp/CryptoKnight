// import '../assets/styles/CryptoChart.css';
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "react-chartjs-2";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);
const CryptoChart = () => {
  // will be api call for chart data . test for now

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales of the Week",
        data: [3, 6, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.3
      },
    ],
  };

  // options for legend and scales
  const options = {
    plugins: {
      legend: true
    },
    scales: {
      y: {

      }
    }
  }

  return (
    <div className="CryptoChart">
      <h1>Crypto Chart</h1>
      <div style={
        {width: "600px", height: "300px"}
      }>
      <Line 
      data={data} 
      options={options}
      ></Line>
      </div>
    </div>
  );
};
export default CryptoChart;
