import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, setSidebarOpen }) {
  return (
    <div className={`fixed inset-0 flex z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex-shrink-0 w-80 bg-secondary p-4 shadow-lg overflow-y-auto">
        <ul className="menu p-4 text-neutral">
          <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/dashboard" onClick={() => setSidebarOpen(false)}>Dashboard</Link></li>
          <li><Link to="/family" onClick={() => setSidebarOpen(false)}>Family</Link></li>
          <li><Link to="/settings" onClick={() => setSidebarOpen(false)}>Settings</Link></li>
        </ul>
      </div>
      <div className="flex-grow" onClick={() => setSidebarOpen(false)}></div>
    </div>
  );
}

export default Sidebar;
