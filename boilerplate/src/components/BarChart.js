// File: components/BarChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

const barData = {
  labels: ['Investments', 'E-commerce', 'Fake Friend', 'Job', 'Phishing'],
  datasets: [
    {
      data: [45, 70, 60, 50, 75],
      backgroundColor: ['#4A90E2', '#7ED321', '#FF9900', '#E0E0E0', '#FF7F50'],
    },
  ],
};

const barOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
      }
    },
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      title: {
        display: true,
        text: 'No. of Incidents',
      },
    },
  }
};

function BarChart() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Top Frauds</h3>
      <Bar data={barData} options={barOptions} />
    </div>
  );
}

export default BarChart;
