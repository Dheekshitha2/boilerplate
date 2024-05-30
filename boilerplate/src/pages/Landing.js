// File: src/pages/Landing.js

import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

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

function Landing() {
  return (
    <div className="container mx-auto p-4 flex flex-col space-y-4">
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        {/* Content Columns */}
        <div className="flex flex-grow">
          {/* First Column */}
          <div className="flex-1 mr-8">
            <p className="text-left font-bold text-xl mb-12 align-top text-primary">Monthly Insights</p>
            <div className="text-left flex justify-between">
              <span>Scammed victims:</span> <span className="font-bold text-secondary">1,234</span>
            </div>
            <div className="text-left flex justify-between">
              <span>Scammed amount:</span> <span className="font-bold text-secondary">$56,789</span>
            </div>
          </div>
          {/* Second Column - Enclosing Container for Inner Cards */}
          <div className="flex-2 flex w-3/4">
            <div className="bg-gray-100 p-4 shadow-inner rounded-xl flex-grow flex w-2/3">
              {/* Inner Card 1 - Line Chart for Financial Fraud Trends */}
              <div className="bg-white p-4 shadow rounded-xl mr-2 flex-1 w-1/2">
                <LineChart />
              </div>
              {/* Inner Card 2 - Bar Chart for Top Frauds This Month */}
              <div className="bg-white p-4 shadow rounded-xl ml-2 flex-1 w-1/2">
                <BarChart />
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Button */}
        <div className="flex mt-4">
          <Link to="/dashboard" className="w-full text-center shadow bg-gray-100 hover:bg-gray-300 font-bold py-3 px-4 rounded-xl">
            View Dashboard
          </Link>
        </div>
      </div>
      {/* Second Container - Horizontal Scroll for Family Members */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <h3 className="text-xl font-bold mb-4 text-primary">Family Members</h3>
        <div className="flex overflow-x-auto space-x-4">
          <div className="bg-gray-100 p-4 shadow-inner rounded-xl flex-grow flex w-2/3">

            <div className="bg-white p-4 shadow rounded-xl mr-2 flex-1 w-1/4">
              <div className="mt-4 mask mask-squircle w-24 h-24 mx-auto bg-cover bg-center bg-[url('https://img.daisyui.com/tailwind-css-component-profile-2@56w.png')]"></div>
              <p className="text-center mt-4 font-semibold text-secondary">Member 1</p>
              <div className="flex justify-center">
                <p className="badge badge-warning mt-2 mb-4">High Risk</p> 
              </div>
              <p className="text-center">Attempts: 3</p>
              <p className="text-center mb-4">Pass Rate: 70%</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl mr-2 flex-1 w-1/4">
              <div className="mt-4 mask mask-squircle w-24 h-24 mx-auto bg-cover bg-center bg-[url('https://img.daisyui.com/tailwind-css-component-profile-3@56w.png')]"></div>
              <p className="text-center mt-4 font-semibold text-secondary">Member 2</p>
              <div className="flex justify-center">
                <p className="badge badge-success mt-2 mb-4">Low Risk</p>
              </div>
              <p className="text-center">Attempts: 1</p>
              <p className="text-center mb-4">Pass Rate: 90%</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl mr-2 flex-1 w-1/4">
              <div className="mt-4 mask mask-squircle w-24 h-24 mx-auto bg-cover bg-center bg-[url('https://img.daisyui.com/tailwind-css-component-profile-4@56w.png')]"></div>
              <p className="text-center mt-4 font-semibold text-secondary">Member 3</p>
              <div className="flex justify-center">
                <p className="badge badge-neutral mt-2 mb-4">Medium Risk</p>
              </div>
              <p className="text-center">Attempts: 2</p>
              <p className="text-center mb-4">Pass Rate: 80%</p>
            </div>
            <div className="bg-white p-4 shadow rounded-xl mr-2 flex-1 w-1/4">
              <div className="mt-4 mask mask-squircle w-24 h-24 mx-auto bg-cover bg-center bg-[url('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg')]"></div>
              <p className="text-center mt-4 font-semibold text-secondary">Member 4</p>
              <div className="flex justify-center">
                <p className="badge badge-warning mt-2 mb-4">High Risk</p>
              </div>
              <p className="text-center">Attempts: 5</p>
              <p className="text-center mb-4">Pass Rate: 50%</p>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <Link to="/family" className="w-full text-center shadow bg-gray-100 hover:bg-gray-300 font-bold py-3 px-4 rounded-xl">
            View Family
          </Link>
        </div>
      </div>

      {/* Third Container - Articles and YouTube Videos */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <h3 className="text-xl font-bold mb-4 text-primary">Latest Info</h3>
        <ul>
          <li className="mb-2"><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-accent">YouTube Videos</a></li>
          <li className="mb-2"><a href="https://www.example.com/articles" target="_blank" rel="noopener noreferrer" className="text-accent">Articles</a></li>
        </ul>
        <div className="flex mt-4">
          <Link to="/news" className="w-full text-center shadow bg-gray-100 hover:bg-gray-300 font-bold py-3 px-4 rounded-xl">
            View News
          </Link>
        </div>
      </div>
      
      {/* Fourth Container - Courses */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <h3 className="text-xl font-bold mb-4 text-primary">Courses</h3>
        <div className="flex space-x-4">
          <div className="card w-1/3 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Course 1" /></figure>
            <div className="card-body">
              <h2 className="card-title">Course 1</h2>
              <p>Description of Course 1.</p>
              <div className="card-actions justify-end">
                <Link to="/courses/1" className="btn btn-primary">View Course</Link>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Course 2" /></figure>
            <div className="card-body">
              <h2 className="card-title">Course 2</h2>
              <p>Description of Course 2.</p>
              <div className="card-actions justify-end">
                <Link to="/courses/2" className="btn btn-primary">View Course</Link>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Course 3" /></figure>
            <div className="card-body">
              <h2 className="card-title">Course 3</h2>
              <p>Description of Course 3.</p>
              <div className="card-actions justify-end">
                <Link to="/courses/3" className="btn btn-primary">View Course</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <Link to="/courses" className="w-full text-center shadow bg-gray-100 hover:bg-gray-300 font-bold py-3 px-4 rounded-xl">
            View All Courses
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Landing;
