
import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockAirdrops = [
  {
    id: 1,
    name: "Layer Zero",
    chain: "Multiple",
    tasks: ["Bridge", "Swap", "Stake"],
    status: "Active",
    potential: "High",
  },
  {
    id: 2,
    name: "Arbitrum",
    chain: "Ethereum",
    tasks: ["Bridge", "Mint NFT"],
    status: "Active",
    potential: "Medium",
  },
  {
    id: 3,
    name: "zkSync",
    chain: "Ethereum",
    tasks: ["Bridge", "Swap"],
    status: "Active",
    potential: "High",
  },
  {
    id: 4,
    name: "Starknet",
    chain: "Ethereum",
    tasks: ["Bridge", "Mint NFT", "Stake"],
    status: "Active",
    potential: "Medium",
  },
];

const AirdropsPage = () => {
  const [savedProjects, setSavedProjects] = useState<number[]>([]);
  
  const toggleSave = (id: number) => {
    setSavedProjects((prev) => 
      prev.includes(id) 
        ? prev.filter((projectId) => projectId !== id)
        : [...prev, id]
    );
  };

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-2xl font-bold">Airdrop Explorer</h1>
      
      <Tabs defaultValue="top">
        <TabsList className="mb-6">
          <TabsTrigger value="top">Top Airdrops</TabsTrigger>
          <TabsTrigger value="latest">Latest</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>
        
        <TabsContent value="top" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Top Projects</CardTitle>
                <Button size="sm">Add Project</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAirdrops.map((airdrop) => (
                  <div 
                    key={airdrop.id} 
                    className="flex items-center justify-between rounded-md border p-4"
                  >
                    <div>
                      <h3 className="font-medium">{airdrop.name}</h3>
                      <div className="mt-1 flex flex-wrap gap-2 text-xs">
                        <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-700">
                          {airdrop.chain}
                        </span>
                        {airdrop.tasks.map((task, i) => (
                          <span 
                            key={i} 
                            className="rounded bg-gray-100 px-2 py-0.5 text-gray-700"
                          >
                            {task}
                          </span>
                        ))}
                        <span className="rounded bg-green-100 px-2 py-0.5 text-green-700">
                          {airdrop.potential} Potential
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant={savedProjects.includes(airdrop.id) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleSave(airdrop.id)}
                      >
                        {savedProjects.includes(airdrop.id) ? "Saved" : "Save"}
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="latest">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">Latest airdrops will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="saved">
          <Card>
            <CardContent className="pt-6">
              {savedProjects.length > 0 ? (
                <div className="space-y-4">
                  {mockAirdrops
                    .filter((a) => savedProjects.includes(a.id))
                    .map((airdrop) => (
                      <div 
                        key={airdrop.id} 
                        className="flex items-center justify-between rounded-md border p-4"
                      >
                        <div>
                          <h3 className="font-medium">{airdrop.name}</h3>
                          <div className="mt-1 flex flex-wrap gap-2 text-xs">
                            <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-700">
                              {airdrop.chain}
                            </span>
                            {airdrop.tasks.map((task, i) => (
                              <span 
                                key={i} 
                                className="rounded bg-gray-100 px-2 py-0.5 text-gray-700"
                              >
                                {task}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline"
                          size="sm"
                          onClick={() => toggleSave(airdrop.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground">No saved projects yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default AirdropsPage;
