
import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const AnalyzePage = () => {
  const [projectName, setProjectName] = useState("");
  const [projectWebsite, setProjectWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Record<string, string>>({});

  const fetchers = [
    { id: "about", name: "About" },
    { id: "tokenomics", name: "Tokenomics" },
    { id: "roadmap", name: "Roadmap" },
  ];

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setResults({
        about: `${projectName} is a decentralized platform focused on providing innovative blockchain solutions. Founded in 2023, the project aims to revolutionize the way users interact with decentralized applications.`,
      });
    }, 1500);
  };

  const handleFetcher = (fetcherId: string) => {
    if (results.about) {
      setLoading(true);
      
      // Simulate API call for specific fetcher
      setTimeout(() => {
        setLoading(false);
        setResults((prev) => ({
          ...prev,
          [fetcherId]: fetcherId === "tokenomics"
            ? `${projectName} has a total supply of 1,000,000,000 tokens. 40% allocated to community, 20% to team (vested), 15% for development, 15% for marketing, and 10% for liquidity.`
            : `Q1 2024: Mainnet launch\nQ2 2024: Mobile app release\nQ3 2024: Integration with major DeFi protocols\nQ4 2024: Cross-chain functionality`,
        }));
      }, 1500);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-2xl font-bold">Analyze Agent</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Project Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAnalyze} className="space-y-4">
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
              {loading ? "Analyzing..." : "Start Analysis"}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {Object.keys(results).length > 0 && (
        <div className="mt-6 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Results</CardTitle>
                <div className="flex gap-2">
                  {fetchers.map((fetcher) => (
                    <Button 
                      key={fetcher.id}
                      variant={results[fetcher.id] ? "default" : "outline"}
                      size="sm"
                      disabled={loading || !results.about}
                      onClick={() => handleFetcher(fetcher.id)}
                    >
                      {fetcher.name}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(results).map(([key, value]) => (
                <div key={key}>
                  <h3 className="text-lg font-medium capitalize">{key}</h3>
                  <p className="whitespace-pre-line text-sm">{value}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AnalyzePage;
