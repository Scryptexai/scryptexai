
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import AnalysisResult from '@/components/AnalysisResult';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<{
    name: string;
    website: string;
    aboutData: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch project details
    const timer = setTimeout(() => {
      const projectData = {
        name: id === '1' ? 'LayerZero' : 
              id === '2' ? 'Arbitrum' : 
              id === '3' ? 'Starknet' :
              id === '4' ? 'Aave' :
              id === '5' ? 'Optimism' : 'Unknown Project',
        website: `https://${id === '1' ? 'layerzero.network' : 
                  id === '2' ? 'arbitrum.io' : 
                  id === '3' ? 'starknet.io' :
                  id === '4' ? 'aave.com' :
                  id === '5' ? 'optimism.io' : 'example.com'}`,
        aboutData: `This project is focusing on ${
          id === '1' ? 'omnichain interoperability through a low-level communication primitive.' : 
          id === '2' ? 'scaling Ethereum with optimistic rollup technology.' : 
          id === '3' ? 'scaling Ethereum using zero-knowledge rollup technology.' :
          id === '4' ? 'providing a decentralized lending and borrowing protocol.' :
          id === '5' ? 'scaling Ethereum using the OP Stack.' : 'blockchain technology.'
        }`
      };
      
      setProject(projectData);
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <MainLayout>
      <div className="mb-6">
        <Button 
          variant="ghost" 
          className="mb-4 px-0 hover:bg-transparent"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <PageHeader 
          title={isLoading ? 'Loading...' : project?.name || 'Project Analysis'} 
          subtitle={isLoading ? '' : `Analysis for ${project?.name}`}
        />
      </div>
      
      {(project || isLoading) && (
        <AnalysisResult 
          projectName={project?.name || ''}
          initialData={project?.aboutData}
          isLoading={isLoading}
        />
      )}
    </MainLayout>
  );
};

export default ProjectDetail;
