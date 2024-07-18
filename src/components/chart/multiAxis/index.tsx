import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
interface VerticalBarDemoProps {
  data: {
    ingresos: number[];
    gastos: number[];
    presupuestos: number[];
  };
}

export default function MultiAxisDemo({ data }: VerticalBarDemoProps) {
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
          data: gastos,
        },
        {
          label: "Ingresos",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          yAxisID: "y1",
          tension: 0.4,
          data: ingresos,
        },
        {
          label: "Presupuestos",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--green-500"),
          yAxisID: "y1",
          tension: 0.4,
          data: presupuestos,
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
  }, [ingresos, gastos, presupuestos]);

  return (
    <div className="card">
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
}
