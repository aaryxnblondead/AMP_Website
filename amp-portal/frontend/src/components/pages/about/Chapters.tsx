import React from 'react';
import { Link } from 'react-router-dom';

export const Chapters: React.FC = () => {
  const states = [
    { name: 'Maharashtra', chapters: 25, districts: 15 },
    { name: 'Uttar Pradesh', chapters: 18, districts: 12 },
    { name: 'Karnataka', chapters: 12, districts: 8 },
    { name: 'Tamil Nadu', chapters: 10, districts: 7 },
    { name: 'Telangana', chapters: 8, districts: 5 },
    { name: 'Rajasthan', chapters: 7, districts: 6 },
    { name: 'Andhra Pradesh', chapters: 6, districts: 4 },
    { name: 'Gujarat', chapters: 5, districts: 4 },
    { name: 'Madhya Pradesh', chapters: 4, districts: 3 },
    { name: 'West Bengal', chapters: 3, districts: 2 },
    { name: 'Delhi', chapters: 2, districts: 1 },
    { name: 'Haryana', chapters: 2, districts: 2 },
    { name: 'Punjab', chapters: 1, districts: 1 },
    { name: 'Jharkhand', chapters: 1, districts: 1 },
    { name: 'Odisha', chapters: 1, districts: 1 },
    { name: 'Assam', chapters: 1, districts: 1 },
    { name: 'Goa', chapters: 1, districts: 1 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/about" className="hover:text-primary-700"> About Us</Link> / 
          <span className="text-neutral-900"> Chapters Directory</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">AMP Chapters Across India</h1>
        <p className="text-lg text-neutral-700">Our presence in 19 states with 96+ active chapters</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">19</div>
          <div className="text-neutral-600">States</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">96+</div>
          <div className="text-neutral-600">Chapters</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">500+</div>
          <div className="text-neutral-600">Volunteers</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About AMP Chapters</h2>
        <p className="text-neutral-700 mb-4">
          AMP chapters are the backbone of our organization, bringing our programs and initiatives to local communities 
          across India. Each chapter is led by dedicated volunteers who work tirelessly to implement AMP's mission at 
          the grassroots level.
        </p>
        <p className="text-neutral-700">
          Our chapters organize Skill Development Lectures, Career Guidance sessions, Job Fairs, and various community 
          development programs tailored to local needs.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-display font-bold text-neutral-900">State-wise Chapters</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search state or city..." 
              className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {states.map((state) => (
            <div key={state.name} className="border border-neutral-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-primary-700 mb-2">{state.name}</h3>
              <div className="text-sm text-neutral-600 space-y-1">
                <p>📍 {state.chapters} Chapters</p>
                <p>🗺️ {state.districts} Districts</p>
              </div>
              <button className="mt-3 text-primary-700 text-sm underline hover:text-primary-900">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Chapter Activities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Skill Development Lectures</h3>
            <p className="text-neutral-700">Regular SDL sessions in Mathematics, Science, English, and more</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Career Guidance Programs</h3>
            <p className="text-neutral-700">Career counseling and entrance exam guidance</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Community Events</h3>
            <p className="text-neutral-700">Social gatherings and community development initiatives</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Volunteer Drives</h3>
            <p className="text-neutral-700">Recruitment and training of local volunteers</p>
          </div>
        </div>
      </div>

      <div className="bg-cream-100 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">Start a Chapter in Your City</h2>
        <p className="text-neutral-700 mb-6">
          If AMP doesn't have a presence in your city yet, you can help us start a new chapter. As a chapter lead, 
          you'll bring AMP's programs to your community and make a real difference in people's lives.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Step 1</h3>
            <p className="text-sm text-neutral-700">Express interest and submit application</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Step 2</h3>
            <p className="text-sm text-neutral-700">Attend orientation and training</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Step 3</h3>
            <p className="text-sm text-neutral-700">Launch chapter and start activities</p>
          </div>
        </div>
        <button className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800">
          Apply to Start a Chapter
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Contact Chapters</h2>
        <p className="text-neutral-700 mb-4">
          To get in touch with a specific chapter or learn about activities in your area, please contact:
        </p>
        <div className="space-y-2">
          <p className="text-neutral-700">📧 Email: <span className="font-semibold">chapters@ampindia.org</span></p>
          <p className="text-neutral-700">📞 Phone: <span className="font-semibold">+91-7303116660</span></p>
        </div>
      </div>
    </div>
  );
};
