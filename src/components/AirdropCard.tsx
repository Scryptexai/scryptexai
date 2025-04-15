
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import { AirdropProject } from '@/services/api';

interface AirdropCardProps {
  project: AirdropProject;
}

const AirdropCard: React.FC<AirdropCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleAnalyze = () => {
    navigate(`/project/${project.id}`, { 
      state: { 
        projectName: project.name,
        website: project.website
      }
    });
  };

  return (
    <Card className="w-full shadow-soft rounded-2xl overflow-hidden relative">
      {project.status !== 'active' && (
        <div className={`absolute top-0 right-0 px-2.5 py-1 text-xs font-medium text-white rounded-bl-lg ${
          project.status === 'upcoming' ? 'bg-amber-500' : 'bg-gray-500'
        }`}>
          {project.status === 'upcoming' ? 'Upcoming' : 'Ended'}
        </div>
      )}
      
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-white border flex-shrink-0">
            <img 
              src={project.logo} 
              alt={`${project.name} logo`} 
              className="h-full w-full object-contain p-1"
            />
          </div>
          
          <div className="overflow-hidden">
            <h3 className="font-medium text-lg truncate">{project.name}</h3>
            <p className="text-sm text-scryptex-muted truncate">{project.description}</p>
          </div>
        </div>
        
        <div className="mt-3 bg-scryptex-card p-3 rounded-xl">
          <p className="text-sm font-medium mb-1">How to participate:</p>
          <p className="text-xs text-scryptex-muted">{project.taskSummary}</p>
        </div>
        
        <div className="mt-3">
          <Button 
            onClick={handleAnalyze}
            variant="outline" 
            className="w-full rounded-xl border-scryptex-primary text-scryptex-primary hover:bg-scryptex-primary hover:text-white hover:bg-opacity-90"
          >
            <span>Analyze Project</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AirdropCard;
