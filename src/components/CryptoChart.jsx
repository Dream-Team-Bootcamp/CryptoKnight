// import '.CryptoChart.css';
import React from "react";
import { Chart as ChartJS, LineElement } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);
const CryptoChart = () => {
  return (
    <div className="CryptoChart">
      <Line data={data} />
      

    </div>
  );

}
export default CryptoChart;
