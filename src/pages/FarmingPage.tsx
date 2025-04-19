
import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const FarmingPage = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectWebsite, setProjectWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);

  const handleConnectWallet = () => {
    setLoading(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setLoading(false);
      setWalletConnected(true);
    }, 1000);
  };

  const handleDetectTasks = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setTasks([
        "Mint NFT Collection",
        "Add Liquidity to DEX",
        "Bridge tokens to Layer 2",
      ]);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-2xl font-bold">Farming Agent</h1>
      
      {!walletConnected ? (
        <Card>
          <CardHeader>
            <CardTitle>Connect Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Connect your wallet to start using the Farming Agent
            </p>
            <Button onClick={handleConnectWallet} disabled={loading}>
              {loading ? "Connecting..." : "Connect Wallet"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Task Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDetectTasks} className="space-y-4">
                <div>
                  <label htmlFor="projectName" className="mb-1 block text-sm font-medium">
                    Project Name
                  </label>
                  <Input
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g. Ethereum, Solana"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="projectWebsite" className="mb-1 block text-sm font-medium">
                    Project Website
                  </label>
                  <Input
                    id="projectWebsite"
                    value={projectWebsite}
                    onChange={(e) => setProjectWebsite(e.target.value)}
                    placeholder="e.g. https://ethereum.org"
                    required
                  />
                </div>
                
                <Button type="submit" disabled={loading}>
                  {loading ? "Detecting Tasks..." : "Detect Tasks"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {tasks.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Available Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tasks.map((task, index) => (
                    <div key={index} className="flex items-center justify-between rounded-md border p-3">
                      <span>{task}</span>
                      <Button size="sm">Run Task</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default FarmingPage;
