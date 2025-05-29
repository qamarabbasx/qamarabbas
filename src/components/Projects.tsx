
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollTrigger({ threshold: 0.3 });

  const projects = [
    {
      title: "TaskJoy — Secure Service Contracting Platform",
      description: "Full-stack platform for secure service contracting with real-time features and comprehensive backend architecture.",
      image: "/placeholder.svg",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      highlights: ["Real-time messaging", "Secure payments", "Advanced search"],
      color: "neon-blue",
      category: "Full Stack"
    },
    {
      title: "Commercial Real Estate Platform",
      description: "Engineered full-service platform with advanced property management and integrated payment systems.",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      highlights: ["5000+ properties", "Property management", "Payment integration"],
      color: "neon-purple",
      category: "Web App"
    },
    {
      title: "University Management System",
      description: "Comprehensive university management system with student tracking and administrative features.",
      image: "/placeholder.svg",
      tech: ["MERN Stack", "Express.js", "MongoDB"],
      highlights: ["Student management", "Real-time updates", "Admin dashboard"],
      color: "neon-green",
      category: "Enterprise"
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile application with modern UI and seamless shopping experience.",
      image: "/placeholder.svg",
      tech: ["React Native", "Node.js", "MongoDB"],
      highlights: ["Cross-platform", "Payment gateway", "Push notifications"],
      color: "neon-pink",
      category: "Mobile"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard with advanced filtering and reporting capabilities.",
      image: "/placeholder.svg",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      highlights: ["Real-time charts", "Data export", "Custom reports"],
      color: "neon-blue",
      category: "Dashboard"
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chat application with natural language processing and machine learning integration.",
      image: "/placeholder.svg",
      tech: ["Next.js", "OpenAI", "WebSocket", "Redis"],
      highlights: ["AI responses", "Real-time chat", "Context memory"],
      color: "neon-purple",
      category: "AI/ML"
    }
  ];

  const categories = ["All", "Full Stack", "Web App", "Enterprise", "Mobile", "Dashboard", "AI/ML"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  // Create individual scroll triggers for each project
  const projectRefs = projects.map(() => useScrollTrigger({ threshold: 0.3 }));

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-neon-purple blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 rounded-full bg-neon-green blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div ref={headerRef} className={`text-center mb-16 section-fade ${headerVisible ? 'visible' : ''}`}>
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${headerVisible ? 'neon-text-scroll active' : 'neon-text-scroll'}`}>
              <span className={`text-neon-purple ${headerVisible ? 'scroll-glow active' : 'scroll-glow'}`}>My</span>{' '}
              <span className="text-foreground">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              A showcase of my recent work and technical expertise
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue shadow-[0_0_20px] shadow-neon-blue/30'
                      : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-transparent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const originalIndex = projects.findIndex(p => p.title === project.title);
              const { elementRef, isVisible } = projectRefs[originalIndex];
              
              return (
                <div
                  key={index}
                  ref={elementRef}
                  className={`group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm transition-all duration-700 card-hover section-fade ${isVisible ? 'visible card-glow active' : 'card-glow'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-4">
                        <button className="p-3 rounded-full bg-neon-blue/20 backdrop-blur-sm border border-neon-blue/50 hover:bg-neon-blue/30 transition-all duration-300">
                          <ExternalLink className="w-5 h-5 text-neon-blue" />
                        </button>
                        <button className="p-3 rounded-full bg-neon-purple/20 backdrop-blur-sm border border-neon-purple/50 hover:bg-neon-purple/30 transition-all duration-300">
                          <Github className="w-5 h-5 text-neon-purple" />
                        </button>
                        <button className="p-3 rounded-full bg-neon-green/20 backdrop-blur-sm border border-neon-green/50 hover:bg-neon-green/30 transition-all duration-300">
                          <Play className="w-5 h-5 text-neon-green" />
                        </button>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-${project.color}/20 border border-${project.color}/50 backdrop-blur-sm`}>
                      <span className={`text-xs font-medium text-${project.color}`}>{project.category}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-3 text-${project.color} transition-all duration-700 ${isVisible ? 'neon-text-scroll active neon-glow group-hover:neon-flicker' : 'neon-text-scroll neon-glow'}`}>
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4 transition-all duration-300 group-hover:text-foreground">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2 text-foreground">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-secondary/50 rounded-md text-muted-foreground border border-border/50"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
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
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <button className={`group px-12 py-4 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 hover:border-neon-blue transition-all duration-500 button-hover ${headerVisible ? 'neon-text-scroll active hover:animate-pulse-neon' : 'neon-text-scroll'}`}>
              <span className="text-neon-blue font-medium group-hover:text-neon-purple transition-colors duration-300">
                View All Projects
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
