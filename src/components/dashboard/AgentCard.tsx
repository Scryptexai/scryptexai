
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AgentCardProps {
  title: string;
  description: string;
  icon: string;
  path: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ 
  title, 
  description, 
  icon,
  path 
}) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <img src={icon} alt={title} className="h-10 w-10" />
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={path}>Activate</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AgentCard;
