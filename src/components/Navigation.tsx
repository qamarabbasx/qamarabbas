
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div 
              className="text-lg sm:text-xl lg:text-2xl font-bold cursor-pointer text-gray-900 dark:text-white hover:text-blue-500 transition-colors duration-300"
              onClick={() => scrollToSection('about')}
            >
              Qamar<span className="text-blue-500">.</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-500'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 lg:space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 lg:p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 lg:p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Menu className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-white dark:bg-gray-900" />
        <div className="relative h-full flex flex-col justify-center items-center space-y-6 px-4">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xl font-medium transition-all duration-500 ${
                activeSection === item.id
                  ? 'text-blue-500'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
              style={{ 
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
