import React from 'react';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
  const posts = [
    {
      title: 'How to Choose the Right Career Path After 12th',
      category: 'Career Guidance',
      date: 'Dec 10, 2024',
      excerpt: 'Comprehensive guide to help students make informed decisions about their future careers...',
      image: '📚'
    },
    {
      title: 'Success Stories: From SDL to IIT',
      category: 'Success Stories',
      date: 'Dec 8, 2024',
      excerpt: 'Read how AMP SDL helped students crack competitive exams and secure admissions in top institutions...',
      image: '🎓'
    },
    {
      title: 'Understanding Zakat: A Complete Guide',
      category: 'Islamic Finance',
      date: 'Dec 5, 2024',
      excerpt: 'Learn about Zakat calculation, distribution, and its importance in Islamic philanthropy...',
      image: '💰'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">AMP Blog & Articles</h1>
        <p className="text-lg text-neutral-700">Insights, stories, and guidance from the AMP community</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <button className="px-4 py-2 bg-primary-700 text-white rounded-lg font-semibold">All Posts</button>
        <button className="px-4 py-2 bg-white border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50">Career Guidance</button>
        <button className="px-4 py-2 bg-white border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50">Success Stories</button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-card overflow-hidden">
            <div className="h-48 bg-cream-100 flex items-center justify-center text-6xl">
              {post.image}
            </div>
            <div className="p-6">
              <div className="text-sm text-primary-700 font-semibold mb-2">{post.category}</div>
              <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">{post.title}</h3>
              <p className="text-sm text-neutral-600 mb-2">{post.date}</p>
              <p className="text-neutral-700 mb-4">{post.excerpt}</p>
              <Link to={`/resources/blog/${index}`} className="text-primary-700 font-semibold hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
