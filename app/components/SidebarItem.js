'use client';

const SidebarItem = ({ icon, label, isSidebarOpen }) => {
  return (
    <li className="flex items-center p-2">
      <span className="ml-2 p-2">{icon}</span>
      <span
        className={`ml-2 text-sm font-medium transition-opacity duration-00 ease-in-out ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ visibility: isSidebarOpen ? 'visible' : 'hidden' }}
      >
        {label}
      </span>
    </li>
  );
};

export default SidebarItem;
