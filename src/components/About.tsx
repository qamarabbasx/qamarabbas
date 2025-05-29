
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-neon-blue animate-glow">Qamar</span>{' '}
              <span className="text-foreground">Abbas</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Engineer & Full Stack Developer
            </p>
          </div>
          
          <div className="animate-fade-in-up delay-300">
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="text-left">
                <h2 className="text-3xl font-semibold mb-6 text-neon-purple neon-glow">
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
              
              <div className="space-y-6">
                <div className="neon-border rounded-lg p-6 bg-card/50">
                  <h3 className="text-xl font-semibold mb-4 text-neon-green">
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
                
                <div className="neon-border rounded-lg p-6 bg-card/50">
                  <h3 className="text-xl font-semibold mb-4 text-neon-pink">
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
