import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring large React applications with proper state management and component architecture.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "Architecture", "Best Practices"]
    },
    {
      id: 2,
      title: "Modern CSS Techniques with Tailwind",
      excerpt: "Exploring advanced Tailwind CSS features and how to create maintainable, responsive designs.",
      date: "2024-01-08",
      readTime: "4 min read",
      tags: ["CSS", "Tailwind", "Design"]
    },
    {
      id: 3,
      title: "Node.js Performance Optimization",
      excerpt: "Techniques for optimizing Node.js applications including caching, database optimization, and memory management.",
      date: "2024-01-01",
      readTime: "7 min read",
      tags: ["Node.js", "Performance", "Backend"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Thoughts on web development, technology, and software engineering
        </p>
      </header>

      <div className="space-y-8 mb-12">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>{post.readTime}</span>
            </div>

            <div className="mt-4">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Stay Updated</h3>
        <p className="text-gray-600 mb-6">
          Subscribe to get notified when new posts are published. I write about 
          web development, best practices, and the latest in technology.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r hover:bg-blue-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          Use the terminal to navigate: type other commands to explore more sections
        </p>
      </div>
    </div>
  );
};

export default Blog;