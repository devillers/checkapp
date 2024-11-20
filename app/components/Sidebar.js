//APP/COMPONENTS/SIDEBAR.JS

'use client';

import React, { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
//import SidebarItem from './SidebarItem';
import { FaHome, FaFolder, FaCog, FaHeart } from 'react-icons/fa';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  const mainMenuItems = [
    { icon: <FaHome size={17} />, label: 'dashboard' },
    {
      icon: <FaFolder size={17} />,
      label: 'fichiers',
      submenu: [
        { label: 'Marketing', color: 'bg-green-500' },
        { label: 'Design', color: 'bg-yellow-500' },
        { label: 'Webflow', color: 'bg-red-500' },
      ],
    },
    { icon: <FaHeart size={17} />, label: 'locataires' },
    { icon: <FaCog size={17} />, label: 'inventory' },
  ];

  return (
    <aside
      onClick={toggleSidebar}
      className={`fixed top-0 left-0 h-full text-white z-30 transition-width duration-500 ease-in-out `}
      style={{
        width: isSidebarOpen ? '200px' : '68px', // Dynamic width
      }}
    >
      <div
        className={`flex flex-col items-center py-6 transition-opacity duration-1000  ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          visibility: isSidebarOpen ? 'visible' : 'hidden', // Hide when closed
        }}
      >
        <div className="rounded-full bg-gray-600 w-16 h-16 mb-2 flex items-center justify-center ">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-full h-full shadow-lg"
          />
        </div>
        {isSidebarOpen && (
          <h3
            className="text-center text-[24px] tracking-wide text-white mt-4"
            style={{ fontFamily: 'Lobster Two, cursive' }}
          >
            la chandelle
          </h3>
        )}
      </div>

      <nav className="mt-6 px-4">
        <ul className="space-y-4">
          {mainMenuItems.map((item, index) => (
            <li key={index} className="group">
              <div className="flex items-center">
                <span className="p-2">{item.icon}</span>
                <span
                  className={`ml-3 transition-opacity duration-500 text-[12px] uppercase tracking-wide ${
                    isSidebarOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    visibility: isSidebarOpen ? 'visible' : 'hidden', // Smoothly hide labels
                  }}
                >
                  {item.label}
                </span>
              </div>
              {/* Submenu */}
              {item.submenu && isSidebarOpen && (
                <ul className="ml-10 mt-2 space-y-2">
                  {item.submenu.map((subitem, subindex) => (
                    <li
                      key={subindex}
                      className="flex items-center space-x-2 text-[12px] text-gray-100"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${subitem.color}`}
                      ></div>
                      <span className="text-[10px] uppercase tracking-widest">
                        {subitem.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
