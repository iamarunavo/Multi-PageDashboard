import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };
  
  return (
    <div className="h-screen overflow-hidden bg-background-primary flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuClick={handleMenuClick} />
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-background-secondary">
          <div className="h-full p-6 lg:p-8">
            <div className="max-w-7xl mx-auto h-full">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
