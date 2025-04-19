
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    id: 1,
    action: "Analyzed Bitcoin project",
    timestamp: "2 hours ago",
    xp: 25,
  },
  {
    id: 2,
    action: "Completed farming task",
    timestamp: "4 hours ago",
    xp: 15,
  },
  {
    id: 3,
    action: "Posted on Twitter",
    timestamp: "Yesterday",
    xp: 10,
  },
  {
    id: 4,
    action: "Saved Ethereum project",
    timestamp: "2 days ago",
    xp: 5,
  },
  {
    id: 5,
    action: "Explored new airdrops",
    timestamp: "3 days ago",
    xp: 10,
  },
];

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {activities.map((activity) => (
            <li key={activity.id} className="flex items-center justify-between text-sm">
              <div>
                <p>{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
              <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                +{activity.xp} XP
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
