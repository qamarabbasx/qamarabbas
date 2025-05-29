
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollTrigger({ threshold: 0.3 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollTrigger({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "reply.qamar@gmail.com",
      href: "mailto:reply.qamar@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+923415456062",
      href: "tel:+923415456062"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/qamar-abbas-8138b911a/",
      href: "https://linkedin.com/in/qamar-abbas-8138b911a/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/qamarabbasx",
      href: "https://github.com/qamarabbasx"
    }
  ];

  // Create individual scroll triggers for each contact info item
  const contactRefs = [...contactInfo, ...socialLinks].map(() => useScrollTrigger({ threshold: 0.5 }));

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-blue-500 font-medium text-lg">- Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
              Contact Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <div ref={contentRef} className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  Backend-focused Full-Stack Developer with 4+ years of experience. 
                  Always interested in new opportunities and exciting projects. 
                  Whether you need backend architecture, scalable APIs, or full-stack development, 
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const { elementRef, isVisible } = contactRefs[index];
                  
                  return (
                    <div
                      key={index}
                      ref={elementRef}
                      className={`flex items-center space-x-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-gray-900 dark:text-white font-medium hover:text-blue-500 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const { elementRef, isVisible } = contactRefs[contactInfo.length + index];
                    
                    return (
                      <div
                        key={index}
                        ref={elementRef}
                        className={`flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                        style={{ animationDelay: `${(contactInfo.length + index) * 100}ms` }}
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <social.icon className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{social.label}</p>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 dark:text-white font-medium hover:text-blue-500 transition-colors duration-300 text-sm"
                          >
                            {social.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Me a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Project discussion"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-300"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-medium flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
