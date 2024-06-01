import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, setSidebarOpen }) {
  return (
    <div className={`fixed inset-0 flex z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex-shrink-0 w-80 bg-gray-100 p-4 shadow-lg overflow-y-auto">
        {/* Header added here */}
        <div className="mb-4">
          <h1 className="mt-2 text-3xl font-bold text-center text-primary">FraudZero</h1>
        </div>
        <ul className="menu p-4 text-neutral text-lg">
          <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/dashboard" onClick={() => setSidebarOpen(false)}>Dashboard</Link></li>
          <li><Link to="/family" onClick={() => setSidebarOpen(false)}>Family</Link></li>
          <li><Link to="/scam-page" onClick={() => setSidebarOpen(false)}>Scam Page</Link></li>
        </ul>
        <div className="absolute bottom-4 left-4 w-72">
          <a href="https://form.gov.sg/63982e109841390011a59121" className="text-center font-semibold block w-full p-2 bg-red-500 text-white rounded-xl hover:bg-red-700 transition-colors duration-200" onClick={() => setSidebarOpen(false)} target="_blank" rel="noopener noreferrer">
            Report a Fraud
          </a>
        </div>
      </div>
      <div className="flex-grow" onClick={() => setSidebarOpen(false)}></div>
    </div>
  );
}

export default Sidebar;
