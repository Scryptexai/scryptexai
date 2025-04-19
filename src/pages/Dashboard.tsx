
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import AgentCard from "@/components/dashboard/AgentCard";
import XpProgress from "@/components/dashboard/XpProgress";
import RecentActivity from "@/components/dashboard/RecentActivity";

const Dashboard = () => {
  const agents = [
    {
      title: "Analyze Agent",
      description: "Deep-dive into any crypto project",
      icon: "/media/analyze-icon.png",
      path: "/dashboard/analyze",
    },
    {
      title: "Farming Agent",
      description: "Automate onchain tasks and actions",
      icon: "/media/farming-icon.png",
      path: "/dashboard/farming",
    },
    {
      title: "Twitter Agent",
      description: "Engage with Web3 content automatically",
      icon: "/media/twitter-icon.png",
      path: "/dashboard/twitter",
    },
    {
      title: "Airdrop Explorer",
      description: "Find and track potential airdrops",
      icon: "/media/airdrop-icon.png",
      path: "/dashboard/airdrops",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {agents.map((agent) => (
          <AgentCard 
            key={agent.title} 
            title={agent.title} 
            description={agent.description} 
            icon={agent.icon} 
            path={agent.path} 
          />
        ))}
      </div>
      
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <XpProgress />
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
