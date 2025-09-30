import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: '01',
      title: 'Welcome to the Terminal',
      date: '2024-01-15',
      preview: 'Welcome to my personal terminal interface. This website is built to feel like you\'re accessing a Vault-Tec terminal...',
      readTime: '3 min read'
    },
    {
      id: '02',
      title: 'Building a Fallout-Style Terminal in React',
      date: '2024-01-10',
      preview: 'A deep dive into creating authentic retro terminal interfaces using modern web technologies...',
      readTime: '8 min read'
    },
    {
      id: '03',
      title: 'The Art of Command Line Interfaces',
      date: '2024-01-05',
      preview: 'Why CLI applications are making a comeback in the age of modern web development...',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="text-terminal-green space-y-6">
      <div className="text-2xl text-shadow-terminal-lg mb-6">
        ┌─ BLOG ARCHIVE ──────────────────┐
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="border border-terminal-green/30 p-4 rounded-sm hover:bg-terminal-green/5 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl text-terminal-green text-shadow-terminal">
                [{post.id}] {post.title}
              </h2>
              <div className="text-right text-sm text-terminal-green/70">
                <div>{post.date}</div>
                <div>{post.readTime}</div>
              </div>
            </div>
            
            <p className="text-terminal-green/90 mb-4 leading-relaxed">
              {post.preview}
            </p>
            
            <div className="flex justify-between items-center">
              <button className="text-terminal-green hover:text-terminal-amber transition-colors text-shadow-terminal text-sm">
                → Read Full Post
              </button>
              <div className="flex gap-4 text-xs text-terminal-green/60">
                <span>Tags: terminal, web-dev, react</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 p-4 border border-terminal-green/30 rounded-sm bg-terminal-green/5">
        <h3 className="text-terminal-green text-shadow-terminal mb-2">
          [BLOG STATISTICS]
        </h3>
        <div className="text-terminal-green/90 space-y-1 text-sm">
          <p>Total Posts: {blogPosts.length}</p>
          <p>Average Read Time: 5.3 minutes</p>
          <p>Most Recent: {blogPosts[0].date}</p>
          <p>Topics: Web Development, Terminal UIs, React</p>
        </div>
      </div>

      <div className="mt-6 p-4 border border-terminal-amber/50 rounded-sm bg-terminal-amber/5">
        <h3 className="text-terminal-amber text-shadow-terminal mb-2">
          [SUBSCRIPTION NOTICE]
        </h3>
        <p className="text-terminal-amber/90 text-sm">
          Want to stay updated? Follow me on GitHub or connect on LinkedIn for notifications 
          when new posts are published.
        </p>
      </div>

      <div className="text-terminal-green/70 text-sm">
        └─────────────────────────────────┘
        <br />
        Archive last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default Blog;
