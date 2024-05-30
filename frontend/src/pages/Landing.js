import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip } from 'chart.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip);

const lineData = {
  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: false,
      data: [40, 45, 70, 60, 50, 75],
      fill: true,
      backgroundColor: 'rgba(74, 144, 226, 0.2)',
      borderColor: '#4A90E2',
      tension: 0.4,
      pointRadius: 0,
    },
  ],
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

const barData = {
  labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [45, 70, 60, 50, 75],
      backgroundColor: ['#4A90E2', '#7ED321', '#FF9900', '#E0E0E0', '#FF7F50'],
    },
  ],
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

function Landing() {
  const percentage = 70;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col">
        {/* Content Columns */}
        <div className="flex flex-grow">
          {/* First Column */}
          <div className="flex-1 p-4">
            <p className="text-left mt-4 font-semibold text-4xl mb-12">This Month:</p>
            <div className="text-left mt-1 flex justify-between">
              <span className="text-3xl">Scammed victims:</span> <span className="font-bold text-3xl">1,234</span>
            </div>
            <div className="text-left mt-1 flex justify-between">
              <span className="text-3xl">Scammed amount:</span> <span className="font-bold text-3xl">$56,789</span>
            </div>
          </div>

          {/* Second Column - Enclosing Container for Inner Cards */}
          <div className="flex-2 p-4 flex w-2/3">
            <div className="bg-gray-100 p-4 shadow-inner rounded-lg flex-grow flex w-2/3">
              {/* Inner Card 1 - Line Chart for Financial Fraud Trends */}
              <div className="bg-white p-4 shadow rounded-lg mr-2 flex-1 w-1/2">
                <h3 className="text-lg font-semibold">Financial Fraud Trends</h3>
                <Line data={lineData} options={lineData.options} />
              </div>
              {/* Inner Card 2 - Bar Chart for Top Frauds This Month */}
              <div className="bg-white p-4 shadow rounded-lg ml-2 flex-1 w-1/2">
                <h3 className="text-lg font-semibold">Top Frauds This Month</h3>
                <Bar data={barData} options={barData.options} />
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Button */}
        <div className="flex">
          <Link to="/dashboard" className="w-full text-center bg-gray-100 hover:bg-gray-300 font-bold py-3 px-4 rounded">
            View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
