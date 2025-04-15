
import React from 'react';
import MainLayout from '@/components/MainLayout';
import PageHeader from '@/components/PageHeader';
import AirdropCard, { AirdropProject } from '@/components/AirdropCard';

const AirdropList = () => {
  // Mock data for airdrops
  const airdrops: AirdropProject[] = [
    {
      id: '1',
      name: 'LayerZero',
      logo: 'https://cryptologos.cc/logos/layerzero-zro-logo.png',
      description: 'Omnichain interoperability protocol',
      taskSummary: 'Bridging assets, using LayerZero messaging, and completing social tasks to earn ZRO tokens.',
      status: 'active'
    },
    {
      id: '2',
      name: 'Arbitrum',
      logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png',
      description: 'Ethereum L2 scaling solution',
      taskSummary: 'Use Arbitrum for swaps, provide liquidity, and bridge assets from Ethereum to earn ARB tokens.',
      status: 'active'
    },
    {
      id: '3',
      name: 'Starknet',
      logo: 'https://cryptologos.cc/logos/starknet-strk-logo.png',
      description: 'ZK rollup for Ethereum',
      taskSummary: 'Deploy smart contracts, participate in governance, and complete weekly challenges.',
      status: 'active'
    },
    {
      id: '4',
      name: 'Aave',
      logo: 'https://cryptologos.cc/logos/aave-aave-logo.png',
      description: 'Decentralized lending protocol',
      taskSummary: 'Supply collateral, borrow assets, and participate in governance voting.',
      status: 'upcoming'
    },
    {
      id: '5',
      name: 'Optimism',
      logo: 'https://cryptologos.cc/logos/optimism-op-logo.png',
      description: 'Ethereum L2 with OP Stack',
      taskSummary: 'Use Optimism-based dApps, bridge assets, and participate in community governance.',
      status: 'ended'
    }
  ];

  return (
    <MainLayout>
      <PageHeader 
        title="Active Airdrops" 
        subtitle="Discover and participate in potential airdrops"
      />
      
      <div className="space-y-4 mt-6">
        {airdrops.map(project => (
          <AirdropCard key={project.id} project={project} />
        ))}
      </div>
    </MainLayout>
  );
};

export default AirdropList;
