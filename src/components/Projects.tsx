
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const Projects: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollTrigger({ threshold: 0.3 });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollTrigger({ threshold: 0.2 });

  const projects = [
    {
      title: "TaskJoy — Secure Service Contracting Platform",
      description: "Full-stack platform for secure service contracting with real-time features and comprehensive backend architecture.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      highlights: ["Real-time messaging", "Secure payments", "Advanced search"],
      color: "neon-blue"
    },
    {
      title: "Commercial Real Estate Platform",
      description: "Engineered full-service platform with advanced property management and integrated payment systems.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      highlights: ["5000+ properties", "Property management", "Payment integration"],
      color: "neon-purple"
    },
    {
      title: "University Management System",
      description: "Comprehensive university management system with student tracking and administrative features.",
      tech: ["MERN Stack", "Express.js", "MongoDB"],
      highlights: ["Student management", "Real-time updates", "Admin dashboard"],
      color: "neon-green"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={headerRef} className={`text-center mb-16 section-fade ${headerVisible ? 'visible' : ''}`}>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${headerVisible ? 'neon-text-scroll active' : 'neon-text-scroll'}`}>
              <span className={`text-neon-purple ${headerVisible ? 'scroll-glow active' : 'scroll-glow'}`}>Featured</span>{' '}
              <span className="text-foreground">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const { elementRef, isVisible } = useScrollTrigger({ threshold: 0.3 });
              
              return (
                <div
                  key={index}
                  ref={elementRef}
                  className={`group neon-border rounded-lg p-6 bg-card/50 hover:bg-card/80 transition-all duration-700 card-hover section-fade ${isVisible ? 'visible card-glow active' : 'card-glow'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-4">
                    <h3 className={`text-xl font-semibold mb-3 text-${project.color} transition-all duration-700 ${isVisible ? 'neon-text-scroll active neon-glow group-hover:neon-flicker' : 'neon-text-scroll neon-glow'}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 text-foreground">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="transition-all duration-300 group-hover:text-foreground">• {highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs bg-secondary/50 rounded-full border border-border tech-tag ${isVisible ? 'neon-border active' : ''}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
