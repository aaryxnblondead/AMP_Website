import React from 'react';
import { Link } from 'react-router-dom';

export const History: React.FC = () => {
  const milestones = [
    { year: 2007, title: 'AMP Founded', description: 'Association of Muslim Professionals established in Mumbai' },
    { year: 2009, title: 'Expansion Begins', description: 'AMP expands to 5 states with growing volunteer base' },
    { year: 2011, title: 'SDL Program Launch', description: 'Skill Development Lectures started across multiple cities' },
    { year: 2013, title: 'Zakat Fund Established', description: 'AMP Zakat Fund (AZF) launched to support community welfare' },
    { year: 2015, title: '50,000+ Lives Impacted', description: 'Milestone of 50,000 beneficiaries reached' },
    { year: 2017, title: '10th Anniversary', description: 'Decade of service with presence in 15 states' },
    { year: 2019, title: 'NTS Program Launch', description: 'National Talent Search competition initiated' },
    { year: 2021, title: 'Digital Transformation', description: 'Online programs and digital resources launched' },
    { year: 2023, title: '500,000+ Beneficiaries', description: 'Half a million lives touched through various programs' },
    { year: 2025, title: 'Continued Growth', description: '19 states, 96+ chapters, expanding reach nationwide' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/about" className="hover:text-primary-700"> About Us</Link> / 
          <span className="text-neutral-900"> History & Milestones</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">Our Journey Since 2007</h1>
        <p className="text-lg text-neutral-700">Nearly two decades of service, empowerment, and community development</p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">The Beginning</h2>
        <p className="text-neutral-700 mb-4">
          The Association of Muslim Professionals (AMP) was founded in 2007 in Mumbai with a clear vision: to empower 
          the community through education, skill development, and economic opportunities. What started as a small group 
          of dedicated professionals has grown into one of India's most impactful community organizations.
        </p>
        <p className="text-neutral-700 mb-4">
          Our headquarters at 68/69 Umar Manzil, 5th Road, Khar (W), Mumbai 400052, has been the epicenter of countless 
          initiatives that have touched over 500,000 lives across 19 states in India.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Our Timeline</h2>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
              </div>
              <div className="flex-grow border-l-4 border-primary-200 pl-6 pb-6">
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">{milestone.title}</h3>
                <p className="text-neutral-700">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Key Achievements Over the Years</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-cream-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-primary-700 mb-3">Education Impact</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>• 1+ lakh students benefit annually from SDL</li>
              <li>• 582 scholarships awarded for higher education</li>
              <li>• 607 orphans supported through education</li>
              <li>• 80+ locations with regular SDL activities</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-primary-700 mb-3">Employment Support</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>• 15,000+ candidates placed through job fairs</li>
              <li>• 25+ major job fairs conducted</li>
              <li>• 250+ job drives completed</li>
              <li>• 200+ self-employment beneficiaries</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-primary-700 mb-3">Community Development</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>• ₹5+ Crore distributed through Zakat Fund</li>
              <li>• 10,000+ monthly reach through career guidance</li>
              <li>• Support for widows and elderly</li>
              <li>• Healthcare and medical assistance</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-primary-700 mb-3">Geographic Expansion</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>• Presence in 19 states</li>
              <li>• 96+ active chapters</li>
              <li>• 500+ dedicated volunteers</li>
              <li>• Reaching 600+ districts</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Recognition & Awards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-neutral-200 rounded-lg">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Community Service Awards</h3>
            <p className="text-sm text-neutral-700">Recognized for exceptional community work</p>
          </div>
          <div className="text-center p-6 border border-neutral-200 rounded-lg">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Education Excellence</h3>
            <p className="text-sm text-neutral-700">Awards for educational initiatives</p>
          </div>
          <div className="text-center p-6 border border-neutral-200 rounded-lg">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Social Impact</h3>
            <p className="text-sm text-neutral-700">Recognition for community empowerment</p>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Be Part of Our Story</h2>
        <p className="mb-6">Join us in writing the next chapter of AMP's journey</p>
        <div className="flex justify-center gap-4">
          <Link to="/volunteer" className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
            Become a Volunteer
          </Link>
          <Link to="/donate" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700">
            Support Our Mission
          </Link>
        </div>
      </div>
    </div>
  );
};
