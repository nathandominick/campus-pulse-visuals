
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const LMSIntegration = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
      description: "The most widely-used LMS in North America",
    },
    {
      name: "Moodle",
      icon: "https://moodle.org/theme/image.php/moodleorg/theme_moodleorg/1684708627/moodle_logo_small",
      description: "The world's most popular open-source learning platform",
    },
    {
      name: "Blackboard",
      icon: "https://www.blackboard.com/themes/custom/blackboard/images/logo.svg",
      description: "Comprehensive education technology solutions",
    },
    {
      name: "Brightspace",
      icon: "https://www.d2l.com/wp-content/uploads/2022/05/brightspace-logo.png",
      description: "Personalized learning experiences for education",
    },
    {
      name: "Google Classroom",
      icon: "https://www.gstatic.com/images/branding/product/2x/classroom_96dp.png",
      description: "Free web service for creating, distributing and grading assignments",
    },
    {
      name: "Custom LMS",
      icon: "/placeholder.svg",
      description: "Compatible with your institution's custom learning management system",
    },
    {
      name: "Other Commercial LMS",
      icon: "/placeholder.svg",
      description: "We integrate with all major learning platforms",
    }
  ];
  
  return (
    <section id="lms-integration" className="py-20 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
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
          "transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto"
          >
            <CarouselContent>
              {lmsPlatforms.map((platform, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="group h-full">
                    <div className="h-full p-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl animated-border overflow-hidden">
                      <div className="h-full bg-card/80 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-between transition-all duration-300 group-hover:bg-card">
                        <div className="w-16 h-16 bg-white rounded-full p-2 mb-4 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                          <img 
                            src={platform.icon} 
                            alt={`${platform.name} icon`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/placeholder.svg";
                            }}
                          />
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static h-8 w-8 translate-y-0" />
              <CarouselNext className="static h-8 w-8 translate-y-0" />
            </div>
          </Carousel>
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
      </div>
    </section>
  );
};

export default LMSIntegration;
