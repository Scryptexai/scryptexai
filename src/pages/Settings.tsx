
import React from 'react';
import MainLayout from '@/components/MainLayout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Info, Bell, Moon } from 'lucide-react';

const Settings = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Settings" 
        subtitle="Configure your experience"
      />
      
      <div className="space-y-4 mt-6">
        <Card className="shadow-soft rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium mb-3">Account</h3>
            
            <div className="space-y-4">
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
