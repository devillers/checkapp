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
      className={`bg-gray-100 min-h-screen rounded-l-[30px] p-4 shadow-gray-900 shadow-right-to-left`}
      style={{
        marginLeft: isSidebarOpen ? '200px' : '68px', // Ensure content respects the sidebar's width
        transition: 'margin-left 0.5s ease-in-out', // Smooth animation
      }}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-6 items-center">
            <h1
              className="text-2xl font-bold "
              style={{ fontFamily: 'Raleway, cursive' }}
            >
              my inventory
            </h1>

            <div className="relative">
              <p className="text-[11px] rounded-full px-2 py-1 border-gray-500 border-[1px]  bg-white text-gray-500  ">
                {' '}
                active link
              </p>
              <p className="absolute full rounded-full h-4 w-4 -top-2 -right-1 bg-red-500 text-white text-[10px] flex justify-center items-center">
                1
              </p>
            </div>

            <div className="relative">
              <p className="text-[11px] rounded-full px-2 py-1 border-gray-500 border-[1px]  bg-white text-gray-500  ">
                {' '}
                search
              </p>
            </div>

            <div className="relative">
              <p className="text-[11px] rounded-full px-2 py-1 border-red-500 border-[1px]  bg-white text-red-500  ">
                {' '}
                log out
              </p>
            </div>
            <div className="relative">
              <p className="text-[11px] rounded-full px-2 py-1 border-green-500 border-[1px]  bg-white text-green-500  ">
                {' '}
                signup
              </p>
            </div>
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
