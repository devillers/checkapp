'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaHome, FaFolder, FaEnvelope, FaCog } from 'react-icons/fa';

export default function UserLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const userMenuItems = [
    { icon: <FaHome size={20} />, label: 'Dashboard' },
    {
      icon: <FaFolder size={20} />,
      label: 'My Files',
      submenu: ['Documents', 'Images', 'Videos'],
    },
    { icon: <FaEnvelope size={20} />, label: 'Messages' },
    { icon: <FaCog size={20} />, label: 'Settings' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        menuItems={userMenuItems}
      />
      <main
        className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-16'
        }`}
      >
        {children}
      </main>
    </div>
  );
}
