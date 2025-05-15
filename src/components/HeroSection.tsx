
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[15%] w-64 h-64 bg-gradient-blue rounded-full blur-3xl opacity-20 floating-animation" />
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-gradient-cyan rounded-full blur-3xl opacity-20 floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[25%] w-40 h-40 bg-gradient-blue rounded-full blur-3xl opacity-10 pulse-animation" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[40%] right-[20%] w-48 h-48 bg-gradient-cyan rounded-full blur-3xl opacity-10 pulse-animation" style={{ animationDelay: '3s' }} />
        
        {/* Add animated particles */}
        <div className="absolute top-0 left-0 right-0 bottom-0">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white opacity-30"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floating ${Math.random() * 15 + 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 pt-32 pb-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "space-y-6 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Education Through <span className="gradient-text">Smart Analytics</span>
            </h1>
            <p className="text-lg text-muted-foreground md:pr-12">
              Empower your institution with comprehensive analytics, monitoring, and reporting across all educational platforms in one unified dashboard.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 animated-border"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 animated-border"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-blue border-2 border-background flex items-center justify-center text-xs font-medium text-white">JD</div>
                <div className="w-8 h-8 rounded-full bg-gradient-cyan border-2 border-background flex items-center justify-center text-xs font-medium text-white">SM</div>
                <div className="w-8 h-8 rounded-full bg-gradient-blue border-2 border-background flex items-center justify-center text-xs font-medium text-white">KT</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-medium text-foreground">30+ institutions</span> already using our platform
              </p>
            </div>
          </div>
          
          <div className={cn(
            "relative transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )} style={{ transitionDelay: '0.2s' }}>
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 p-1 rounded-2xl shadow-xl animated-border">
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center floating-animation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
              </div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-cyan rounded-lg flex items-center justify-center floating-animation" style={{ animationDelay: '1.5s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-card rounded-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none shimmer-animation"></div>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Analytics Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
