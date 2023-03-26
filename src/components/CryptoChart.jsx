import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
} from "chart.js/auto";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const CryptoChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        labels: "Sales of the Week",
        data: [3, 6, 9, 9, 12, 12, 1],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 3,
        max: 20,
      },
    },
  };

  return (
    <div className="CryptoChart">
      <h1>Crypto Chart</h1>
      <div style={{ width: "600px", height: "300px" }}>
        <Line data = {data} options = {options}/>
      </div>
    </div>
  );
};

export default CryptoChart;
