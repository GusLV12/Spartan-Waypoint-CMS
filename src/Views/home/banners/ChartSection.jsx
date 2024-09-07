import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useRef, useEffect, useState } from "react";

// Registramos los componentes de Chart.js que vamos a utilizar
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ChartSection = () => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgb(0, 25, 56)"); // Color base
      gradient.addColorStop(1, "rgb(95, 116, 137)"); // Color más claro
      setGradient(gradient);
    }
  }, []);

  const data = {
    labels: [
      "Llamadas",
      "SMS",
      "Whatsapp",
      "Llamadas Efectivas",
      "Whatsapp Respondidos",
    ],
    datasets: [
      {
        label: "Ventas Mensuales",
        data: [70, 80, 40, 60, 40],
        backgroundColor: gradient ? gradient : "rgb(121, 186, 242)",
        borderColor: "#ffff",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(0, 25, 55)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "Ventas Mensuales",
        font: {
          size: 24,
        },
        color: "#fff",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || ""; // Obtén el nombre de la barra (por ejemplo, "Llamadas", "SMS", etc.)
            const value = context.raw; // Obtén el valor de la barra
            return `${label}: ${value}`; // Muestra el nombre y el valor en el tooltip
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          offset: false,
        },
        ticks: {
          font: {
            size: 20,
            weight: "bold",
          },
          color: "#fff",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 18,
            weight: "bold",
          },
          color: "#fff",
        },
      },
    },
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};
