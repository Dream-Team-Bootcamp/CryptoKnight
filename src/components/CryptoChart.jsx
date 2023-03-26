import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js/auto";
import { useEffect } from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement);

const CryptoChart = () => {
  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({
      labels: ["Mon","Tue", "Wed", "Thur","Fri","Sat","Sun"],
      datasets: [
        {
          label: "Crypto Historical Chart",
          data: [1, 4, 18, 4, 1, 24, 20],
          backgroundColor: "ivory",
          borderWidth: 4
        }
      ]
    })
  }
  useEffect(() => {
    chart()
  }, [])
  return (
    <div className="CryptoChart">
      <h1>Crypto Chart</h1>
      <div style={{ width: "600px", height: "300px" }}>
        <Line data={chartData}></Line>
      </div>
    </div>
  );
};

export default CryptoChart;