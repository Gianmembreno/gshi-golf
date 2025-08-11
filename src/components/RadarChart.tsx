'use client';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  data: {
    [key: string]: number;
  };
  title?: string;
}

export default function RadarChart({ data, title }: RadarChartProps) {
  const chartData = {
    labels: Object.keys(data).map(key => 
      key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
    ),
    datasets: [
      {
        label: title || 'Performance',
        data: Object.values(data),
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(34, 197, 94, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(34, 197, 94, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            size: window?.innerWidth < 768 ? 10 : 12,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          font: {
            size: window?.innerWidth < 768 ? 10 : 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: { label: string; parsed: { r: number } }) {
            return `${context.label}: ${context.parsed.r}/100`;
          }
        }
      }
    },
  };

  return (
    <div className="w-full h-64 sm:h-80">
      <Radar data={chartData} options={options} />
    </div>
  );
}