import React from 'react';
import { Link } from 'react-router-dom';

export const CareerGuidance: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/programs" className="hover:text-primary-700"> Programs</Link> / 
          <span className="text-neutral-900"> Career Guidance</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">Career Guidance & Counseling</h1>
        <p className="text-lg text-neutral-700">Empowering students with the right career information and guidance</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">50+</div>
          <div className="text-neutral-600">Locations with Activities</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">10,000+</div>
          <div className="text-neutral-600">Students Monthly Reach</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">100+</div>
          <div className="text-neutral-600">Expert Counselors</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About Career Guidance Program</h2>
        <p className="text-neutral-700 mb-4">
          AMP's Career Guidance Program is designed to help students make informed decisions about their educational and professional paths. 
          With activities at 50+ locations, we reach over 10,000 students every month, providing them with comprehensive career counseling and resources.
        </p>
        <p className="text-neutral-700 mb-4">
          Our program covers various educational streams including Science, Commerce, Arts, and Professional courses. 
          We provide detailed information about course options, entrance exams, career prospects, and skill requirements.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Services Offered</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">One-on-One Counseling</h3>
            <p className="text-neutral-700">Personalized career guidance sessions with experienced counselors</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Career Chart Resources</h3>
            <p className="text-neutral-700">Comprehensive career path charts for various educational streams</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Aptitude Testing</h3>
            <p className="text-neutral-700">Scientific aptitude tests to identify strengths and interests</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Entrance Exam Guidance</h3>
            <p className="text-neutral-700">Information and preparation support for major entrance exams</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Stream Selection</h3>
            <p className="text-neutral-700">Guidance for choosing the right educational stream after 10th and 12th</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Career Seminars</h3>
            <p className="text-neutral-700">Regular seminars featuring industry professionals and experts</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Educational Streams Covered</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Science Stream</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Engineering</li>
              <li>• Medical</li>
              <li>• Pure Sciences</li>
              <li>• Technology</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Commerce Stream</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• CA/CS/CMA</li>
              <li>• Banking & Finance</li>
              <li>• Business Administration</li>
              <li>• Economics</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Arts/Humanities</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Law</li>
              <li>• Journalism</li>
              <li>• Social Sciences</li>
              <li>• Psychology</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Professional Courses</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Design</li>
              <li>• Hotel Management</li>
              <li>• Aviation</li>
              <li>• Fashion</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Need Career Guidance?</h2>
        <p className="mb-6">Connect with our expert counselors and make informed career decisions</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
            Book a Session
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700">
            Download Career Charts
          </button>
        </div>
      </div>
    </div>
  );
};
