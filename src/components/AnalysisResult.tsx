
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import FetcherButtons from './FetcherButtons';

type FetcherType = 'about_project' | 'fetch_goals' | 'fetch_team' | 'fetch_roadmap' | 'fetch_vc' | 'fetch_tokenomics';

interface AnalysisResultProps {
  projectName: string;
  initialData?: string;
  isLoading?: boolean;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ projectName, initialData, isLoading = false }) => {
  const [currentFetcher, setCurrentFetcher] = useState<FetcherType>('about_project');
  const [fetcherData, setFetcherData] = useState<Record<FetcherType, string | null>>({
    about_project: initialData || null,
    fetch_goals: null,
    fetch_team: null,
    fetch_roadmap: null,
    fetch_vc: null,
    fetch_tokenomics: null
  });
  const [fetchingData, setFetchingData] = useState<FetcherType | null>(null);

  const handleFetch = (fetcher: FetcherType) => {
    if (fetchingData) return;
    
    setCurrentFetcher(fetcher);
    
    if (fetcherData[fetcher] !== null) {
      // Data already fetched
      return;
    }
    
    setFetchingData(fetcher);
    
    // Simulate API call
    setTimeout(() => {
      const dummyData: Record<FetcherType, string> = {
        about_project: `${projectName} is a decentralized protocol designed for secure and efficient cross-chain transactions. It leverages zero-knowledge proofs to ensure privacy and security while maintaining high throughput and low transaction fees.`,
        fetch_goals: `The primary goals of ${projectName} are:\n\n1. Enable seamless cross-chain liquidity\n2. Reduce transaction costs by 90%\n3. Enhance privacy with zero-knowledge technology\n4. Achieve 10,000+ TPS by Q4 2025\n5. Become the standard for cross-chain infrastructure`,
        fetch_team: `The team behind ${projectName} consists of experienced developers from top blockchain projects:\n\n- Alex Chen: Former Ethereum core developer\n- Maria Rodriguez: ZK-proof specialist from Zcash\n- Raj Patel: Ex-Binance security lead\n- Sarah Kim: Tokenomics expert from Solana`,
        fetch_roadmap: `${projectName} Roadmap:\n\nQ2 2025: Testnet launch\nQ3 2025: Mainnet beta\nQ4 2025: Full mainnet launch\nQ1 2026: Cross-chain DEX integration\nQ2 2026: Mobile wallet release\nQ4 2026: Enterprise solutions`,
        fetch_vc: `${projectName} has secured $28M in funding from:\n\n- Paradigm: $10M\n- a16z Crypto: $8M\n- Polychain Capital: $5M\n- Jump Crypto: $3M\n- Coinbase Ventures: $2M`,
        fetch_tokenomics: `${projectName} Token Distribution:\n\n- 20% Team (4-year vesting)\n- 15% Foundation\n- 25% Private Sale\n- 10% Public Sale\n- 15% Ecosystem Development\n- 10% Liquidity\n- 5% Strategic Partners`
      };
      
      setFetcherData(prev => ({
        ...prev,
        [fetcher]: dummyData[fetcher]
      }));
      
      setFetchingData(null);
    }, 1500);
  };

  return (
    <Card className="w-full shadow-soft rounded-2xl mt-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Analysis Results</CardTitle>
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
