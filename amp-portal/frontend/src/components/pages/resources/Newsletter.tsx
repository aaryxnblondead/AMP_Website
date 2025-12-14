import React from 'react';
import { Link } from 'react-router-dom';

export const Newsletter: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">AMP Connect Newsletter</h1>
        <p className="text-lg text-neutral-700">Stay updated with AMP's activities, programs, and success stories</p>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-display font-bold mb-4">Subscribe to ampConnect</h2>
        <p className="mb-6">Get monthly updates delivered to your inbox</p>
        <div className="flex gap-4">
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

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Latest Edition</h2>
        <div className="border border-neutral-200 p-6 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-2">ampConnect - March 2025</h3>
              <p className="text-neutral-600">Monthly Newsletter</p>
            </div>
            <button className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800">
              Download PDF
            </button>
          </div>
          <p className="text-neutral-700 mb-4">
            Highlights: NTS 2025 launch, Job Fair success in Srinagar, New scholarship program announcements, 
            Chapter activities across states, and inspiring success stories from our beneficiaries.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Newsletter Archive</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['February 2025', 'January 2025', 'December 2024', 'November 2024', 'October 2024', 'September 2024'].map((month) => (
            <div key={month} className="border border-neutral-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-neutral-900 mb-2">{month}</h3>
              <button className="text-primary-700 text-sm underline">View/Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
