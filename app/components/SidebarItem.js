'use client';
import React, { useState } from 'react';
import AccordionSubmenu from './AccordionSubmenu';

const SidebarItem = ({ icon, label, isSidebarOpen, submenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = (e) => {
    e.stopPropagation(); // Prevent event bubbling to the sidebar
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative group">
      {/* Main Menu Item */}
      <div
        className={`flex items-center ${
          isSidebarOpen ? 'justify-start' : 'justify-center'
        } p-4 hover:bg-gray-800 cursor-pointer`}
        onClick={submenu ? toggleSubmenu : undefined}
      >
        {icon}
        {isSidebarOpen && (
          <span className="ml-4 uppercase text-sm font-medium">{label}</span>
        )}
      </div>

      {/* Submenu Items */}
      {submenu && (
        <AccordionSubmenu
          isOpen={isOpen}
          items={submenu}
          isSidebarOpen={isSidebarOpen}
        />
      )}
    </li>
  );
};

export default SidebarItem;
