import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onMenuClick }) {
  return (
    <div className="navbar bg-primary text-white">
      <div className="flex-none">
        <button className="btn btn-ghost text-white" onClick={onMenuClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-white">FraudZero</Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 16.042A10 10 0 0110 0a10 10 0 019.542 16.042 1 1 0 01-.874.958 11.978 11.978 0 00-17.336 0 1 1 0 01-.874-.958zM4 18a8 8 0 0112 0H4z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
