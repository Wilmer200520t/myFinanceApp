import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

interface VerticalBarDemoProps {
  data: {
    ingresos: number[];
    gastos: number[];
    presupuestos: number[];
  };
}

export default function VerticalBarDemo({ data }: VerticalBarDemoProps) {
  const { ingresos, gastos, presupuestos } = data;
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
          data: ingresos,
        },
        {
          label: "Gastos",
          backgroundColor: documentStyle.getPropertyValue("--red-500"),
          borderColor: documentStyle.getPropertyValue("--red-500"),
          data: gastos,
        },
        {
          label: "Presupuestos",
          backgroundColor: documentStyle.getPropertyValue("--green-500"),
          borderColor: documentStyle.getPropertyValue("--green-500"),
          data: presupuestos,
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
  }, [ingresos, gastos, presupuestos]);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
