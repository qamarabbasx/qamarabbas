
import React from 'react';

const Blog: React.FC = () => {
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

  return (
    <section id="blog" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neon-green animate-glow">Latest</span>{' '}
              <span className="text-foreground">Blog Posts</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Insights and tutorials on modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className={`group neon-border rounded-lg p-6 bg-card/50 hover:bg-card/80 transition-all duration-500 cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 text-${post.color} neon-glow group-hover:animate-glow`}>
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-sm text-neon-blue hover:text-neon-purple transition-colors neon-glow">
                    Read more →
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="neon-border px-8 py-3 rounded-lg text-neon-blue hover:text-neon-purple transition-all duration-300 neon-glow hover:animate-pulse-neon">
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
