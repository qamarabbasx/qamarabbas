
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import { Download, MapPin, Calendar, Mail } from 'lucide-react';

const About: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollTrigger({ threshold: 0.3 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollTrigger({ threshold: 0.2 });
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollTrigger({ threshold: 0.4 });

  const personalInfo = [
    { icon: Calendar, label: "Age", value: "25" },
    { icon: MapPin, label: "Residence", value: "Pakistan" },
    { icon: Mail, label: "Address", value: "Lahore" },
  ];

  const skills = [
    { name: "React.js", percentage: 95 },
    { name: "Node.js", percentage: 90 },
    { name: "MongoDB", percentage: 85 },
    { name: "TypeScript", percentage: 88 },
    { name: "Next.js", percentage: 82 },
    { name: "PostgreSQL", percentage: 80 },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neon-blue blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-neon-purple blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-neon-green blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div ref={titleRef} className={`text-center mb-20 section-fade ${titleVisible ? 'visible' : ''}`}>
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden neon-border bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-4xl font-bold text-neon-blue">QA</span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-green rounded-full animate-pulse shadow-[0_0_20px] shadow-neon-green/50"></div>
            </div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 ${titleVisible ? 'neon-text-scroll active' : 'neon-text-scroll'}`}>
              <span className={`text-neon-blue ${titleVisible ? 'scroll-glow active' : 'scroll-glow'}`}>Qamar</span>{' '}
              <span className="text-foreground">Abbas</span>
            </h1>
            
            <div className="relative inline-block">
              <p className={`text-xl md:text-2xl text-muted-foreground mb-8 transition-all duration-700 ${titleVisible ? 'scroll-glow active' : 'scroll-glow'}`}>
                Software Engineer & Full Stack Developer
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
            </div>
          </div>
          
          <div ref={contentRef} className={`section-fade ${contentVisible ? 'visible' : ''}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* About Content */}
              <div className="space-y-8">
                <div>
                  <h2 className={`text-3xl font-semibold mb-6 text-neon-purple transition-all duration-700 ${contentVisible ? 'neon-text-scroll active' : 'neon-text-scroll'}`}>
                    About Me
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Backend-focused Full Stack Developer with 4+ years of experience in the MERN stack, 
                      specializing in technical architecture and scalable API development.
                    </p>
                    <p>
                      Proficient in building robust server-side logic, integrating modern frontend interfaces, 
                      and delivering high-performance web applications that scale with business needs.
                    </p>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 gap-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg neon-border hover:bg-card/50 transition-all duration-300 card-hover">
                      <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-neon-blue" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">{info.label}</span>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="group flex items-center space-x-3 px-8 py-4 rounded-lg bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 hover:border-neon-blue transition-all duration-500 button-hover">
                  <Download className="w-5 h-5 text-neon-blue group-hover:animate-bounce" />
                  <span className="text-neon-blue font-medium">Download CV</span>
                </button>
              </div>
              
              {/* Skills Section */}
              <div ref={skillsRef} className="space-y-8">
                <h3 className={`text-2xl font-semibold text-neon-green transition-all duration-700 ${skillsVisible ? 'neon-text-scroll active' : 'neon-text-scroll'}`}>
                  My Skills
                </h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className={`skill-item transition-all duration-700 delay-${index * 100}`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-neon-blue text-sm">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-1000 shadow-[0_0_10px] shadow-neon-blue/30 ${skillsVisible ? 'skill-animate' : 'w-0'}`}
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%',
                            animationDelay: `${index * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`neon-border rounded-lg p-6 bg-card/50 transition-all duration-700 ${skillsVisible ? 'card-glow active' : 'card-glow'}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-blue/20 flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-neon-green">4+ Years</h4>
                      <p className="text-sm text-muted-foreground">Experience</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Specialized in scalable backend architectures and modern frontend frameworks.
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
