
import React from 'react';
import { useScrollPosition } from '../hooks/useScrollTrigger';

const NeonScrollBars: React.FC = () => {
  const scrollY = useScrollPosition();
  
  // Calculate scroll progress (0 to 100)
  const scrollProgress = Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100);
  
  return (
    <>
      {/* Left Neon Bar */}
      <div className="fixed left-0 top-0 h-full w-1 z-50 pointer-events-none">
        <div className="relative h-full bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent">
          <div 
            className="absolute left-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink shadow-[0_0_10px_currentColor] transition-all duration-300 ease-out"
            style={{
              height: `${Math.max(scrollProgress, 5)}%`,
              top: `${scrollProgress * 0.8}%`,
              boxShadow: '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor'
            }}
          />
        </div>
      </div>

      {/* Right Neon Bar */}
      <div className="fixed right-0 top-0 h-full w-1 z-50 pointer-events-none">
        <div className="relative h-full bg-gradient-to-b from-transparent via-neon-pink/20 to-transparent">
          <div 
            className="absolute right-0 w-1 bg-gradient-to-b from-neon-pink via-neon-purple to-neon-blue shadow-[0_0_10px_currentColor] transition-all duration-300 ease-out"
            style={{
              height: `${Math.max(scrollProgress, 5)}%`,
              top: `${(100 - scrollProgress) * 0.8}%`,
              boxShadow: '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor'
            }}
          />
        </div>
      </div>

      {/* Pulsing Corner Effects - Top corners only */}
      <div className="fixed top-4 left-4 w-8 h-8 z-40 pointer-events-none">
        <div className="w-full h-full border-l-2 border-t-2 border-neon-blue animate-pulse-neon opacity-80" />
      </div>
      
      <div className="fixed top-4 right-4 w-8 h-8 z-40 pointer-events-none">
        <div className="w-full h-full border-r-2 border-t-2 border-neon-pink animate-pulse-neon opacity-80" />
      </div>
    </>
  );
};

export default NeonScrollBars;
