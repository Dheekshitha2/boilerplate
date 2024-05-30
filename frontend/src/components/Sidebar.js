import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, setSidebarOpen }) {
  return (
    <div className={`fixed inset-0 flex z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex-shrink-0 w-80 bg-base-100 p-4 shadow-lg overflow-y-auto">
        <ul className="menu p-4 text-base-content">
          <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setSidebarOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link></li>
        </ul>
      </div>
      <div className="flex-grow" onClick={() => setSidebarOpen(false)}></div>
    </div>
  );
}

export default Sidebar;
