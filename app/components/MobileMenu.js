'use client';

import React, { useState } from 'react';
import { FaBars, FaHome, FaFolder, FaCog, FaHeart } from 'react-icons/fa';

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="md:hidden fixed top-0 left-0 z-40 w-full bg-gray-800 text-white">
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-lg font-bold">My App</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-700 p-4 shadow-lg">
          <ul className="space-y-4">
            {mainMenuItems.map((item, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <span className="p-2">{item.icon}</span>
                  <span className="ml-3">{item.label}</span>
                </div>
                {/* Submenu */}
                {item.submenu && (
                  <ul className="ml-6 mt-2 space-y-2">
                    {item.submenu.map((subitem, subindex) => (
                      <li
                        key={subindex}
                        className="flex items-center space-x-2 text-[12px] text-gray-300"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${subitem.color}`}
                        ></div>
                        <span className="text-[10px] uppercase tracking-wide">
                          {subitem.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
