
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Gift, Settings } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-soft z-50">
      <div className="flex items-center justify-around h-16">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center w-1/3 h-full ${
            isActive('/') ? 'text-scryptex-primary' : 'text-gray-500'
          }`}
        >
          <Search className="h-5 w-5" />
          <span className="text-xs mt-1">Analyze</span>
        </Link>
        
        <Link 
          to="/airdrops" 
          className={`flex flex-col items-center justify-center w-1/3 h-full ${
            isActive('/airdrops') ? 'text-scryptex-primary' : 'text-gray-500'
          }`}
        >
          <Gift className="h-5 w-5" />
          <span className="text-xs mt-1">Airdrops</span>
        </Link>
        
        <Link 
          to="/settings" 
          className={`flex flex-col items-center justify-center w-1/3 h-full ${
            isActive('/settings') ? 'text-scryptex-primary' : 'text-gray-500'
          }`}
        >
          <Settings className="h-5 w-5" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
