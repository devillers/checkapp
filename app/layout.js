//APP/LAYOUT.JS

import './globals.css';

import { SidebarProvider } from './context/SidebarContext';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className="text-gray-800"
        style={{ fontFamily: 'Raleway, cursive' }}
      >
        <SidebarProvider>
          <div className="flex h-screen bg-[#d9dadd] ">
            {/* Sidebar: Fixed Width */}
            <Sidebar />
            {/* Main Content */}
            <main className="flex-1 relative ">{children}</main>
          </div>
        </SidebarProvider>
      </body>
     
    </html>
  );
}
