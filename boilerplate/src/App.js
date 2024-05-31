import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import AddFamilyMemberForm from './pages/Family';
import ScamPage from './pages/ScamPage';

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
            <Route path="/family" element={<AddFamilyMemberForm />} />
            <Route path="/scam-page" element={<ScamPage />} />  {/* Updated this line */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
