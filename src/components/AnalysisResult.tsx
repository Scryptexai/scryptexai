
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import FetcherButtons from './FetcherButtons';
import { fetchProjectData, FetcherType } from '@/services/api';
import { toast } from "sonner";
import { Button } from './ui/button';
import { Share } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AnalysisResultProps {
  projectName: string;
  website: string;
  initialData?: string;
  isLoading?: boolean;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ 
  projectName, 
  website,
  initialData, 
  isLoading = false 
}) => {
  const navigate = useNavigate();
  const [currentFetcher, setCurrentFetcher] = useState<FetcherType>('about_project');
  const [fetcherData, setFetcherData] = useState<Record<FetcherType, string | null>>({
    about_project: initialData || null,
    fetch_goals: null,
    fetch_team: null,
    fetch_roadmap: null,
    fetch_vc: null,
    fetch_tokenomics: null,
    fetch_airdrop: null,
    fetch_partner: null
  });
  const [fetchingData, setFetchingData] = useState<FetcherType | null>(null);

  const handleFetch = async (fetcher: FetcherType) => {
    if (fetchingData) return;
    
    setCurrentFetcher(fetcher);
    
    if (fetcherData[fetcher] !== null) {
      // Data already fetched
      return;
    }
    
    setFetchingData(fetcher);
    
    try {
      const data = await fetchProjectData({
        projectName,
        website,
        fetcherType: fetcher
      });
      
      setFetcherData(prev => ({
        ...prev,
        [fetcher]: data
      }));
    } catch (error) {
      toast.error(`Failed to fetch ${fetcher.replace('fetch_', '')} data`);
      console.error("Fetcher error:", error);
    } finally {
      setFetchingData(null);
    }
  };

  const handleShareToTwitter = () => {
    navigate('/twitter-post', { 
      state: { 
        projectName, 
        aboutData: fetcherData.about_project || '',
        tokenomics: fetcherData.fetch_tokenomics || ''
      } 
    });
  };

  const completedFetchers = Object.entries(fetcherData)
    .filter(([_, value]) => value !== null)
    .length;

  return (
    <Card className="w-full shadow-soft rounded-2xl mt-6">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">Analysis Results</CardTitle>
          <p className="text-xs text-scryptex-muted mt-1">
            {completedFetchers} of 8 analyses completed
          </p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-scryptex-primary text-scryptex-primary hover:bg-scryptex-primary hover:text-white"
          onClick={handleShareToTwitter}
        >
          <Share className="w-4 h-4 mr-2" />
          Share
        </Button>
      </CardHeader>
      
      <FetcherButtons 
        currentFetcher={currentFetcher}
        onFetch={handleFetch}
        fetchingData={fetchingData}
      />
      
      <CardContent className="p-4">
        {(isLoading || fetchingData === currentFetcher) ? (
          <>
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-5/6 mt-2" />
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-4/6 mt-2" />
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-5/6 mt-2" />
            <Skeleton className="h-4 w-3/6 mt-2" />
          </>
        ) : (
          <div className="prose prose-sm max-w-none">
            {fetcherData[currentFetcher] ? (
              <p className="whitespace-pre-wrap">{fetcherData[currentFetcher]}</p>
            ) : (
              <p className="text-scryptex-muted text-center py-6">
                Click on a fetcher button above to load data
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnalysisResult;
