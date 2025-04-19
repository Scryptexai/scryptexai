
import React, { useState } from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TwitterPage = () => {
  const [twitterConnected, setTwitterConnected] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedTweet, setGeneratedTweet] = useState("");

  const handleConnectTwitter = () => {
    setLoading(true);
    
    // Simulate Twitter connection
    setTimeout(() => {
      setLoading(false);
      setTwitterConnected(true);
    }, 1000);
  };

  const handleGenerateTweet = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setGeneratedTweet(
        `Just discovered ${projectName} (@${twitterHandle}) and I'm impressed by their innovative approach to scaling blockchain technology! Their solution could be a game-changer for DeFi applications. #Web3 #Blockchain #DeFi`
      );
    }, 1500);
  };

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-2xl font-bold">Twitter Agent</h1>
      
      {!twitterConnected ? (
        <Card>
          <CardHeader>
            <CardTitle>Connect Twitter</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Connect your Twitter account to start automating your Web3 engagement
            </p>
            <Button onClick={handleConnectTwitter} disabled={loading}>
              {loading ? "Connecting..." : "Connect Twitter"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generate Tweet</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGenerateTweet} className="space-y-4">
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
                  <label htmlFor="twitterHandle" className="mb-1 block text-sm font-medium">
                    Twitter Handle
                  </label>
                  <Input
                    id="twitterHandle"
                    value={twitterHandle}
                    onChange={(e) => setTwitterHandle(e.target.value)}
                    placeholder="e.g. ethereum (without @)"
                    required
                  />
                </div>
                
                <Button type="submit" disabled={loading}>
                  {loading ? "Generating..." : "Generate Tweet"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {generatedTweet && (
            <Card>
              <CardHeader>
                <CardTitle>Generated Tweet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={generatedTweet}
                  onChange={(e) => setGeneratedTweet(e.target.value)}
                  className="min-h-[120px]"
                />
                
                <div className="flex flex-wrap gap-2">
                  <Button>Tweet Now</Button>
                  <Button variant="outline">Schedule</Button>
                  <Button variant="outline">Save Draft</Button>
                </div>
                
                <div className="rounded bg-primary/10 p-2 text-sm">
                  <p>Engagement Plan:</p>
                  <ul className="ml-4 list-disc">
                    <li>Like 3 related tweets</li>
                    <li>Retweet 1 post from project</li>
                    <li>Follow mentioned accounts</li>
                  </ul>
                  <p className="mt-1 font-medium text-primary">Earn +15 XP</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default TwitterPage;
