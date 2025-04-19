
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-blue-600">Scryptex</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How it works</a>
          <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
          <Button 
            variant="outline" 
            className="ml-4"
            onClick={() => navigate('/dashboard')}
          >
            Sign In
          </Button>
        </div>
        <Button 
          className="md:hidden"
          variant="outline"
          size="icon"
        >
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto pt-12 pb-16 px-4 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Stop Wasting Time on the Wrong Projects
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Analyze smarter. Farm faster. Let your AI agent do the hard work.
            </p>
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg rounded-xl flex items-center gap-2"
              onClick={() => navigate('/dashboard')}
            >
              Get Started <ArrowRight className="ml-1" />
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/media/hero-banner.png" 
              alt="Scryptex AI Assistant" 
              className="rounded-xl shadow-lg w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Airdrops Are Free… But Your Time Isn't
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Research Overload</h3>
              <p className="text-gray-600">
                Hours spent researching projects that end up being worthless or scams.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Missing Opportunities</h3>
              <p className="text-gray-600">
                Finding good projects too late and missing their airdrop requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Manual Processes</h3>
              <p className="text-gray-600">
                Copy-pasting information and managing spreadsheets instead of taking action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Your AI Crypto Research Assistant
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Scryptex deploys AI agents that work 24/7 analyzing projects so you don't have to
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Analysis</h3>
              <p className="text-gray-600">
                Get comprehensive project breakdowns in seconds instead of hours of manual research.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scam Detection</h3>
              <p className="text-gray-600">
                Advanced AI algorithms identify red flags and warn you about suspicious projects.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Integration</h3>
              <p className="text-gray-600">
                Automatically craft and post optimized content to qualify for airdrops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            How Scryptex Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Enter Project Details</h3>
              <p className="text-gray-600">
                Just paste the project URL or name and let Scryptex do the rest.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our agents scan websites, docs, and social profiles for key insights.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Review Report</h3>
              <p className="text-gray-600">
                Get structured data about tokenomics, team, roadmap, and airdrop eligibility.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Take Action</h3>
              <p className="text-gray-600">
                Auto-post content and complete tasks to qualify for valuable airdrops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to claim your next airdrop?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of crypto enthusiasts who use Scryptex to find and qualify for the best airdrops.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-6 text-lg rounded-xl flex items-center gap-2 mx-auto"
              onClick={() => navigate('/dashboard')}
            >
              Get Started Now <ArrowRight className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">How does Scryptex analyze crypto projects?</h3>
              <p className="text-gray-600">
                Scryptex uses advanced AI models to crawl project documentation, team profiles, social media, GitHub repositories, and tokenomics details to provide a comprehensive analysis.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Is Scryptex free to use?</h3>
              <p className="text-gray-600">
                Scryptex offers both free and premium tiers. Basic project analysis is available for free, while advanced features like auto-posting and in-depth tokenomics analysis are available to premium users.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">How accurate is the AI analysis?</h3>
              <p className="text-gray-600">
                Our AI models achieve over 90% accuracy in identifying legitimate projects and potential scams. We're constantly improving our models with feedback from expert crypto researchers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Can Scryptex help me qualify for airdrops?</h3>
              <p className="text-gray-600">
                Absolutely! Scryptex not only identifies airdrop-worthy projects but also helps you complete qualification tasks through automated social posting, wallet connections, and task tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl text-blue-600">Scryptex</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Your AI Agent for Smarter Airdrops
              </p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">Terms</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Scryptex. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
