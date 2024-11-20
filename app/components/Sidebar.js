'use client';

import React, { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import SidebarItem from './SidebarItem';
import { FaHome, FaUsers, FaCog, FaChartBar } from 'react-icons/fa';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  const menuItems = [
    { icon: <FaHome size={20} />, label: 'Dashboard' },
    { icon: <FaUsers size={20} />, label: 'Users' },
    { icon: <FaChartBar size={20} />, label: 'Reports' },
    { icon: <FaCog size={20} />, label: 'Settings' },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full text-white z-30 transition-width duration-500 ease-in-out`}
      style={{
        width: isSidebarOpen ? '200px' : '68px', // Dynamic width
      }}
    >
      <div
        onClick={toggleSidebar}
        className="p-4 cursor-pointer text-center"
      >
        ☰
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <SidebarItem key={index} icon={item.icon} label={item.label} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
