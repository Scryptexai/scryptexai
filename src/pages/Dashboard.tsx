
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Scryptex Dashboard</h1>
        <p className="mb-4">Welcome to your AI-powered airdrop hunting dashboard.</p>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Analyze a Project</h2>
          <div className="grid gap-4">
            <p>Enter project details to start AI analysis:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Project name or URL" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <Button>Analyze Project</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
