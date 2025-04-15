
import React, { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import PageHeader from '@/components/PageHeader';
import AnalyzeForm from '@/components/AnalyzeForm';
import AnalysisResult from '@/components/AnalysisResult';
import { Rocket } from 'lucide-react';

const Index = () => {
  const [analysisData, setAnalysisData] = useState<{ 
    projectName: string;
    website: string;
    aboutData: string; 
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = (data: { projectName: string; website: string }) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setAnalysisData({
        projectName: data.projectName,
        website: data.website,
        aboutData: `${data.projectName} is an innovative blockchain project focused on creating scalable decentralized solutions. The project aims to solve fundamental problems in the blockchain space including scalability, security, and interoperability.`
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-4">
        <PageHeader 
          title="Scryptex AI Analysis" 
          subtitle="Analyze any crypto project in seconds"
        />
        <Rocket className="text-scryptex-primary h-6 w-6" />
      </div>
      
      <AnalyzeForm onAnalyze={handleAnalyze} />
      
      {(analysisData || isLoading) && (
        <AnalysisResult 
          projectName={analysisData?.projectName || ''}
          initialData={analysisData?.aboutData}
          isLoading={isLoading}
        />
      )}
    </MainLayout>
  );
};

export default Index;
