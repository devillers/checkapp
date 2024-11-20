//APP/PAGE.JS

'use client';

import { useContext } from 'react';
import { SidebarContext } from './context/SidebarContext';

export default function HomePage() {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div
      className={`bg-gray-100 h-screen rounded-l-[30px] p-4 shadow-gray-950 shadow-3xl`}
      style={{
        marginLeft: isSidebarOpen ? '200px' : '68px', // Ensure content respects the sidebar's width
        transition: 'margin-left 0.5s ease-in-out', // Smooth animation
      }}
    >
      <div className="p-4 ">
        <h1 className="text-2xl font-bold">Welcome to My App</h1>
        <p>This is your main content area. It will adjust dynamically!</p>
        <div className="flex flex-col md:flex-row gap-4 justify-between mt-10">
          <div className="h-64 bg-slate-50 w-full rounded-2xl drop-shadow-2xl"></div>
          <div className="h-64 bg-slate-50 w-full rounded-2xl drop-shadow-2xl"></div>
          <div className="h-64 bg-slate-50 w-full rounded-2xl drop-shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
}
