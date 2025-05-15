
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import LMSIntegrationSection from '@/components/LMSIntegrationSection';
import ProductVideoSection from '@/components/ProductVideoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Update document title on mount
  useEffect(() => {
    document.title = "EduMetrics | Analytics for Educational Excellence";
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <LMSIntegrationSection />
      <ProductVideoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
