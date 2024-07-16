import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function DoughnutChartDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Ingresos", "Gastos"],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--red-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--red-400"),
          ],
        },
      ],
    };
    const options = {
      aspectRatio: 1,
      cutout: "60%",
      plugins: {
        title: {
          display: true,
          text: "Ingresos vs Gastos del Mes",
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
      style={{ width: "100%", height: "100%", paddingBottom: "2.5rem" }}>
      <Chart
        type="doughnut"
        data={chartData}
        options={chartOptions}
        className="w-full md:w-30rem"
      />
    </div>
  );
}
