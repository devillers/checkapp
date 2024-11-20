//app/admin/layout

'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaHome, FaUsers, FaCog, FaChartBar } from 'react-icons/fa';

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const adminMenuItems = [
    { icon: <FaHome size={20} />, label: 'Dashboard' },
    {
      icon: <FaUsers size={20} />,
      label: 'Users',
      submenu: ['Admins', 'Editors', 'Subscribers'],
    },
    { icon: <FaChartBar size={20} />, label: 'Reports' },
    { icon: <FaCog size={20} />, label: 'Settings' },
  ];

  return (
    <div className="flex min-h-screen bg-pink-200">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        menuItems={adminMenuItems}
      />
      <main
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-16'
        }`}
      >
        {React.cloneElement(children, { isSidebarOpen })}
      </main>
    </div>
  );
}
