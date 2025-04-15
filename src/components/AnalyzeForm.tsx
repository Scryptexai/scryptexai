
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const AnalyzeForm = ({ onAnalyze }: { onAnalyze: (data: { projectName: string; website: string }) => void }) => {
  const [projectName, setProjectName] = useState('');
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName.trim() || !website.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onAnalyze({ projectName, website });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="w-full shadow-soft rounded-2xl">
      <CardContent className="p-4 md:p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="projectName" className="block text-sm font-medium mb-1 text-scryptex-text">
              Project Name
            </label>
            <Input
              id="projectName"
              type="text"
              placeholder="e.g. Ethereum, Solana, Aptos"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="rounded-xl"
              required
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium mb-1 text-scryptex-text">
              Project Website
            </label>
            <Input
              id="website"
              type="url"
              placeholder="e.g. https://ethereum.org"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="rounded-xl"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-scryptex-primary hover:bg-scryptex-primary/90 rounded-xl h-12 text-white shadow-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                <span>Analyzing...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                <span>Analyze Now</span>
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AnalyzeForm;
