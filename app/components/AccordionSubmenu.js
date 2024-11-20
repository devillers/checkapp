import React from 'react';

const AccordionSubmenu = ({ isOpen, items, isSidebarOpen }) => {
  return (
    <ul
      className={`transition-all duration-300 ease-in-out ${
        isOpen && isSidebarOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
      }`}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="ml-8 mt-2 text-sm text-gray-400 hover:text-white"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default AccordionSubmenu;
