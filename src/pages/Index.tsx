
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import NeonScrollBars from '../components/NeonScrollBars';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NeonScrollBars />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>

      {/* Marquee Section */}
      <div className="marquee-section py-8 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border-y border-border/50 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee animate-scroll-right whitespace-nowrap mb-4">
            <span className="px-4 text-lg font-medium text-foreground">Senior Full-Stack Developer from Pakistan *</span>
            <span className="px-4 text-lg font-medium text-foreground">Senior Full-Stack Developer from Pakistan *</span>
            <span className="px-4 text-lg font-medium text-foreground">Senior Full-Stack Developer from Pakistan *</span>
            <span className="px-4 text-lg font-medium text-foreground">Senior Full-Stack Developer from Pakistan *</span>
          </div>
          <div className="marquee animate-scroll-left whitespace-nowrap">
            <span className="px-4 text-lg font-medium text-muted-foreground">I'm Open for new projects * Let's Work Together *</span>
            <span className="px-4 text-lg font-medium text-muted-foreground">I'm Open for new projects * Let's Work Together *</span>
            <span className="px-4 text-lg font-medium text-muted-foreground">I'm Open for new projects * Let's Work Together *</span>
            <span className="px-4 text-lg font-medium text-muted-foreground">I'm Open for new projects * Let's Work Together *</span>
          </div>
        </div>
      </div>

      <footer className="py-12 border-t border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Left side - Name and tagline */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">Qamar Abbas</h3>
                <p className="text-muted-foreground text-sm">
                  Full-Stack Developer • Problem Solver • Tech Enthusiast
                </p>
              </div>
              
              {/* Center - Tech stack */}
              <div className="flex flex-wrap justify-center gap-3 text-xs">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20">
                  React
                </span>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full border border-green-500/20">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full border border-purple-500/20">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full border border-orange-500/20">
                  AWS
                </span>
              </div>
              
              {/* Right side - Copyright */}
              <div className="text-center md:text-right">
                <p className="text-muted-foreground text-sm">
                  © {currentYear} All rights reserved
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  Crafted with React & Tailwind CSS
                </p>
              </div>
            </div>
            
            {/* Bottom section */}
            <div className="mt-8 pt-6 border-t border-border/50 text-center">
              <p className="text-xs text-muted-foreground/60">
                "Code is poetry written in logic" - Building digital experiences that matter
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
