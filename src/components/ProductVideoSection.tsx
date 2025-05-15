
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

const ProductVideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.getElementById('product-video') as Element);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
    // In a real implementation, you would trigger the embedded video to play
    const video = document.getElementById('product-video-player') as HTMLIFrameElement;
    // For demonstration, we're just showing the iframe when the play button is clicked
    if (video) {
      video.style.opacity = '1';
      // Video would actually play via YouTube API in a real implementation
    }
  };
  
  return (
    <section id="product-video" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-blue rounded-full blur-3xl opacity-10 pulse-animation"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-cyan rounded-full blur-3xl opacity-10 pulse-animation" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated code snippets in background */}
        <div className="absolute top-20 left-10 opacity-5 transform -rotate-12 floating-animation">
          <div className="w-40 h-6 bg-primary/50 rounded mb-2"></div>
          <div className="w-32 h-4 bg-primary/50 rounded mb-2 ml-4"></div>
          <div className="w-24 h-4 bg-primary/50 rounded mb-2 ml-8"></div>
          <div className="w-36 h-4 bg-primary/50 rounded ml-4"></div>
        </div>
        
        <div className="absolute bottom-20 right-10 opacity-5 transform rotate-12 floating-animation" style={{ animationDelay: '3s' }}>
          <div className="w-40 h-6 bg-accent/50 rounded mb-2"></div>
          <div className="w-32 h-4 bg-accent/50 rounded mb-2 ml-4"></div>
          <div className="w-24 h-4 bg-accent/50 rounded mb-2 ml-8"></div>
          <div className="w-36 h-4 bg-accent/50 rounded ml-4"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          "max-w-3xl mx-auto text-center mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See <span className="gradient-text">EduMetrics</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch our quick product tour to discover how EduMetrics can transform your 
            institution's data management and analytics capabilities.
          </p>
        </div>
        
        <div className={cn(
          "relative max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden transition-all duration-700 delay-300",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 p-1 rounded-xl animated-border">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden">
              {/* Video thumbnail */}
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Product Video Thumbnail" 
                className={cn(
                  "w-full h-full object-cover transition-opacity duration-500",
                  isPlaying ? "opacity-0" : "opacity-100"
                )}
              />
              
              {/* Video player (would be replaced with actual video in production) */}
              <iframe 
                id="product-video-player"
                className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500"
                src="about:blank" // Replace with actual YouTube embed URL
                title="EduMetrics Product Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Play button overlay */}
              <div 
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                  isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                <Button 
                  onClick={handlePlayClick}
                  size="lg"
                  className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary/100 text-primary-foreground animate-pulse hover:animate-none"
                >
                  <Play className="h-8 w-8" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "flex justify-center mt-8 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 animated-border"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductVideoSection;
