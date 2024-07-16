import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function PieChartDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Presupuesto", "Gastos"],
      datasets: [
        {
          data: [540, 325],
          backgroundColor: [
            documentStyle.getPropertyValue("--green-500"),
            documentStyle.getPropertyValue("--red-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--green-400"),
            documentStyle.getPropertyValue("--red-400"),
          ],
        },
      ],
    };
    const options = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
        title: {
          display: true,
          text: "Presupuesto vs Gastos del Mes",
          color: "#333",
          font: {
            size: 16,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div
      className="card flex justify-content-center"
      style={{ width: "100%", height: "100%", paddingBottom: "1rem" }}>
      <Chart
        type="pie"
        data={chartData}
        options={chartOptions}
        className="w-full md:w-30rem"
      />
    </div>
  );
}
