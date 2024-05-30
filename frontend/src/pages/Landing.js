import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Our App</h1>
          <p className="py-6">This is a sample landing page for our hackathon project.</p>
          <Link to="/dashboard" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
