
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const XpProgress = () => {
  const currentXp = 450;
  const nextLevelXp = 1000;
  const progressPercentage = (currentXp / nextLevelXp) * 100;
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">XP Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progressPercentage} className="h-2" />
        <div className="mt-2 flex justify-between text-sm">
          <span>{currentXp} XP</span>
          <span>Level 2</span>
          <span>{nextLevelXp} XP</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default XpProgress;
