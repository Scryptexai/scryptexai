
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { FetcherType } from '@/services/api';
import { Check } from 'lucide-react';

interface FetcherButtonsProps {
  currentFetcher: FetcherType;
  onFetch: (fetcher: FetcherType) => void;
  fetchingData: FetcherType | null;
}

const FetcherButtons: React.FC<FetcherButtonsProps> = ({ currentFetcher, onFetch, fetchingData }) => {
  const fetcherOptions: { id: FetcherType; label: string }[] = [
    { id: 'about_project', label: 'About' },
    { id: 'fetch_goals', label: 'Goals' },
    { id: 'fetch_team', label: 'Team' },
    { id: 'fetch_roadmap', label: 'Roadmap' },
    { id: 'fetch_vc', label: 'Investors' },
    { id: 'fetch_tokenomics', label: 'Tokenomics' },
    { id: 'fetch_airdrop', label: 'Airdrop' },
    { id: 'fetch_partner', label: 'Partners' }
  ];

  return (
    <ScrollArea className="px-4 pb-2">
      <div className="flex gap-2 pb-2 overflow-x-auto">
        {fetcherOptions.map(option => (
          <button
            key={option.id}
            className={`fetcher-btn whitespace-nowrap ${currentFetcher === option.id ? 'active' : ''}`}
            onClick={() => onFetch(option.id)}
            disabled={fetchingData !== null}
          >
            {fetchingData === option.id ? (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-t-transparent border-current rounded-full animate-spin"></div>
                <span>{option.label}</span>
              </div>
            ) : (
              <div className="flex items-center">
                <span>{option.label}</span>
                {currentFetcher === option.id && <Check className="ml-1 w-3 h-3" />}
              </div>
            )}
          </button>
        ))}
      </div>
    </ScrollArea>
  );
};

export default FetcherButtons;
