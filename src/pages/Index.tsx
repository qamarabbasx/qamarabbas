
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

      <footer className="py-8 border-t border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Qamar Abbas. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
