
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollTrigger({ threshold: 0.3 });

  const projects = [
    {
      title: "TaskJoy — Secure Service Contracting Platform",
      description: "Full-stack platform for secure service contracting with real-time features and comprehensive backend architecture.",
      image: "/placeholder.svg",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      category: "Full Stack"
    },
    {
      title: "Commercial Real Estate Platform",
      description: "Engineered full-service platform with advanced property management and integrated payment systems.",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web App"
    },
    {
      title: "University Management System",
      description: "Comprehensive university management system with student tracking and administrative features.",
      image: "/placeholder.svg",
      tech: ["MERN Stack", "Express.js", "MongoDB"],
      category: "Enterprise"
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile application with modern UI and seamless shopping experience.",
      image: "/placeholder.svg",
      tech: ["React Native", "Node.js", "MongoDB"],
      category: "Mobile"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard with advanced filtering and reporting capabilities.",
      image: "/placeholder.svg",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      category: "Dashboard"
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chat application with natural language processing and machine learning integration.",
      image: "/placeholder.svg",
      tech: ["Next.js", "OpenAI", "WebSocket", "Redis"],
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
    <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-blue-500 font-medium text-lg">- My Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise in modern web development
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
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
                  className={`group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:-translate-y-2`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                          <Github className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-4 rounded-full transition-colors duration-300 font-medium">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
