import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Line chart data
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
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Fraud Reported',
      },
    },
  },
};

// Bar chart data
const barData = {
  labels: ['Investments', 'E-commerce', 'Fake Friend', 'Job', 'Phishing'],
  datasets: [
    {
      label: 'Top Frauds This Month',
      data: [120, 150, 90, 80, 130, 110, 95],
      backgroundColor: ['#4A90E2', '#7ED321', '#FF9900', '#E0E0E0', '#FF7F50'],
    },
  ],
};

const barOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'No. of Incidents',
      },
    },
  },
};

function Dashboard() {
  return (
    <div className="container mx-auto p-4 flex">
      <div className="flex-1 mr-4">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold mb-4 ml-12 text-primary">Dashboard</h1>
        </div>

        <div className="mt-2 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="card bg-background shadow-xl col-span-2 lg:col-span-1">
            <div className="card-body">
              <h2 className="card-title text-primary">Recent Trends</h2>
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>

          <div className="card bg-background shadow-xl col-span-2 lg:col-span-1">
            <div className="card-body">
              <h2 className="card-title text-primary font-medium">Top Frauds This Month</h2>
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-secondary ml-12">As of now, there have been <span className="font-bold text-warning">1,234</span> people scammed this month.</p>
          <p className="text-secondary mt-2 ml-12">Total amount scammed: <span className="font-bold text-warning">$56,789</span>.</p>
        </div>
      </div>

      <div className="w-1/4 ml-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2 text-primary">
            <Link to="/family">Family Members</Link>
          </h2>
          <div className="avatar-group -space-x-4 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12 rounded-full bg-cover bg-center bg-[url('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg')]"></div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full bg-cover bg-center bg-[url('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg')]"></div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full bg-cover bg-center bg-[url('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg')]"></div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full bg-cover bg-center bg-[url('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg')]"></div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full bg-cover bg-center bg-[url('https://img.icons8.com/ios-filled/50/000000/plus.png')]"></div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-secondary">Scam Attempts Passed: 2</p>
            <p className="text-warning">Scam Attempts Failed: 1</p>
            <p className="text-warning">Scam Attempts Almost Failed: 1</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 text-primary">Educational Resources</h2>
          <ul>
            <li className="mb-2"><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-accent">YouTube Videos</a></li>
            <li className="mb-2"><a href="https://www.example.com/articles" target="_blank" rel="noopener noreferrer" className="text-accent">Articles</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
