
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
    toast.error(`Failed to fetch data: ${(error as Error).message}`);
    throw error;
  }
}

// API Functions
export async function analyzeProject(data: AnalyzeRequest): Promise<string> {
  return callApi<AnalyzeRequest, { data: string }>('/api/analyze', 'POST', data)
    .then(response => response.data);
}

export async function fetchProjectData(data: FetcherRequest): Promise<string> {
  return callApi<FetcherRequest, { data: string }>('/api/fetcher', 'POST', data)
    .then(response => response.data);
}

export async function getAirdrops(): Promise<AirdropProject[]> {
  return callApi<undefined, { data: AirdropProject[] }>('/api/airdrops', 'GET')
    .then(response => response.data);
}

export async function generateTwitterPost(data: { projectName: string, aboutData: string }): Promise<string> {
  return callApi<{ projectName: string, aboutData: string }, { data: string }>('/api/twitter-post', 'POST', data)
    .then(response => response.data);
}

export async function postToTwitter(data: TwitterPostRequest): Promise<{ success: boolean, url: string }> {
  return callApi<TwitterPostRequest, { success: boolean, url: string }>('/api/twitter-post/publish', 'POST', data);
}

// Twitter Authentication
export function getTwitterAuthUrl(): string {
  return `${API_BASE_URL}/api/twitter-auth`;
}

export async function checkTwitterAuth(): Promise<{ authenticated: boolean, username?: string }> {
  return callApi<undefined, { authenticated: boolean, username?: string }>('/api/twitter-auth/status', 'GET');
}
