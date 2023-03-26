import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js/auto";

ChartJS.register(CategoryScale, LinearScale, PointElement);

const CryptoChart = () => {
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

  const options = {
    plugins: {
      legend: true
    },
    scales: {
      y: {}
    }
  }

  return (
    <div className="CryptoChart">
      <h1>Crypto Chart</h1>
      <div style={{ width: "600px", height: "300px" }}>
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default CryptoChart;