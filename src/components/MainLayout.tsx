
import React from 'react';
import BottomNavigation from './BottomNavigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 pb-24 max-w-lg">
        {children}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
