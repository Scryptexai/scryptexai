
import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/MainLayout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Info, Bell, Moon, Twitter, Loader } from 'lucide-react';
import { checkTwitterAuth, getTwitterAuthUrl } from '@/services/api';
import { toast } from 'sonner';

const Settings = () => {
  const [twitterAuth, setTwitterAuth] = useState({
    authenticated: false,
    username: '',
    isChecking: true
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authStatus = await checkTwitterAuth();
        setTwitterAuth({
          authenticated: authStatus.authenticated,
          username: authStatus.username || '',
          isChecking: false
        });
      } catch (error) {
        console.error("Failed to check auth status:", error);
        setTwitterAuth({ 
          authenticated: false, 
          username: '',
          isChecking: false
        });
      }
    };
    
    checkAuth();
  }, []);

  const handleTwitterAuth = () => {
    if (twitterAuth.authenticated) {
      // Disconnect Twitter (for real implementation, call an API)
      toast.success("Twitter account disconnected");
      setTwitterAuth({
        authenticated: false,
        username: '',
        isChecking: false
      });
    } else {
      // Open Twitter OAuth
      window.open(getTwitterAuthUrl(), '_blank');
      
      // Check for auth status change periodically
      setTwitterAuth(prev => ({ ...prev, isChecking: true }));
      
      const checkInterval = setInterval(async () => {
        try {
          const authStatus = await checkTwitterAuth();
          if (authStatus.authenticated) {
            setTwitterAuth({
              authenticated: true,
              username: authStatus.username || '',
              isChecking: false
            });
            clearInterval(checkInterval);
            toast.success("Successfully connected to Twitter");
          }
        } catch (error) {
          console.error("Auth check error:", error);
        }
      }, 2000);
      
      // Stop checking after 2 minutes
      setTimeout(() => {
        clearInterval(checkInterval);
        setTwitterAuth(prev => ({ ...prev, isChecking: false }));
      }, 120000);
    }
  };

  return (
    <MainLayout>
      <PageHeader 
        title="Settings" 
        subtitle="Configure your experience"
      />
      
      <div className="space-y-4 mt-6">
        <Card className="shadow-soft rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium mb-3">Social Connections</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                  <div>
                    <Label>Twitter Account</Label>
                    {twitterAuth.authenticated && (
                      <p className="text-xs text-scryptex-muted">@{twitterAuth.username}</p>
                    )}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 rounded-xl"
                  onClick={handleTwitterAuth}
                  disabled={twitterAuth.isChecking}
                >
                  {twitterAuth.isChecking ? (
                    <Loader className="h-3 w-3 animate-spin" />
                  ) : (
                    twitterAuth.authenticated ? "Disconnect" : "Connect"
                  )}
                </Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-scryptex-muted" />
                  <span>Connected with Telegram</span>
                </div>
                <Button variant="outline" size="sm" className="h-8 rounded-xl">
                  Disconnect
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium mb-3">Preferences</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-scryptex-muted" />
                  <Label htmlFor="notifications">Notifications</Label>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Moon className="h-5 w-5 text-scryptex-muted" />
                  <Label htmlFor="darkMode">Dark Mode</Label>
                </div>
                <Switch id="darkMode" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium mb-3">About</h3>
            
            <div className="text-sm text-scryptex-muted">
              <p>Scryptex v1.0.0</p>
              <p className="mt-1">AI-powered crypto project analysis and airdrop automation</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Settings;
