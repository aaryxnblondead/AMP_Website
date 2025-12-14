import React from 'react';
import { Link } from 'react-router-dom';

export const NGOConferences: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <nav className="text-xs sm:text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/events" className="hover:text-primary-700"> Events</Link> / 
          <span className="text-neutral-900"> NGO Conferences</span>
        </nav>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary-700 mb-3 sm:mb-4">AMP NGO Conferences 2025</h1>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-700">Bringing NGOs together for collaboration and growth</p>
      </div>

      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-lg p-6 sm:p-8 mb-6 sm:mb-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4">Save the Date!</h2>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">15-16 November 2025</div>
          <p className="text-base sm:text-lg lg:text-xl mb-4">📍 Lucknow, Uttar Pradesh</p>
          <button className="bg-white text-primary-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors w-full sm:w-auto">
            Register Now
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About the Conference</h2>
        <p className="text-neutral-700 mb-4">
          AMP NGO Conferences 2025 is a premier gathering of NGOs, social organizations, and community leaders from across 
          India. This two-day event provides a platform for networking, knowledge sharing, and collaborative planning to 
          strengthen the social sector.
        </p>
        <p className="text-neutral-700">
          Join us in Lucknow for inspiring keynotes, practical workshops, panel discussions, and opportunities to connect 
          with like-minded organizations working towards social change.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 mb-4 sm:mb-6">Conference Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex gap-4">
            <div className="text-3xl">🎤</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Keynote Speakers</h3>
              <p className="text-neutral-700">Industry leaders and social change makers sharing insights</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Interactive Workshops</h3>
              <p className="text-neutral-700">Hands-on sessions on fundraising, management, and impact</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🤝</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Networking Sessions</h3>
              <p className="text-neutral-700">Connect with 200+ NGOs and potential partners</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📊</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Panel Discussions</h3>
              <p className="text-neutral-700">Expert panels on current challenges and solutions</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🏆</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Awards Ceremony</h3>
              <p className="text-neutral-700">Recognizing outstanding NGO achievements</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📚</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Resource Fair</h3>
              <p className="text-neutral-700">Access to funding opportunities and resources</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Conference Themes</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Digital Transformation</h3>
            <p className="text-sm text-neutral-700">Leveraging technology for greater impact</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Sustainable Funding</h3>
            <p className="text-sm text-neutral-700">Innovative fundraising and financial sustainability</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Collaborative Impact</h3>
            <p className="text-sm text-neutral-700">Building partnerships for systemic change</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Measuring Impact</h3>
            <p className="text-sm text-neutral-700">Data-driven approaches to demonstrate results</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Leadership Development</h3>
            <p className="text-sm text-neutral-700">Building strong leadership in social sector</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Policy Advocacy</h3>
            <p className="text-sm text-neutral-700">Influencing policy for social change</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-card p-8">
          <h2 className="text-xl font-display font-bold text-neutral-900 mb-4">For Attendees</h2>
          <ul className="space-y-3 text-neutral-700">
            <li>✅ Access to all conference sessions</li>
            <li>✅ Conference materials and resources</li>
            <li>✅ Meals and refreshments</li>
            <li>✅ Networking opportunities</li>
            <li>✅ Certificate of participation</li>
            <li>✅ Post-conference resources</li>
          </ul>
          <div className="mt-6">
            <div className="text-2xl font-bold text-primary-700 mb-2">₹2,500 per person</div>
            <p className="text-sm text-neutral-600 mb-4">Early bird discount: ₹2,000 (until Sept 30)</p>
            <button className="w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800">
              Register as Attendee
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-card p-8">
          <h2 className="text-xl font-display font-bold text-neutral-900 mb-4">For Sponsors</h2>
          <p className="text-neutral-700 mb-4">
            Partner with us to reach 200+ NGOs and community organizations. Various sponsorship packages available.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-semibold">Title Sponsor</span>
              <span className="text-primary-700">₹5 Lakh</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-semibold">Platinum Sponsor</span>
              <span className="text-primary-700">₹3 Lakh</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-semibold">Gold Sponsor</span>
              <span className="text-primary-700">₹2 Lakh</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Silver Sponsor</span>
              <span className="text-primary-700">₹1 Lakh</span>
            </div>
          </div>
          <button className="w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800">
            Become a Sponsor
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Call for Speakers</h2>
        <p className="text-neutral-700 mb-4">
          We invite NGO leaders, social entrepreneurs, and sector experts to share their knowledge and experiences. 
          Submit your proposal for keynote speeches, panel participation, or workshop facilitation.
        </p>
        <button className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800">
          Submit Speaker Proposal
        </button>
      </div>

      <div className="bg-cream-100 rounded-lg p-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">Stay Updated</h2>
        <p className="text-neutral-700 mb-6">
          Get the latest updates about the conference including agenda, speakers, and logistics.
        </p>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-700"
          />
          <button className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
