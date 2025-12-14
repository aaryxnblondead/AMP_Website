import React from 'react';
import { Link } from 'react-router-dom';

export const NationalTalentSearch: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-lg p-6 sm:p-8 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">AMP National Talent Search 2025</h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-2">6th Edition</p>
        <p className="text-sm sm:text-base lg:text-lg">India's Largest Educational Talent Hunt</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">2+ Lakh</div>
          <div className="text-neutral-600">Expected Participants</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">600+</div>
          <div className="text-neutral-600">Districts Covered</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">1,200+</div>
          <div className="text-neutral-600">Exam Centers</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">₹5 Lakh+</div>
          <div className="text-neutral-600">Total Prize Money</div>
        </div>
      </div>

      <div className="bg-primary-50 border-l-4 border-primary-700 p-6 mb-8">
        <h3 className="font-display font-bold text-primary-700 text-xl mb-2">📞 Daily Helpline Meetings</h3>
        <p className="text-neutral-700">Join us Monday to Saturday, 5-6 PM IST for queries and guidance</p>
        <p className="text-neutral-700">Contact: <span className="font-semibold">nts@ampindia.org</span> | <span className="font-semibold">8657003081</span></p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About NTS 2025</h2>
        <p className="text-neutral-700 mb-4">
          The AMP National Talent Search (NTS) 2025 is India's premier educational competition, now in its 6th edition. 
          This year's examination is conducted in offline/physical mode at over 1,200 centers across 600+ districts nationwide.
        </p>
        <p className="text-neutral-700 mb-4">
          With expected participation from over 2 lakh students, NTS 2025 aims to identify and nurture academic talent across 
          school, junior college, and undergraduate levels. Top performers receive cash prizes, academic scholarships, and 
          prestigious e-certificates.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Eligibility & Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-cream-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-primary-700 mb-3">🏫 School Category</h3>
            <ul className="text-sm text-neutral-700 space-y-2">
              <li>• Class 8th</li>
              <li>• Class 9th</li>
              <li>• Class 10th</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-primary-700 mb-3">🎓 Junior College</h3>
            <ul className="text-sm text-neutral-700 space-y-2">
              <li>• Class 11th</li>
              <li>• Class 12th</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-primary-700 mb-3">🏆 Undergraduate</h3>
            <ul className="text-sm text-neutral-700 space-y-2">
              <li>• 1st Year</li>
              <li>• 2nd Year</li>
              <li>• 3rd Year</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Prizes & Rewards</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-700 pl-4 bg-cream-100 p-4 rounded-r-lg">
            <h3 className="font-semibold text-neutral-900 mb-2">💰 Total Prize Pool: ₹5 Lakh+</h3>
            <p className="text-neutral-700">Cash prizes for top performers in each category</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4 bg-cream-100 p-4 rounded-r-lg">
            <h3 className="font-semibold text-neutral-900 mb-2">🎓 Academic Scholarships</h3>
            <p className="text-neutral-700">Scholarships for outstanding performers to pursue higher education</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4 bg-cream-100 p-4 rounded-r-lg">
            <h3 className="font-semibold text-neutral-900 mb-2">📜 e-Certificates</h3>
            <p className="text-neutral-700">Digital certificates for Top 50 National Winners</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Registration Methods</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-neutral-200 rounded-lg">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Online Registration</h3>
            <p className="text-sm text-neutral-700 mb-4">Register through our website</p>
            <button className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 text-sm">
              Register Now
            </button>
          </div>
          <div className="text-center p-6 border border-neutral-200 rounded-lg">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Mobile App</h3>
            <p className="text-sm text-neutral-700 mb-4">Download our mobile app</p>
            <button className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 text-sm">
              Download App
            </button>
          </div>
          <div className="text-center p-6 border border-neutral-200 rounded-lg">
            <div className="text-4xl mb-4">🏫</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Bulk Registration</h3>
            <p className="text-sm text-neutral-700 mb-4">For schools & colleges</p>
            <button className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 text-sm">
              Bulk Register
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Exam Centers & Locations</h2>
        <p className="text-neutral-700 mb-4">
          NTS 2025 will be conducted at 1,200+ examination centers across 600+ districts in all Indian states. 
          Find the nearest exam center to you using our center locator.
        </p>
        <button className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800">
          Find Exam Center Near You
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Preparation Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📚</div>
            <h3 className="font-semibold text-neutral-900 mb-1">Syllabus</h3>
            <p className="text-xs text-neutral-700 mb-2">Download complete syllabus</p>
            <button className="text-primary-700 text-sm underline">Download</button>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📝</div>
            <h3 className="font-semibold text-neutral-900 mb-1">Sample Papers</h3>
            <p className="text-xs text-neutral-700 mb-2">Practice with sample questions</p>
            <button className="text-primary-700 text-sm underline">Download</button>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🎥</div>
            <h3 className="font-semibold text-neutral-900 mb-1">Video Tutorials</h3>
            <p className="text-xs text-neutral-700 mb-2">Watch preparation videos</p>
            <button className="text-primary-700 text-sm underline">Watch</button>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📖</div>
            <h3 className="font-semibold text-neutral-900 mb-1">Study Guides</h3>
            <p className="text-xs text-neutral-700 mb-2">Comprehensive study materials</p>
            <button className="text-primary-700 text-sm underline">Access</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Partnership Opportunities</h2>
        <p className="text-neutral-700 mb-4">Join us as a partner in India's largest educational initiative:</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Sponsors', 'Institution Partners', 'Exam Centers', 'Mobilization Partners', 'Volunteers', 'Observers'].map((partner) => (
            <div key={partner} className="border border-primary-200 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-primary-700">{partner}</h3>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800">
            Become a Partner
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-card p-8">
          <h2 className="text-xl font-display font-bold text-neutral-900 mb-4">Important Dates</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-neutral-700">Registration Opens</span>
              <span className="font-semibold text-primary-700">Dec 1, 2024</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-neutral-700">Last Date to Register</span>
              <span className="font-semibold text-primary-700">Feb 28, 2025</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-neutral-700">Hall Ticket Release</span>
              <span className="font-semibold text-primary-700">Mar 15, 2025</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-neutral-700">Exam Date</span>
              <span className="font-semibold text-primary-700">Apr 6, 2025</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-700">Results Announcement</span>
              <span className="font-semibold text-primary-700">May 15, 2025</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-card p-8">
          <h2 className="text-xl font-display font-bold text-neutral-900 mb-4">Quick Links</h2>
          <div className="space-y-3">
            <Link to="/nts/register" className="block p-3 bg-cream-100 rounded-lg hover:bg-cream-200">
              📝 Student Registration
            </Link>
            <Link to="/nts/hall-ticket" className="block p-3 bg-cream-100 rounded-lg hover:bg-cream-200">
              🎫 Download Hall Ticket
            </Link>
            <Link to="/nts/results" className="block p-3 bg-cream-100 rounded-lg hover:bg-cream-200">
              🏆 Check Results
            </Link>
            <Link to="/nts/faq" className="block p-3 bg-cream-100 rounded-lg hover:bg-cream-200">
              ❓ FAQ
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Register for NTS 2025 Now!</h2>
        <p className="text-lg mb-6">Don't miss India's biggest educational opportunity. Register today!</p>
        <button className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100">
          Register for NTS 2025
        </button>
      </div>
    </div>
  );
};
