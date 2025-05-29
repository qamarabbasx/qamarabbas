
import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="text-2xl font-bold cursor-pointer neon-glow text-neon-blue floating-animation group"
              onClick={() => scrollToSection('about')}
            >
              <span className="group-hover:neon-flicker transition-all duration-300">Qamar</span>
              <span className="text-neon-purple ml-1 group-hover:neon-flicker transition-all duration-300 delay-100">Abbas</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 nav-link group ${
                    activeSection === item.id
                      ? 'text-neon-blue neon-glow'
                      : 'text-muted-foreground hover:text-foreground hover:neon-glow'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple shadow-[0_0_10px] shadow-neon-blue/50 pulse-slow" />
                  )}
                  <div className="absolute inset-0 rounded-md bg-neon-blue/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-secondary/50 hover:bg-accent border border-border/50 hover:border-neon-blue/30 transition-all duration-300 neon-border button-hover group"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-neon-blue transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110" />
                ) : (
                  <Moon className="w-5 h-5 text-neon-purple transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-full bg-secondary/50 hover:bg-accent border border-border/50 hover:border-neon-blue/30 transition-all duration-300 neon-border"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-neon-blue" />
                ) : (
                  <Menu className="w-5 h-5 text-neon-blue" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
        <div className="relative h-full flex flex-col justify-center items-center space-y-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl font-medium transition-all duration-500 hover:scale-110 ${
                activeSection === item.id
                  ? 'text-neon-blue neon-glow'
                  : 'text-muted-foreground hover:text-neon-purple hover:neon-glow'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMenuOpen ? 1 : 0,
                transition: `all 0.5s ease ${index * 100}ms`
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
