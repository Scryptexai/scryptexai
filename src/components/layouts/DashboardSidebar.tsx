
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { 
  Activity,
  Settings,
  CreditCard,
  User,
  ArrowRight,
} from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: Activity,
    },
    {
      title: "Analyze Agent",
      path: "/dashboard/analyze",
      icon: Activity,
    },
    {
      title: "Farming Agent",
      path: "/dashboard/farming",
      icon: Activity,
    },
    {
      title: "Twitter Agent",
      path: "/dashboard/twitter",
      icon: Activity,
    },
    {
      title: "Airdrop Explorer",
      path: "/dashboard/airdrops",
      icon: Activity,
    },
    {
      title: "Saved Projects",
      path: "/dashboard/saved",
      icon: Activity,
    },
    {
      title: "Buy Credits",
      path: "/dashboard/credits",
      icon: CreditCard,
    },
    {
      title: "Referral",
      path: "/dashboard/referral",
      icon: ArrowRight,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center px-4 py-2">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">Scryptex</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton
                asChild
                isActive={isActive(item.path)}
                tooltip={item.title}
              >
                <Link to={item.path}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <User className="mr-2 h-5 w-5" />
            <span>Guest</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
