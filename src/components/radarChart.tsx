"use client";

import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ["Força", "Velocidade", "Resistência", "Agilidade", "Precisão"],
    datasets: [
      {
        label: "Máquinas",
        data: [80, 90, 75, 85, 95],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-[400px] h-[auto]">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
