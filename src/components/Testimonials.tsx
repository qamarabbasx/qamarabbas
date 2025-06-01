
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const Testimonials = () => {
  const { elementRef, isVisible } = useScrollTrigger();

  const testimonials = [
    {
      id: 1,
      name: "Ali Abbas",
      role: "Senior Technical Project Manager",
      company: "Vaival Technologies",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGPIDcF-6l3ug/profile-displayphoto-shrink_200_200/B56Zb4UR86HUAc-/0/1747922795426?e=1754524800&v=beta&t=NY2OdgnR1t-dRA_w6LqV7mLkbvyR4dVDuwcND_u4OPw",
      text: "Qamar's outstanding Node.js capabilities, combined with his punctuality, professionalism, and leadership qualities, make him an invaluable asset to any development team. I highly recommend him for any project requiring top-tier Node.js expertise and effective team leadership.",
      linkedinUrl: "https://www.linkedin.com/in/aliabbaspasha/"
    },
    {
      id: 2,
      name: "Muhammad Arsalan",
      role: "Team Lead",
      company: "Vaival Technologies",
      image: "https://media.licdn.com/dms/image/v2/D4D35AQHa3QKbTAjoLg/profile-framedphoto-shrink_200_200/B4DZV_BDkeHwAc-/0/1741592738398?e=1749409200&v=beta&t=y1f1-5h06NzYRZjGQ4b9UTrLlIOa9Sfh86rvw-JZohQ",
      text: "Qamar is not only technically proficient but also a great problem solver who approaches issues with a strategic mindset. His attention to detail, ability to write clean and scalable code, and commitment to delivering high-quality solutions make him an invaluable asset to any team.",
      linkedinUrl: "https://www.linkedin.com/in/muhammad-arsalan-5334a2164/"
    },
    {
      id: 3,
      name: "Nimra Haider",
      role: "Lead Developer",
      company: "Black Lion Innovations Group",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFEdMrKtMXeRA/profile-displayphoto-shrink_200_200/B4DZWO3trtG8Ag-/0/1741858725821?e=1754524800&v=beta&t=Y_XBu7yGU3BYyQQ39owK7E0XfrWi2iEsRdUe36okBMA",
      text: "Qamar consistently impressed me with his strong technical skills, particularly in areas such as database management and server-side scripting. His attention to detail and problem-solving abilities were evident in every task he undertook. I wholeheartedly recommend him for any backend development role.",
      linkedinUrl: "https://www.linkedin.com/in/nimrahaider320/"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={elementRef}
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What People Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it. Here's what colleagues and clients have to say about working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 200}ms` : '0ms' 
                }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-border"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-blue-500">{testimonial.company}</p>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                  >
                    View on LinkedIn →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to add your recommendation?
            </p>
            <a
              href="https://www.linkedin.com/in/qamar-abbas-8138b911a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
