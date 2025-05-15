
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "EduMetrics has completely transformed how our university makes data-driven decisions. The analytics tools are intuitive yet powerful.",
    author: "Dr. Michael Johnson",
    title: "Dean of Academic Affairs, Pacific University",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The integration capabilities have allowed us to finally break down data silos between our various departments and systems.",
    author: "Sarah Williams",
    title: "CIO, Eastern State College",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The reporting features have saved our administrative team countless hours. What used to take weeks now happens at the click of a button.",
    author: "Prof. James Chen",
    title: "Department Chair, West Coast University",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )} style={{ transitionDelay: '0.1s' }}>
            Hear from educational institutions that have transformed their operations with EduMetrics.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "absolute top-0 left-0 w-full transition-all duration-500 p-8 bg-background rounded-xl shadow-sm border border-border/50",
                  index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                )}
              >
                <div className="flex flex-col items-center text-center">
                  <svg className="h-12 w-12 text-primary/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                  <div className="flex items-center flex-col">
                    <div className="h-12 w-12 rounded-full overflow-hidden mb-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-primary w-8" : "bg-primary/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
