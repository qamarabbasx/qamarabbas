
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const About: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollTrigger({ threshold: 0.3 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollTrigger({ threshold: 0.2 });
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollTrigger({ threshold: 0.4 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={titleRef} className={`section-fade ${titleVisible ? 'visible' : ''}`}>
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 ${titleVisible ? 'neon-text-scroll active' : 'neon-text-scroll'}`}>
              <span className={`text-neon-blue ${titleVisible ? 'scroll-glow active' : 'scroll-glow'}`}>Qamar</span>{' '}
              <span className="text-foreground">Abbas</span>
            </h1>
            <p className={`text-xl md:text-2xl text-muted-foreground mb-8 transition-all duration-700 ${titleVisible ? 'scroll-glow active' : 'scroll-glow'}`}>
              Software Engineer & Full Stack Developer
            </p>
          </div>
          
          <div ref={contentRef} className={`section-fade ${contentVisible ? 'visible' : ''} delay-300`}>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="text-left">
                <h2 className={`text-3xl font-semibold mb-6 text-neon-purple transition-all duration-700 ${contentVisible ? 'neon-text-scroll active' : 'neon-text-scroll'}`}>
                  About Me
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Backend-focused Full Stack Developer with 4+ years of experience in the MERN stack, 
                  specializing in technical architecture and scalable API development. Proficient in building 
                  robust server-side logic, integrating modern frontend interfaces, and delivering high-performance 
                  web applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate about creating efficient, scalable solutions and staying up-to-date with 
                  the latest technologies in web development.
                </p>
              </div>
              
              <div ref={skillsRef} className="space-y-6">
                <div className={`neon-border rounded-lg p-6 bg-card/50 transition-all duration-700 ${skillsVisible ? 'card-glow active' : 'card-glow'}`}>
                  <h3 className={`text-xl font-semibold mb-4 text-neon-green transition-all duration-700 ${skillsVisible ? 'neon-text-scroll active' : 'neon-text-scroll'}`}>
                    Core Technologies
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <span className="text-muted-foreground">• React.js & Next.js</span>
                    <span className="text-muted-foreground">• Node.js & Express</span>
                    <span className="text-muted-foreground">• MongoDB & PostgreSQL</span>
                    <span className="text-muted-foreground">• TypeScript</span>
                    <span className="text-muted-foreground">• React Native</span>
                    <span className="text-muted-foreground">• AWS & Firebase</span>
                  </div>
                </div>
                
                <div className={`neon-border rounded-lg p-6 bg-card/50 transition-all duration-700 ${skillsVisible ? 'card-glow active' : 'card-glow'} delay-200`}>
                  <h3 className={`text-xl font-semibold mb-4 text-neon-pink transition-all duration-700 ${skillsVisible ? 'neon-text-scroll active' : 'neon-text-scroll'}`}>
                    Experience
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    4+ years in full-stack development, with expertise in scalable 
                    backend architectures and modern frontend frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
