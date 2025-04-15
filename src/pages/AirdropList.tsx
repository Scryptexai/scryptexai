
import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/MainLayout';
import PageHeader from '@/components/PageHeader';
import AirdropCard from '@/components/AirdropCard';
import { getAirdrops, AirdropProject } from '@/services/api';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';

const AirdropList = () => {
  const [airdrops, setAirdrops] = useState<AirdropProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const data = await getAirdrops();
        setAirdrops(data);
      } catch (error) {
        console.error("Failed to load airdrops:", error);
        toast.error("Failed to load airdrops. Please try again later.");
        // Fall back to some sample data in case of API failure
        setAirdrops([
          {
            id: '1',
            name: 'LayerZero',
            logo: 'https://cryptologos.cc/logos/layerzero-zro-logo.png',
            website: 'https://layerzero.network',
            description: 'Omnichain interoperability protocol',
            taskSummary: 'Bridging assets, using LayerZero messaging, and completing social tasks to earn ZRO tokens.',
            status: 'active'
          },
          {
            id: '2',
            name: 'Arbitrum',
            logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png',
            website: 'https://arbitrum.io',
            description: 'Ethereum L2 scaling solution',
            taskSummary: 'Use Arbitrum for swaps, provide liquidity, and bridge assets from Ethereum to earn ARB tokens.',
            status: 'active'
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAirdrops();
  }, []);

  return (
    <MainLayout>
      <PageHeader 
        title="Active Airdrops" 
        subtitle="Discover and participate in potential airdrops"
      />
      
      <div className="space-y-4 mt-6">
        {isLoading ? (
          Array(3).fill(0).map((_, i) => (
            <div key={i} className="w-full rounded-2xl overflow-hidden border p-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-40" />
                </div>
              </div>
              <Skeleton className="h-20 w-full mt-3" />
              <Skeleton className="h-10 w-full mt-3" />
            </div>
          ))
        ) : (
          airdrops.map(project => (
            <AirdropCard key={project.id} project={project} />
          ))
        )}
      </div>
    </MainLayout>
  );
};

export default AirdropList;
