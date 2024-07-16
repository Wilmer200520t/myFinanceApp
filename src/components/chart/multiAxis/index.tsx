import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function MultiAxisDemo() {
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
      labels: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Setiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      datasets: [
        {
          label: "Gastos",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--red-500"),
          yAxisID: "y",
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10, 0, 0, 0, 0, 0],
        },
        {
          label: "Ingresos",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          yAxisID: "y1",
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90, 0, 0, 0, 0, 0],
        },
        {
          label: "Presupuestos",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--green-500"),
          yAxisID: "y1",
          tension: 0.4,
          data: [27, 49, 44, 25, 90, 37, 25, 0, 0, 0, 0, 0],
        },
      ],
    };
    const options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
}
