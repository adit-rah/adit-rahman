import React from 'react';
import StreamingText from '../components/StreamingText';

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

  let blogContent = `BLOG ARCHIVE
=========================================

`;

  blogPosts.forEach((post) => {
    blogContent += `[${post.id}] ${post.title}
DATE: ${post.date} | READ TIME: ${post.readTime}

${post.preview}

TAGS: TERMINAL, WEB-DEV, REACT

=========================================

`;
  });

  blogContent += `BLOG STATISTICS:
TOTAL POSTS: ${blogPosts.length}
AVERAGE READ TIME: 5.3 MINUTES
MOST RECENT: ${blogPosts[0].date}
TOPICS: WEB DEVELOPMENT, TERMINAL UIs, REACT

SUBSCRIPTION NOTICE:
WANT TO STAY UPDATED? FOLLOW ON GITHUB OR
CONNECT ON LINKEDIN FOR NOTIFICATIONS WHEN
NEW POSTS ARE PUBLISHED.

=========================================
ARCHIVE LAST UPDATED: ${new Date().toLocaleDateString()}`;

  return (
    <div className="text-terminal-green font-mono leading-tight whitespace-pre-line">
      <StreamingText 
        text={blogContent}
        speed={25}
        startDelay={400}
      />
    </div>
  );
};

export default Blog;
