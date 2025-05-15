
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const LMSIntegration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: true
  }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  
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
    
    observer.observe(document.getElementById('lms-integration') as Element);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const lmsPlatforms = [
    {
      name: "Canvas",
      icon: "https://www.instructure.com/sites/default/files/image/2021-12/canvas_reversed_logo.png",
      description: "Currently integrated and fully supported",
      status: "active"
    },
    {
      name: "Moodle",
      icon: "https://moodle.org/theme/image.php/moodleorg/theme_moodleorg/1684708627/moodle_logo_small",
      description: "Integration coming soon",
      status: "coming-soon"
    },
    {
      name: "Blackboard",
      icon: "https://www.blackboard.com/themes/custom/blackboard/images/logo.svg",
      description: "On our integration roadmap",
      status: "planned"
    },
    {
      name: "Brightspace",
      icon: "https://www.d2l.com/wp-content/uploads/2022/05/brightspace-logo.png",
      description: "On our integration roadmap",
      status: "planned"
    },
    {
      name: "Google Classroom",
      icon: "https://www.gstatic.com/images/branding/product/2x/classroom_96dp.png",
      description: "Planned for future releases",
      status: "planned"
    },
    {
      name: "Custom LMS",
      icon: "/placeholder.svg",
      description: "Custom integration available",
      status: "available"
    },
    {
      name: "Other Commercial LMS",
      icon: "/placeholder.svg",
      description: "Contact us for integration timeline",
      status: "planned"
    }
  ];
  
  return (
    <section id="lms-integration" className="py-20 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/5"></div>
        
        {/* Flowing lines representing integration/connections */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>
          <path d="M0,100 C150,180 350,20 500,100 C650,180 850,20 1000,100 C1150,180 1350,20 1500,100" 
            fill="none" 
            stroke="url(#connection-gradient)" 
            strokeWidth="1">
            <animate 
              attributeName="d" 
              dur="20s" 
              repeatCount="indefinite"
              values="
                M0,100 C150,180 350,20 500,100 C650,180 850,20 1000,100 C1150,180 1350,20 1500,100;
                M0,100 C150,20 350,180 500,100 C650,20 850,180 1000,100 C1150,20 1350,180 1500,100;
                M0,100 C150,180 350,20 500,100 C650,180 850,20 1000,100 C1150,180 1350,20 1500,100
              "
            />
          </path>
          <path d="M0,300 C150,380 350,220 500,300 C650,380 850,220 1000,300 C1150,380 1350,220 1500,300" 
            fill="none" 
            stroke="url(#connection-gradient)" 
            strokeWidth="1">
            <animate 
              attributeName="d" 
              dur="25s" 
              repeatCount="indefinite"
              values="
                M0,300 C150,380 350,220 500,300 C650,380 850,220 1000,300 C1150,380 1350,220 1500,300;
                M0,300 C150,220 350,380 500,300 C650,220 850,380 1000,300 C1150,220 1350,380 1500,300;
                M0,300 C150,380 350,220 500,300 C650,380 850,220 1000,300 C1150,380 1350,220 1500,300
              "
            />
          </path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          "max-w-3xl mx-auto text-center mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless <span className="gradient-text">LMS Integration</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with all major Learning Management Systems to unify your educational data ecosystem. 
            Our platform integrates smoothly with your existing infrastructure.
          </p>
        </div>
        
        <div className={cn(
          "transition-all duration-700 delay-300 max-w-5xl mx-auto",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {/* Auto-playing swipeable carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {lmsPlatforms.map((platform, index) => (
                <div key={index} className="flex-[0_0_33%] min-w-[250px] p-2">
                  <div className="group h-full">
                    <div className="h-full p-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl animated-border overflow-hidden">
                      <div className="h-full bg-card/80 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-between transition-all duration-300 group-hover:bg-card">
                        <div className="relative w-16 h-16 bg-white rounded-full p-2 mb-4 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                          <img 
                            src={platform.icon} 
                            alt={`${platform.name} icon`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/placeholder.svg";
                            }}
                          />
                          
                          {platform.status === "active" && (
                            <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                          )}
                          
                          {platform.status === "coming-soon" && (
                            <div className="absolute -bottom-1 -right-1 bg-amber-500 w-4 h-4 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="text-center">
                          <h3 className="font-semibold mb-2">{platform.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {platform.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center gap-x-6 mt-6 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span>Active</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
              <span>Coming Soon</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
              <span>Planned</span>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <Button 
            variant="outline" 
            className="group border-primary text-primary hover:bg-primary/10 animated-border"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Schedule a compatibility check</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Accreditation callout */}
        <div className={cn(
          "max-w-2xl mx-auto mt-16 p-6 border border-primary/20 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 transition-all duration-700 delay-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Ready for Accreditation Requirements</h3>
              <p className="text-muted-foreground">
                Our comprehensive reporting tools help your institution prepare for and maintain compliance with government and industry accreditation standards, ensuring your programs meet all necessary requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LMSIntegration;
