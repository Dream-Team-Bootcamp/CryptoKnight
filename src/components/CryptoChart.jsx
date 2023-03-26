import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js/auto";


ChartJS.register(CategoryScale, LinearScale, PointElement);

const CryptoChart = () => {
  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Crypto Historical Chart",
          data: [3, 4, 18, 4, 1, 24, 20],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)'
        ],
          borderWidth: 4
        }
      ]
    })
  }
  useEffect(() => {
    chart()
  }, [])
  return (
    <div className="CryptoChart" style={{ width: "600px", height: "300px" }}>
      <h1>Crypto Chart</h1>
      <Line data={chartData}/>
      
    </div>
  );
};


export default CryptoChart;