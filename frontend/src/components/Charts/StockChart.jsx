import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

import "./StockChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function StockChart() {
  const data = {
    labels: ["Available Stock", "Low Stock", "Out Of Stock"],

    datasets: [
      {
        data: [70, 20, 10],

        backgroundColor: ["#10B981", "#F59E0B", "#EF4444"],

        borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],

        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="stock-chart">
      <h2>Stock Status</h2>

      <Doughnut data={data} />
    </div>
  );
}

export default StockChart;
