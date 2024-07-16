import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function VerticalBarDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5"],
      datasets: [
        {
          label: "Ingresos",

          backgroundColor: documentStyle.getPropertyValue("--blue-500"),
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          data: [65, 59, 80, 81, 56],
        },
        {
          label: "Gastos",
          backgroundColor: documentStyle.getPropertyValue("--red-500"),
          borderColor: documentStyle.getPropertyValue("--red-500"),
          data: [28, 48, 40, 19, 86],
        },
        {
          label: "Presupuestos",
          backgroundColor: documentStyle.getPropertyValue("--green-500"),
          borderColor: documentStyle.getPropertyValue("--green-500"),
          data: [25, 60, 70, 80, 50],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
