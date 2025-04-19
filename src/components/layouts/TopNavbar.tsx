
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Bell,
  User
} from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="border-b bg-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="text-sm md:text-base">Welcome, <span className="font-medium">Guest</span></div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <span className="text-sm text-muted-foreground">Credits: </span>
            <span className="font-medium">20</span>
          </div>
          
          <Button asChild variant="outline" size="sm">
            <Link to="/dashboard/credits">Buy Credit</Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
