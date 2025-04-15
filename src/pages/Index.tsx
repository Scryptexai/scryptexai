
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

  const handleAnalyze = (data: { projectName: string; website: string; aboutData: string }) => {
    setIsLoading(true);
    // Simulating a small delay for UX purposes
    setTimeout(() => {
      setAnalysisData(data);
      setIsLoading(false);
    }, 300);
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-between mb-6">
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
          website={analysisData?.website || ''}
          initialData={analysisData?.aboutData}
          isLoading={isLoading}
        />
      )}
    </MainLayout>
  );
};

export default Index;
