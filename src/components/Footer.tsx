
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="font-bold text-xl">EduMetrics</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transforming education through data-driven insights and comprehensive analytics.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary text-sm">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Team</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">contact@edumetrics.edu</li>
              <li className="text-muted-foreground text-sm">(555) 123-4567</li>
              <li className="text-muted-foreground text-sm">123 Education Ave<br />San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} EduMetrics, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
