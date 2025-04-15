
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Twitter, Send, Edit, Loader } from 'lucide-react';
import { generateTwitterPost, postToTwitter, getTwitterAuthUrl, checkTwitterAuth } from '@/services/api';
import { toast } from 'sonner';

const TwitterPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [projectName, setProjectName] = useState(location.state?.projectName || '');
  const [content, setContent] = useState('');
  const [hashtags, setHashtags] = useState('#crypto #blockchain');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [twitterAuth, setTwitterAuth] = useState({
    authenticated: false,
    username: ''
  });

  useEffect(() => {
    const generateContent = async () => {
      if (!location.state?.projectName) {
        return;
      }
      
      setIsGenerating(true);
      
      try {
        const generatedContent = await generateTwitterPost({
          projectName: location.state.projectName,
          aboutData: location.state.aboutData || ''
        });
        setContent(generatedContent);
      } catch (error) {
        console.error("Failed to generate content:", error);
        toast.error("Failed to generate Twitter content");
        // Fallback content
        setContent(`Check out ${location.state.projectName} - an interesting blockchain project I just analyzed with Scryptex!`);
      } finally {
        setIsGenerating(false);
      }
    };

    const checkAuth = async () => {
      try {
        const authStatus = await checkTwitterAuth();
        setTwitterAuth({
          authenticated: authStatus.authenticated,
          username: authStatus.username || ''
        });
      } catch (error) {
        console.error("Failed to check auth status:", error);
        setTwitterAuth({ authenticated: false, username: '' });
      } finally {
        setIsAuthChecking(false);
      }
    };
    
    generateContent();
    checkAuth();
  }, [location.state]);

  const handleAuthTwitter = () => {
    // Open Twitter OAuth in a new window
    window.open(getTwitterAuthUrl(), '_blank');
    
    // Check for auth status change periodically
    const checkInterval = setInterval(async () => {
      try {
        const authStatus = await checkTwitterAuth();
        if (authStatus.authenticated) {
          setTwitterAuth({
            authenticated: true,
            username: authStatus.username || ''
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
    }, 120000);
  };

  const handlePost = async () => {
    if (!twitterAuth.authenticated) {
      toast.error("Please connect to Twitter first");
      return;
    }
    
    setIsPosting(true);
    
    try {
      const hashtagArray = hashtags
        .split(/[\s,#]/)
        .filter(tag => tag.trim())
        .map(tag => tag.trim());
        
      const result = await postToTwitter({
        projectName,
        content,
        hashtags: hashtagArray
      });
      
      if (result.success) {
        toast.success("Posted to Twitter successfully!");
        // Optionally navigate to the URL
        window.open(result.url, '_blank');
        navigate('/');
      } else {
        throw new Error("Failed to post to Twitter");
      }
    } catch (error) {
      console.error("Twitter post error:", error);
      toast.error("Failed to post to Twitter");
    } finally {
      setIsPosting(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const charCount = content.length;
  const maxChars = 280 - hashtags.split(/[\s,#]/).filter(tag => tag.trim()).join(' #').length - 1;
  const isOverLimit = charCount > maxChars;

  return (
    <MainLayout>
      <div className="mb-4">
        <Button 
          variant="ghost" 
          className="mb-4 px-0 hover:bg-transparent"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <PageHeader 
          title="Share on Twitter" 
          subtitle={projectName ? `Post analysis about ${projectName}` : "Share your analysis"}
        />
      </div>
      
      <Card className="w-full shadow-soft rounded-2xl">
        <CardContent className="p-4">
          {isAuthChecking ? (
            <div className="flex items-center justify-center h-40">
              <Loader className="h-6 w-6 animate-spin text-scryptex-primary" />
            </div>
          ) : !twitterAuth.authenticated ? (
            <div className="text-center py-8">
              <Twitter className="h-12 w-12 mx-auto mb-4 text-scryptex-primary" />
              <h3 className="text-lg font-medium mb-2">Connect to Twitter</h3>
              <p className="text-scryptex-muted mb-4">Connect your Twitter account to share this analysis</p>
              <Button 
                onClick={handleAuthTwitter}
                className="bg-[#1DA1F2] hover:bg-[#1a94df]"
              >
                <Twitter className="mr-2 h-4 w-4" />
                Connect Twitter Account
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Twitter className="h-5 w-5 text-[#1DA1F2] mr-2" />
                  <p className="text-sm">Posting as <span className="font-medium">@{twitterAuth.username}</span></p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-8"
                  onClick={handleEdit}
                >
                  <Edit className="h-4 w-4 mr-1" />
                  {isEditing ? "Preview" : "Edit"}
                </Button>
              </div>
              
              {isEditing ? (
                <div className="space-y-3">
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your Twitter post..."
                    className="min-h-[120px] resize-none"
                  />
                  <div>
                    <label className="text-xs text-scryptex-muted mb-1 block">Hashtags</label>
                    <Input
                      value={hashtags}
                      onChange={(e) => setHashtags(e.target.value)}
                      placeholder="#crypto #blockchain"
                    />
                  </div>
                </div>
              ) : (
                <div className="border rounded-xl p-4 bg-white">
                  {isGenerating ? (
                    <div className="flex items-center justify-center h-24">
                      <Loader className="h-6 w-6 animate-spin text-scryptex-primary" />
                    </div>
                  ) : (
                    <>
                      <p className="mb-2">{content}</p>
                      <p className="text-[#1DA1F2]">
                        {hashtags.split(/[\s,#]/).filter(tag => tag.trim()).map((tag, i) => (
                          <span key={i} className="mr-1">#{tag}</span>
                        ))}
                      </p>
                    </>
                  )}
                </div>
              )}
              
              <div className="text-right mt-2">
                <span className={`text-xs ${isOverLimit ? 'text-red-500' : 'text-scryptex-muted'}`}>
                  {charCount}/{maxChars} characters
                </span>
              </div>
            </div>
          )}
        </CardContent>
        
        {twitterAuth.authenticated && (
          <CardFooter className="px-4 pb-4 pt-0">
            <Button 
              className="w-full bg-[#1DA1F2] hover:bg-[#1a94df] rounded-xl h-12"
              onClick={handlePost}
              disabled={isGenerating || isPosting || isOverLimit}
            >
              {isPosting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                  <span>Posting...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  <span>Post to Twitter</span>
                </div>
              )}
            </Button>
          </CardFooter>
        )}
      </Card>
    </MainLayout>
  );
};

export default TwitterPost;
