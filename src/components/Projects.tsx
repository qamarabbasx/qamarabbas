import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

const Projects: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollTrigger({ 
    threshold: 0.2,
    rootMargin: '-50px'
  });
  const { toast } = useToast();
  const [selectedProject, setSelectedProject] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleGithubClick = React.useCallback(() => {
    toast({
      title: "Contact Developer",
      description: "Please contact me to see the source code for this project.",
    });
    
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000);
  }, [toast]);

  const handlePreviewClick = React.useCallback((project: any) => {
    if (project.url) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  }, []);

  const projects = React.useMemo(() => [
    {
      title: "TaskPay — Secure Service Contracting Platform",
      description: "Built a scalable platform using Next.js and Google Cloud, supporting thousands of real-time transactions weekly. Integrated ACH, Wire, RTP payments via IBANERA, NMI, and PayPal, increasing success rates by 30%.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      tech: ["Nest.js", "Next.js", "GCP", "Fireblocks", "NMI", "PayPal", "PostgreSQL"],
      category: "Full Stack",
      url: "https://taskpay.com"
    },
    {
      title: "CryptoDailySplit — Daily Crypto Investment Platform",
      description: "Built with Lovable AI, a modern platform for daily cryptocurrency investment tracking and portfolio management. Features real-time crypto data, investment splitting algorithms, and comprehensive portfolio analytics.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=center",
      tech: ["React", "Vite", "Tailwind CSS", "TypeScript", "Lovable"],
      category: "SaaS",
      url: "https://cryptodailysplit.com/"
    },

    {
      title: "Clone Hub — AI-Powered Digital Engagement Platform",
      description: "Developed a SaaS product with Next.js and PostgreSQL, powering over 10,000 AI clones for 24/7 audience engagement. Boosted user retention by 40% with monetization via subscriptions and pay-per-use.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center",
      tech: ["Nest.js", "Next.js", "PostgreSQL", "AI/ML"],
      category: "SaaS",
      url: "https://clonehub.com"
    },
    {
      title: "AAA Protect — Comprehensive Protection Platform",
      description: "Engineered a full-service platform using Next.js, Nest.js, and MongoDB, serving 5,000+ commercial drivers. Integrated Stripe for secure payment handling, increasing transaction success by 30%.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
      tech: ["Nest.js", "Next.js", "MongoDB", "Stripe"],
      category: "Enterprise",
      url: "https://aaaprotect.com/"
    },
    {
      title: "Warehouse Management System",
      description: "Developed a centralized warehouse management system integrated with Amazon, Shopify, and Walmart, reducing order errors by 40% and streamlining inventory workflows.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center",
      tech: ["Node.js", "Express", "React", "MySQL", "MongoDB"],
      category: "Enterprise"
    },
    {
      title: "Custom Shopify Apps",
      description: "Led development of custom Shopify apps using Gadget.dev platform, enabling seamless e-commerce integrations and increasing merchant adoption by 40%.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&crop=center",
      tech: ["Node.js", "Gadget.dev", "Shopify API", "Express"],
      category: "E-commerce",
      url: "https://carecart.io/"
    }
  ], []);

  const categories = React.useMemo(() => ["All", "Full Stack", "SaaS", "Enterprise", "E-commerce"], []);
  const [activeCategory, setActiveCategory] = React.useState("All");

  // Create stable scroll triggers for each project
  const projectScrollTriggers = projects.map((_, index) => 
    useScrollTrigger({ 
      threshold: 0.1,
      rootMargin: '-100px'
    })
  );

  const filteredProjects = React.useMemo(() => 
    activeCategory === "All" 
      ? projects 
      : projects.filter(project => project.category === activeCategory),
    [activeCategory, projects]
  );

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={headerRef} 
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-blue-500 font-medium text-lg">- My Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Showcasing real-world applications and technical expertise in modern web development
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
              const { elementRef, isVisible } = projectScrollTriggers[originalIndex];
              
              return (
                <div
                  key={project.title}
                  ref={elementRef}
                  className={`group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-out transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } hover:shadow-2xl hover:-translate-y-2`}
                  style={{ 
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                  }}
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
                        <button 
                          onClick={() => handlePreviewClick(project)}
                          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                          disabled={!project.url}
                        >
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                        <button 
                          onClick={handleGithubClick}
                          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </button>
                        {project.url && (
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                          >
                            <ExternalLink className="w-5 h-5 text-white" />
                          </a>
                        )}
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
        </div>
      </div>

      {/* Preview Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl w-full h-[90vh] p-0 gap-0">
          <DialogHeader className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 shrink-0">
            <DialogTitle className="text-base font-medium text-left">
              {selectedProject?.title} - Live Preview
            </DialogTitle>
            <DialogDescription className="sr-only">
              Live preview of {selectedProject?.title}
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 min-h-0 p-1">
            {selectedProject?.url && (
              <iframe
                src={selectedProject.url}
                className="w-full h-full border-0 rounded-lg"
                title={`Preview of ${selectedProject.title}`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
