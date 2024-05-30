// File: components/LineChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Financial Fraud Trends',
      data: [65, 59, 80, 81, 56, 55, 40, 45, 70, 60, 50, 75],
      fill: true,
      backgroundColor: 'rgba(74, 144, 226, 0.2)',
      borderColor: '#4A90E2',
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const lineOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      title: {
        display: true,
        text: 'Fraud Reported',
      },
    },
  },
};

function LineChart() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Trend</h3>
      <Line data={lineData} options={lineOptions} />
    </div>
  );
}

export default LineChart;
