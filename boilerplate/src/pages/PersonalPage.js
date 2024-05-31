import React from 'react';
import { Link } from 'react-router-dom';

function PersonalPage({ memberName }) {
  return (
    <div className="container mx-auto p-4 flex flex-col space-y-4">
      <p className="text-5xl font-bold text-primary mb-4 ml-4">Hi, {memberName}</p>
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        {/* Monthly Insights */}
        <div className="text-left font-bold text-2xl mb-12 align-top text-primary">Monthly Insights</div>
        <div className="flex justify-center mt-4">
          <p className="text-center">Fraud activities are at</p>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-center font-bold text-warning text-6xl">78%</p>
        </div>
        <div className="flex justify-center text-warning mt-2 mb-8">
          <p className="text-center font-semibold">ALL TIME HIGH</p>
        </div>
        <div className="text-left flex justify-between">
          <span>Scammed victims:</span> <span className="font-bold text-secondary">1,234</span>
        </div>
        <div className="text-left flex justify-between mb-8">
          <span>Scammed amount:</span> <span className="font-bold text-secondary">$56,789</span>
        </div>

        {/* Latest Info */}
        <div className="bg-white p-6 shadow-lg rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-primary">Latest Info</h3>
          <div className="carousel carousel-center p-4 space-x-4 bg-gray-100 rounded-xl shadow-inner flex flex-grow">
            {/* Carousel items */}
            {/* Include carousel items from previous example here */}
          </div>
        </div>

        {/* Courses */}
        <div className="bg-white p-6 shadow-lg rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-primary">Courses</h3>
          <div className="flex space-x-4">
            {/* Course cards */}
            {/* Include course cards from previous example here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalPage;
