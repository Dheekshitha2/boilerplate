import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Family from './pages/Family'; 
import ScamPage from './pages/ScamPage';
import Courses from './pages/Courses';
import PersonalPage from './pages/PersonalPage'; 

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar onMenuClick={handleMenuClick} />
        <Sidebar isOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className={`flex-grow p-4 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-50' : 'opacity-100'}`}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/family" element={<Family />} />
            <Route path="/scam-page" />
            <Route path="/courses" element={<Courses />} />
            <Route path="/personal/:memberId" element={<PersonalPage />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
