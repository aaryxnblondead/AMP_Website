import React from 'react';
import { Link } from 'react-router-dom';

export const Team: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/about" className="hover:text-primary-700"> About Us</Link> / 
          <span className="text-neutral-900"> Our Team & Leadership</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">Our Team & Leadership</h1>
        <p className="text-lg text-neutral-700">Meet the dedicated individuals leading AMP's mission across India</p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">National Executive Committee</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-neutral-200 rounded-lg">
            <div className="w-32 h-32 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <h3 className="font-semibold text-lg text-neutral-900 mb-1">National President</h3>
            <p className="text-sm text-neutral-600 mb-2">Leading AMP's National Operations</p>
            <button className="text-primary-700 text-sm underline">View Profile</button>
          </div>
          <div className="text-center p-6 border border-neutral-200 rounded-lg">
            <div className="w-32 h-32 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <h3 className="font-semibold text-lg text-neutral-900 mb-1">General Secretary</h3>
            <p className="text-sm text-neutral-600 mb-2">Coordinating AMP Activities</p>
            <button className="text-primary-700 text-sm underline">View Profile</button>
          </div>
          <div className="text-center p-6 border border-neutral-200 rounded-lg">
            <div className="w-32 h-32 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <h3 className="font-semibold text-lg text-neutral-900 mb-1">National Treasurer</h3>
            <p className="text-sm text-neutral-600 mb-2">Managing Financial Operations</p>
            <button className="text-primary-700 text-sm underline">View Profile</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">State Presidents</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Maharashtra', 'Uttar Pradesh', 'Karnataka', 'Tamil Nadu', 'Telangana', 'Rajasthan', 'Andhra Pradesh', 'Gujarat', 'Madhya Pradesh', 'West Bengal', 'Delhi', 'Haryana'].map((state) => (
            <div key={state} className="p-4 border border-neutral-200 rounded-lg">
              <h3 className="font-semibold text-primary-700 mb-1">{state}</h3>
              <p className="text-sm text-neutral-600">State President</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Advisory Board</h2>
        <p className="text-neutral-700 mb-6">
          Our Advisory Board comprises distinguished professionals, academicians, and community leaders who guide 
          AMP's strategic direction and ensure excellence in our programs.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-cream-100 rounded-lg">
            <h3 className="font-semibold text-neutral-900 mb-1">Education Advisory Panel</h3>
            <p className="text-sm text-neutral-700">Leading educators and academicians</p>
          </div>
          <div className="p-4 bg-cream-100 rounded-lg">
            <h3 className="font-semibold text-neutral-900 mb-1">Corporate Advisory Panel</h3>
            <p className="text-sm text-neutral-700">Senior business leaders and entrepreneurs</p>
          </div>
          <div className="p-4 bg-cream-100 rounded-lg">
            <h3 className="font-semibold text-neutral-900 mb-1">Social Welfare Advisory Panel</h3>
            <p className="text-sm text-neutral-700">Social workers and community leaders</p>
          </div>
          <div className="p-4 bg-cream-100 rounded-lg">
            <h3 className="font-semibold text-neutral-900 mb-1">Legal Advisory Panel</h3>
            <p className="text-sm text-neutral-700">Legal experts and advocates</p>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Join Our Team</h2>
        <p className="mb-6">Be part of a dedicated team working towards community empowerment</p>
        <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
          View Career Opportunities
        </button>
      </div>
    </div>
  );
};
