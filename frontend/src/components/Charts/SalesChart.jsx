import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import "./SalesChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function SalesChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Monthly Sales",

        data: [5000, 8000, 6000, 12000, 15000, 18000],

        borderColor: "#2563EB",

        backgroundColor: "rgba(37,99,235,0.2)",

        pointBackgroundColor: "#2563EB",

        pointBorderColor: "#FFFFFF",

        pointRadius: 5,

        borderWidth: 3,

        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="chart-box">
      <h2>Sales Analytics</h2>

      <Line data={data} options={options} />
    </div>
  );
}

export default SalesChart;
