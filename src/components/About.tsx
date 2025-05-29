
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import { Download, MapPin, Calendar, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollTrigger({ threshold: 0.3 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollTrigger({ threshold: 0.2 });
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollTrigger({ threshold: 0.4 });

  const personalInfo = [
    { icon: Calendar, label: "Age", value: "25 Years" },
    { icon: MapPin, label: "Residence", value: "Pakistan" },
    { icon: Mail, label: "Address", value: "Lahore" },
    { icon: Phone, label: "Phone", value: "+92415456642" },
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
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div ref={titleRef} className={`relative transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <div className="w-96 h-96 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-2">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-blue-500 flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold text-white">QA</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Qamar Abbas</h3>
                      <p className="text-gray-600 dark:text-gray-300">Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div ref={contentRef} className={`transition-all duration-1000 delay-300 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-8">
                <div>
                  <span className="text-blue-500 font-medium text-lg">- Nice to meet you!</span>
                  <h1 className="text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                    Qamar Abbas
                  </h1>
                  <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
                    Software Engineer & Full Stack Developer
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    Backend-focused Full Stack Developer with 4+ years of experience in the MERN stack, 
                    specializing in technical architecture and scalable API development. Proficient in building 
                    robust server-side logic, integrating modern frontend interfaces, and delivering 
                    high-performance web applications that scale with business needs.
                  </p>
                </div>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <info.icon className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 block">{info.label}</span>
                        <span className="font-medium text-gray-800 dark:text-white">{info.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full transition-colors duration-300">
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Download CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div ref={skillsRef} className={`mt-20 transition-all duration-1000 delay-600 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h3>
              <p className="text-gray-600 dark:text-gray-300">What I bring to the table</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-200 dark:text-gray-700"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - (skillsVisible ? skill.percentage : 0) / 100)}`}
                        className="text-blue-500 transition-all duration-2000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{skill.percentage}%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
