import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

interface Discussion {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  replies: number;
  views: number;
  lastActivity: string;
  isPinned?: boolean;
  isResolved?: boolean;
}

export const Discussions: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewTopicForm, setShowNewTopicForm] = useState(false);

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📌', count: 156 },
    { id: 'education', name: 'Education & Career', icon: '🎓', count: 45 },
    { id: 'scholarships', name: 'Scholarships & Funding', icon: '💰', count: 32 },
    { id: 'jobs', name: 'Job Opportunities', icon: '💼', count: 28 },
    { id: 'ngo', name: 'NGO Connect', icon: '🤝', count: 24 },
    { id: 'programs', name: 'AMP Programs', icon: '📚', count: 18 },
    { id: 'general', name: 'General Discussion', icon: '💬', count: 9 },
  ];

  const discussions: Discussion[] = [
    {
      id: 1,
      title: 'Tips for NTS 2025 Preparation - Share Your Strategy',
      description: 'Let\'s share effective preparation strategies for the upcoming National Talent Search exam...',
      category: 'education',
      author: 'Ahmad Khan',
      replies: 23,
      views: 456,
      lastActivity: '2 hours ago',
      isPinned: true,
    },
    {
      id: 2,
      title: 'Scholarship Application Deadline Extended - Important Update',
      description: 'Great news! The scholarship application deadline has been extended to January 15th...',
      category: 'scholarships',
      author: 'AMP Admin',
      replies: 12,
      views: 289,
      lastActivity: '3 hours ago',
      isPinned: true,
    },
    {
      id: 3,
      title: 'How to prepare for technical interviews?',
      description: 'I have an upcoming interview for a software engineer position. What are the best ways to prepare?',
      category: 'jobs',
      author: 'Rahul Sharma',
      replies: 34,
      views: 892,
      lastActivity: '5 hours ago',
      isResolved: true,
    },
    {
      id: 4,
      title: 'Looking for NGO partners for education initiative in Bihar',
      description: 'Our NGO is planning an education initiative and looking for partners in Bihar region...',
      category: 'ngo',
      author: 'Fatima Siddiqui',
      replies: 8,
      views: 234,
      lastActivity: '1 day ago',
    },
    {
      id: 5,
      title: 'SDL Schedule for Mumbai - December 2024',
      description: 'Can someone share the complete SDL schedule for Mumbai chapters?',
      category: 'programs',
      author: 'Zainab Ali',
      replies: 15,
      views: 567,
      lastActivity: '1 day ago',
      isResolved: true,
    },
    {
      id: 6,
      title: 'Career options after B.Com - Need guidance',
      description: 'I\'m in final year B.Com and confused about career options. Should I go for CA, MBA, or job?',
      category: 'education',
      author: 'Arif Patel',
      replies: 42,
      views: 1203,
      lastActivity: '2 days ago',
    },
    {
      id: 7,
      title: 'Job Fair Experience - Lucknow 2024',
      description: 'Just attended the AMP job fair in Lucknow. Here\'s my experience and some tips...',
      category: 'jobs',
      author: 'Imran Ahmed',
      replies: 19,
      views: 678,
      lastActivity: '2 days ago',
    },
    {
      id: 8,
      title: 'Zakat distribution - How to apply?',
      description: 'What are the requirements and process to apply for Zakat assistance through AMP?',
      category: 'general',
      author: 'Ayesha Begum',
      replies: 6,
      views: 345,
      lastActivity: '3 days ago',
      isResolved: true,
    },
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary-700 mb-2">Discussion Corner</h1>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-700">Connect, share, and learn from the AMP community</p>
          </div>
          <Button 
            onClick={() => setShowNewTopicForm(true)}
            className="whitespace-nowrap w-full sm:w-auto"
          >
            + New Topic
          </Button>
        </div>
      </div>

      {/* New Topic Form Modal */}
      {showNewTopicForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-neutral-900">Start New Discussion</h2>
              <button 
                onClick={() => setShowNewTopicForm(false)}
                className="text-neutral-500 hover:text-neutral-700 text-2xl flex-shrink-0 ml-2"
              >
                ×
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Category *</label>
                <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700">
                  <option value="">Select a category</option>
                  <option value="education">Education & Career</option>
                  <option value="scholarships">Scholarships & Funding</option>
                  <option value="jobs">Job Opportunities</option>
                  <option value="ngo">NGO Connect</option>
                  <option value="programs">AMP Programs</option>
                  <option value="general">General Discussion</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Title *</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
                  placeholder="Enter a clear and descriptive title"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Description *</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
                  placeholder="Describe your topic in detail..."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary-700 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
                >
                  Post Topic
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewTopicForm(false)}
                  className="flex-1 border-2 border-neutral-300 text-neutral-700 py-2 sm:py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-card p-4 sm:p-6 mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-display font-bold text-neutral-900 mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-3 sm:p-4 rounded-lg text-center transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-700 text-white'
                  : 'bg-cream-100 text-neutral-800 hover:bg-cream-200'
              }`}
            >
              <div className="text-xl sm:text-2xl mb-1">{category.icon}</div>
              <div className="text-xs sm:text-sm font-semibold line-clamp-2">{category.name}</div>
              <div className="text-[10px] sm:text-xs mt-1 opacity-75">{category.count} topics</div>
            </button>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-card p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 text-sm sm:text-base"
            />
          </div>
          <select className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 text-sm sm:text-base">
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="replies">Most Replied</option>
            <option value="views">Most Viewed</option>
          </select>
        </div>
      </div>

      {/* Discussion Topics */}
      <div className="bg-white rounded-lg shadow-card overflow-hidden">
        <div className="bg-cream-100 px-6 py-4 border-b border-neutral-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-display font-bold text-neutral-900">
              {selectedCategory === 'all' ? 'All Discussions' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-sm text-neutral-600">{filteredDiscussions.length} topics</span>
          </div>
        </div>

        <div className="divide-y divide-neutral-200">
          {filteredDiscussions.map((discussion) => (
            <div key={discussion.id} className="p-6 hover:bg-neutral-50 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg">
                    {discussion.author.charAt(0)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {discussion.isPinned && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">
                            📌 Pinned
                          </span>
                        )}
                        {discussion.isResolved && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                            ✓ Resolved
                          </span>
                        )}
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-cream-100 text-neutral-700">
                          {categories.find(c => c.id === discussion.category)?.icon} {categories.find(c => c.id === discussion.category)?.name}
                        </span>
                      </div>
                      <Link 
                        to={`/discussions/${discussion.id}`}
                        className="text-lg font-semibold text-neutral-900 hover:text-primary-700 mb-1 block"
                      >
                        {discussion.title}
                      </Link>
                      <p className="text-neutral-600 text-sm mb-2 line-clamp-2">{discussion.description}</p>
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <span>👤 {discussion.author}</span>
                        <span>💬 {discussion.replies} replies</span>
                        <span>👁️ {discussion.views} views</span>
                        <span>🕒 {discussion.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDiscussions.length === 0 && (
          <div className="p-12 text-center">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No discussions found</h3>
            <p className="text-neutral-600 mb-6">Try adjusting your search or category filter</p>
            <button 
              onClick={() => setShowNewTopicForm(true)}
              className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800"
            >
              Start a New Discussion
            </button>
          </div>
        )}
      </div>

      {/* Community Guidelines */}
      <div className="mt-8 bg-cream-100 rounded-lg p-6">
        <h3 className="font-display font-bold text-neutral-900 mb-3">💡 Community Guidelines</h3>
        <ul className="text-sm text-neutral-700 space-y-2">
          <li>✓ Be respectful and courteous to all community members</li>
          <li>✓ Stay on topic and contribute meaningful discussions</li>
          <li>✓ Search before posting to avoid duplicate topics</li>
          <li>✓ Use clear, descriptive titles for your posts</li>
          <li>✓ Mark topics as resolved when your question is answered</li>
          <li>✗ No spam, promotional content, or offensive language</li>
        </ul>
      </div>
    </div>
  );
};
