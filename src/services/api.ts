
import { toast } from "sonner";

interface AnalyzeRequest {
  projectName: string;
  website: string;
}

interface FetcherRequest {
  projectName: string;
  website: string;
  fetcherType: FetcherType;
}

interface TwitterPostRequest {
  projectName: string;
  content: string;
  hashtags: string[];
}

export type FetcherType = 'about_project' | 'fetch_goals' | 'fetch_team' | 'fetch_roadmap' | 'fetch_vc' | 'fetch_tokenomics' | 'fetch_airdrop' | 'fetch_partner';

export interface AirdropProject {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  taskSummary: string;
  status: 'active' | 'upcoming' | 'ended';
}

// Base URL for API calls
const API_BASE_URL = 'https://api.scryptex.app';

// Helper function for API calls
async function callApi<T, R>(endpoint: string, method: string, data?: T): Promise<R> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
}

// API Functions
export async function analyzeProject(data: AnalyzeRequest): Promise<string> {
  // This is for demonstration purposes - in a real app, you would use the actual API
  // This simulates a successful API response with some dummy data
  console.log("Analyzing project:", data);
  
  // In production, this would be:
  // return callApi<AnalyzeRequest, { data: string }>('/api/analyze', 'POST', data)
  //  .then(response => response.data);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${data.projectName} is a blockchain project focusing on ${
        data.projectName.toLowerCase().includes('eth') ? 'Ethereum-based solutions' : 
        data.projectName.toLowerCase().includes('sol') ? 'Solana ecosystem development' : 
        'next-generation blockchain technology'
      }. The project aims to solve real-world problems using blockchain and smart contract technology. 
      
      Their website (${data.website}) showcases their commitment to innovation and security in the crypto space. The team appears to have strong technical backgrounds with experience in previous blockchain projects.`);
    }, 1500);
  });
}

export async function fetchProjectData(data: FetcherRequest): Promise<string> {
  // This is for demonstration purposes - in a real app, you would use the actual API
  console.log("Fetching data for:", data);
  
  // In production, this would be:
  // return callApi<FetcherRequest, { data: string }>('/api/fetcher', 'POST', data)
  //  .then(response => response.data);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses: Record<FetcherType, string> = {
        about_project: `${data.projectName} is building a next-generation blockchain platform focused on scalability and interoperability.`,
        fetch_goals: `${data.projectName} aims to achieve:\n\n1. Mass adoption through user-friendly interfaces\n2. Enterprise integration with existing business systems\n3. Cross-chain communication for a unified blockchain ecosystem\n4. High transaction throughput with low fees`,
        fetch_team: `The ${data.projectName} team includes:\n\n• CEO: Former tech executive with experience at major tech companies\n• CTO: Blockchain developer with contributions to multiple open-source projects\n• Head of Research: PhD in Distributed Systems\n• Marketing Director: Previously led growth for several successful crypto projects`,
        fetch_roadmap: `${data.projectName} Roadmap:\n\nQ2 2023: Testnet launch\nQ3 2023: Security audits\nQ4 2023: Mainnet launch\nQ1 2024: Developer tools release\nQ2 2024: Cross-chain bridge implementation\nQ3-Q4 2024: Enterprise partnerships`,
        fetch_vc: `${data.projectName} has secured funding from notable investors including:\n\n• Paradigm\n• Andreessen Horowitz (a16z)\n• Polychain Capital\n• Binance Labs\n• DragonFly Capital`,
        fetch_tokenomics: `${data.projectName} Token ($${data.projectName.substring(0, 3).toUpperCase()}) Distribution:\n\n• Total Supply: 1,000,000,000 tokens\n• Team: 15% (4-year vesting)\n• Investors: 20% (2-year vesting)\n• Community & Ecosystem: 30%\n• Liquidity: 15%\n• Treasury: 20%`,
        fetch_airdrop: `${data.projectName} Airdrop Details:\n\n• Eligibility: Early users, testnet participants, and community contributors\n• Total Allocation: 5% of token supply (50,000,000 tokens)\n• Distribution: Based on activity score and length of participation\n• Tasks: Complete testnet transactions, provide feedback, refer new users`,
        fetch_partner: `${data.projectName} has established partnerships with:\n\n• Major Exchanges: For token listing and liquidity\n• Cloud Providers: For infrastructure support\n• Academic Institutions: For research collaboration\n• Enterprise Solutions: For business integration use cases`
      };
      
      resolve(responses[data.fetcherType] || `No data available for ${data.fetcherType.replace('fetch_', '')}.`);
    }, 1200);
  });
}

export async function getAirdrops(): Promise<AirdropProject[]> {
  // This is for demonstration purposes - in a real app, you would use the actual API
  console.log("Fetching airdrops");
  
  // In production, this would be:
  // return callApi<undefined, { data: AirdropProject[] }>('/api/airdrops', 'GET')
  //  .then(response => response.data);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
        },
        {
          id: '3',
          name: 'Starknet',
          logo: 'https://cryptologos.cc/logos/starknet-strk-logo.png',
          website: 'https://starknet.io',
          description: 'Ethereum L2 with ZK-rollups',
          taskSummary: 'Deploy contracts, use StarkNet applications, and participate in community events to earn STRK tokens.',
          status: 'active'
        },
        {
          id: '4',
          name: 'Aave',
          logo: 'https://cryptologos.cc/logos/aave-aave-logo.png',
          website: 'https://aave.com',
          description: 'Decentralized lending protocol',
          taskSummary: 'Supply assets, borrow against collateral, and stake AAVE tokens to earn rewards.',
          status: 'upcoming'
        },
        {
          id: '5',
          name: 'Optimism',
          logo: 'https://cryptologos.cc/logos/optimism-op-logo.png',
          website: 'https://optimism.io',
          description: 'Ethereum L2 with Optimistic rollups',
          taskSummary: 'Use Optimism for transactions, interact with dApps, and contribute to governance to earn OP tokens.',
          status: 'active'
        }
      ]);
    }, 800);
  });
}

export async function generateTwitterPost(data: { projectName: string, aboutData: string }): Promise<string> {
  // This is for demonstration purposes - in a real app, you would use the actual API
  console.log("Generating Twitter post for:", data);
  
  // In production, this would be:
  // return callApi<{ projectName: string, aboutData: string }, { data: string }>('/api/twitter-post', 'POST', data)
  //  .then(response => response.data);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Just analyzed ${data.projectName} with @ScryptexAI! 🚀\n\nTheir approach to ${
        data.projectName.toLowerCase().includes('layer') ? 'scaling blockchain technology' :
        data.projectName.toLowerCase().includes('arb') ? 'Ethereum L2 solutions' :
        data.projectName.toLowerCase().includes('stark') ? 'ZK-rollups' :
        data.projectName.toLowerCase().includes('aave') ? 'DeFi lending' :
        'blockchain innovation'
      } looks promising. Worth keeping an eye on their developments!`);
    }, 1000);
  });
}

export async function postToTwitter(data: TwitterPostRequest): Promise<{ success: boolean, url: string }> {
  // This is for demonstration purposes - in a real app, you would use the actual API
  console.log("Posting to Twitter:", data);
  
  // In production, this would be:
  // return callApi<TwitterPostRequest, { success: boolean, url: string }>('/api/twitter-post/publish', 'POST', data);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.content + ' ' + data.hashtags.map(t => '#' + t).join(' '))}`
      });
    }, 1200);
  });
}

// Twitter Authentication
export function getTwitterAuthUrl(): string {
  return `${API_BASE_URL}/api/twitter-auth`;
}

export async function checkTwitterAuth(): Promise<{ authenticated: boolean, username?: string }> {
  // This is for demonstration purposes - in a real app, you would use the actual API
  console.log("Checking Twitter auth");
  
  // In production, this would be:
  // return callApi<undefined, { authenticated: boolean, username?: string }>('/api/twitter-auth/status', 'GET');
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // For demo purposes, randomly determine if authenticated
      const isAuthenticated = Math.random() > 0.5;
      resolve({
        authenticated: isAuthenticated,
        username: isAuthenticated ? 'crypto_hunter' : undefined
      });
    }, 800);
  });
}
