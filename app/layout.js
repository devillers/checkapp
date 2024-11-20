import './globals.css';
import { SidebarProvider } from './context/SidebarContext';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <div className="flex min-h-screen bg-pink-500">
            {/* Sidebar: Fixed Width */}
            <Sidebar />
            {/* Main Content */}
            <main className="flex-1 relative">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
