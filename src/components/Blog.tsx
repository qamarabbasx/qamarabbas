
import React from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollTrigger({ threshold: 0.3 });

  const posts = [
    {
      title: "Building Scalable MERN Applications",
      excerpt: "Best practices for architecting scalable full-stack applications using the MERN stack. Learn from real-world experience with TaskPay and Clone Hub projects.",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      category: "Development",
      slug: "building-scalable-mern-applications"
    },
    {
      title: "Modern React Patterns & Hooks",
      excerpt: "Exploring advanced React patterns and custom hooks for better code organization. Insights from building high-performance user interfaces.",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "React",
      slug: "modern-react-patterns-hooks"
    },
    {
      title: "Database Optimization Strategies",
      excerpt: "Techniques for optimizing database performance in Node.js applications. Real-world strategies that improved our API response times by 30%.",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      category: "Backend",
      slug: "database-optimization-strategies"
    }
  ];

  // Create individual scroll triggers for each blog post with proper typing
  const postRefs = posts.map(() => useScrollTrigger<HTMLAnchorElement>({ threshold: 0.3 }));

  return (
    <section id="blog" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={headerRef} className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-blue-500 font-medium text-lg">- My Blog</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Insights and tutorials on modern web development and software engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const { elementRef, isVisible } = postRefs[index];
              
              return (
                <Link
                  key={index}
                  to={`/blog/${post.slug}`}
                  ref={elementRef}
                  className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:-translate-y-2 block`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-blue-500 font-medium group-hover:text-blue-600 transition-colors duration-300">
                      <span className="mr-2">Read more</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              More articles coming soon! Follow my journey in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
