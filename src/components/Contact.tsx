
import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "reply.qamar@gmail.com",
      href: "mailto:reply.qamar@gmail.com",
      color: "neon-blue"
    },
    {
      label: "Phone",
      value: "+92415456642",
      href: "tel:+92415456642",
      color: "neon-purple"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/qamar-abbas-software-engineer",
      href: "https://linkedin.com/in/qamar-abbas-software-engineer",
      color: "neon-green"
    },
    {
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#",
      color: "neon-pink"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neon-pink animate-glow">Get In</span>{' '}
              <span className="text-foreground">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-semibold mb-6 text-neon-blue neon-glow">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="group flex items-center space-x-4 p-4 rounded-lg neon-border hover:bg-card/50 transition-all duration-300"
                    >
                      <div className={`w-3 h-3 rounded-full bg-${info.color} shadow-[0_0_10px] shadow-${info.color}/50`} />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a
                          href={info.href}
                          className={`text-${info.color} neon-glow hover:animate-glow transition-all duration-300`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-fade-in-up delay-300">
                <h3 className="text-2xl font-semibold mb-6 text-neon-purple neon-glow">
                  Let's Build Something Amazing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a full-stack developer, technical consultation, or 
                  want to discuss innovative ideas, feel free to reach out!
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up delay-500">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px] focus:shadow-neon-blue/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px] focus:shadow-neon-blue/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-neon-blue focus:outline-none focus:shadow-[0_0_10px] focus:shadow-neon-blue/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg bg-neon-blue/10 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300 neon-glow hover:animate-pulse-neon"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
