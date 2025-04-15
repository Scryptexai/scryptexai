import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import AnalysisResult from '@/components/AnalysisResult';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader } from 'lucide-react';
import { analyzeProject } from '@/services/api';
import { toast } from 'sonner';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [project, setProject] = useState<{
    name: string;
    website: string;
    aboutData: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjectData = async () => {
      const projectName = location.state?.projectName;
      const website = location.state?.website;
      
      if (projectName && website) {
        setIsLoading(true);
        try {
          const aboutData = await analyzeProject({ projectName, website });
          setProject({
            name: projectName,
            website,
            aboutData
          });
        } catch (error) {
          console.error("Analysis error:", error);
          toast.error("Failed to analyze project. Using cached data.");
          
          setProject({
            name: projectName,
            website,
            aboutData: `${projectName} is a blockchain project focusing on innovative solutions.`
          });
        } finally {
          setIsLoading(false);
        }
      } 
      else if (id) {
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
        };
        
        setIsLoading(true);
        try {
          const aboutData = await analyzeProject({ 
            projectName: projectData.name, 
            website: projectData.website 
          });
          
          setProject({
            ...projectData,
            aboutData
          });
        } catch (error) {
          console.error("Analysis error:", error);
          toast.error("Failed to analyze project. Using cached data.");
          
          setProject({
            ...projectData,
            aboutData: `${projectData.name} is a blockchain project focusing on innovative solutions.`
          });
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    fetchProjectData();
  }, [id, location.state]);

  if (!id && !location.state) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-scryptex-muted mb-4">Project not found</p>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </div>
      </MainLayout>
    );
  }

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
          title={isLoading ? 'Loading Project...' : project?.name || 'Project Analysis'} 
          subtitle={isLoading ? '' : `Analysis for ${project?.name}`}
        />
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center p-12">
          <Loader className="h-8 w-8 animate-spin text-scryptex-primary" />
        </div>
      ) : project && (
        <AnalysisResult 
          projectName={project.name}
          website={project.website}
          initialData={project.aboutData}
          isLoading={false}
        />
      )}
    </MainLayout>
  );
};

export default ProjectDetail;
