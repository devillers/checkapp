//app/page.js
'use client';

import { useContext, useEffect } from 'react';
import { SidebarContext } from './context/SidebarContext';

export default function HomePage() {
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    // Lock or unlock scrolling based on the sidebar state
    if (!isSidebarOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }

    // Cleanup on unmount
    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [isSidebarOpen]);

  return (
    <div
      className={`bg-gray-100 min-h-screen rounded-l-[30px] p-4 shadow-gray-950 shadow-right-to-left`}
      style={{
        marginLeft: isSidebarOpen ? '200px' : '68px', // Ensure content respects the sidebar's width
        transition: 'margin-left 0.5s ease-in-out', // Smooth animation
      }}
    >
      <div className="p-4 flex flex-col h-full">
        <h1
          className="text-2xl font-bold "
          style={{ fontFamily: 'Raleway, cursive' }}
        >
          my inventory
        </h1>
        <div className="flex justify-end">
          <div className="flex flex-row justify-around w-52">
            <p className="rounded-full border-[1px] border-red-500 min-w-20 text-center text-red-500  tracking-wide text-[12px] py-1 px-2">
              login
            </p>
            <p className="rounded-full border-[1px] border-green-500 min-w-20 text-center text-green-500  tracking-wide text-[12px] py-1 px-2">
              signup
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 flex-grow">
          <div className="h-64 bg-slate-50 w-full rounded-2xl drop-shadow-2xl"></div>
          <div className="h-64 bg-slate-50 w-full rounded-2xl drop-shadow-2xl"></div>
          <div className="h-64 bg-slate-50 w-full rounded-2xl drop-shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
}
