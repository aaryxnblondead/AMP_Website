import React from 'react';
import { Link } from 'react-router-dom';

export const Webinars: React.FC = () => {
  const upcomingWebinars = [
    {
      title: 'Career Planning After 12th: A Complete Guide',
      date: 'Dec 20, 2024',
      time: '6:00 PM IST',
      speaker: 'Career Counseling Expert',
      topics: ['Stream selection', 'Entrance exams', 'Career paths']
    },
    {
      title: 'Scholarship Opportunities for Higher Education',
      date: 'Dec 25, 2024',
      time: '5:00 PM IST',
      speaker: 'Education Consultant',
      topics: ['Government scholarships', 'Private scholarships', 'Application process']
    },
    {
      title: 'Job Interview Skills Workshop',
      date: 'Dec 28, 2024',
      time: '7:00 PM IST',
      speaker: 'HR Professional',
      topics: ['Interview preparation', 'Common questions', 'Body language']
    },
  ];

  const pastWebinars = [
    { title: 'NTS 2025 Preparation Strategy', date: 'Dec 5, 2024', views: 5000 },
    { title: 'Financial Planning for Students', date: 'Nov 28, 2024', views: 3500 },
    { title: 'Entrepreneurship Basics', date: 'Nov 20, 2024', views: 4200 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/events" className="hover:text-primary-700"> Events</Link> / 
          <span className="text-neutral-900"> Webinars</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">AMP Webinars & Online Sessions</h1>
        <p className="text-lg text-neutral-700">Learn from experts, anytime, anywhere</p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Upcoming Webinars</h2>
        <div className="space-y-6">
          {upcomingWebinars.map((webinar, index) => (
            <div key={index} className="border border-neutral-200 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">{webinar.title}</h3>
                  <div className="text-sm text-neutral-600 space-y-1 mb-3">
                    <p>📅 {webinar.date} | ⏰ {webinar.time}</p>
                    <p>👨‍🏫 {webinar.speaker}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {webinar.topics.map((topic, i) => (
                      <span key={i} className="px-3 py-1 bg-cream-100 text-neutral-700 text-sm rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-800 whitespace-nowrap ml-4">
                  Register Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Past Webinars - Watch Recordings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pastWebinars.map((webinar, index) => (
            <div key={index} className="border border-neutral-200 p-4 rounded-lg">
              <div className="h-40 bg-cream-100 rounded-lg mb-4 flex items-center justify-center text-4xl">
                🎥
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">{webinar.title}</h3>
              <p className="text-sm text-neutral-600 mb-3">{webinar.date} | {webinar.views.toLocaleString()} views</p>
              <button className="w-full border-2 border-primary-700 text-primary-700 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50">
                Watch Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Webinar Categories</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🎓</div>
            <h3 className="font-semibold text-neutral-900 mb-1">Education</h3>
            <p className="text-xs text-neutral-700">Career guidance & study tips</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">💼</div>
            <h3 className="font-semibold text-neutral-900 mb-1">Employment</h3>
            <p className="text-xs text-neutral-700">Job skills & interview prep</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-semibold text-neutral-900 mb-1">Financial</h3>
            <p className="text-xs text-neutral-700">Money management & planning</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-semibold text-neutral-900 mb-1">Entrepreneurship</h3>
            <p className="text-xs text-neutral-700">Starting & growing business</p>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Never Miss a Webinar</h2>
        <p className="mb-6">Subscribe to get notifications about upcoming webinars</p>
        <div className="flex justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-neutral-900 focus:outline-none"
          />
          <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
