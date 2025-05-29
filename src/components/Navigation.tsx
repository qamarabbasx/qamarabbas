
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold cursor-pointer neon-glow text-neon-blue floating-animation"
            onClick={() => scrollToSection('about')}
          >
            Qamar Abbas
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 nav-link ${
                  activeSection === item.id
                    ? 'text-neon-blue neon-glow'
                    : 'text-muted-foreground hover:text-foreground hover:neon-glow'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple shadow-[0_0_10px] shadow-neon-blue/50 pulse-slow" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-accent transition-all duration-300 neon-border button-hover"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-neon-blue transition-transform duration-300 hover:rotate-180" />
            ) : (
              <Moon className="w-5 h-5 text-neon-purple transition-transform duration-300 hover:rotate-12" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
