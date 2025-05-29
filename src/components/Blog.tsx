
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const Blog: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollTrigger({ threshold: 0.3 });

  const posts = [
    {
      title: "Building Scalable MERN Applications",
      excerpt: "Best practices for architecting scalable full-stack applications using the MERN stack.",
      date: "2024-01-15",
      readTime: "8 min read",
      color: "neon-blue"
    },
    {
      title: "Modern React Patterns & Hooks",
      excerpt: "Exploring advanced React patterns and custom hooks for better code organization.",
      date: "2024-01-10",
      readTime: "6 min read",
      color: "neon-purple"
    },
    {
      title: "Database Optimization Strategies",
      excerpt: "Techniques for optimizing database performance in Node.js applications.",
      date: "2024-01-05",
      readTime: "10 min read",
      color: "neon-green"
    }
  ];

  // Create individual scroll triggers for each blog post
  const postRefs = posts.map(() => useScrollTrigger({ threshold: 0.3 }));

  return (
    <section id="blog" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={headerRef} className={`text-center mb-16 section-fade ${headerVisible ? 'visible' : ''}`}>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${headerVisible ? 'neon-text-scroll active' : 'neon-text-scroll'}`}>
              <span className={`text-neon-green ${headerVisible ? 'scroll-glow active animate-glow' : 'scroll-glow'}`}>Latest</span>{' '}
              <span className="text-foreground">Blog Posts</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Insights and tutorials on modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const { elementRef, isVisible } = postRefs[index];
              
              return (
                <article
                  key={index}
                  ref={elementRef}
                  className={`group neon-border rounded-lg p-6 bg-card/50 hover:bg-card/80 transition-all duration-700 cursor-pointer card-hover section-fade ${isVisible ? 'visible card-glow active' : 'card-glow'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3 transition-all duration-300 group-hover:text-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 text-${post.color} transition-all duration-700 ${isVisible ? 'neon-text-scroll active neon-glow group-hover:neon-flicker' : 'neon-text-scroll neon-glow'}`}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <span className={`text-sm text-neon-blue hover:text-neon-purple transition-all duration-500 ${isVisible ? 'neon-text-scroll active' : 'neon-text-scroll'} cursor-pointer`}>
                      Read more →
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className={`neon-border px-8 py-3 rounded-lg text-neon-blue hover:text-neon-purple button-hover ${headerVisible ? 'neon-text-scroll active hover:animate-pulse-neon' : 'neon-text-scroll'}`}>
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
