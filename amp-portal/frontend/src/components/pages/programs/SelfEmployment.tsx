import React from 'react';
import { Link } from 'react-router-dom';

export const SelfEmployment: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/programs" className="hover:text-primary-700"> Programs</Link> / 
          <span className="text-neutral-900"> Self-Employment Schemes</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">Self-Employment Schemes</h1>
        <p className="text-lg text-neutral-700">Empowering entrepreneurs to build their own businesses</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">200+</div>
          <div className="text-neutral-600">Beneficiaries (5 Years)</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">85%</div>
          <div className="text-neutral-600">Success Rate</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">₹50L+</div>
          <div className="text-neutral-600">Total Financial Support</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About Self-Employment Program</h2>
        <p className="text-neutral-700 mb-4">
          AMP's Self-Employment Scheme is designed to help aspiring entrepreneurs start and grow their own businesses. 
          Over the past 5 years, we have supported over 200 individuals in establishing successful self-employment ventures 
          across various sectors.
        </p>
        <p className="text-neutral-700 mb-4">
          Our comprehensive support includes business training, mentoring, financial assistance, and ongoing guidance. 
          We focus on helping individuals from economically weaker sections become self-reliant and create employment 
          opportunities for others in their communities.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Program Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-3xl">💰</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Financial Assistance</h3>
              <p className="text-neutral-700">Microfinance and low-interest loans for business setup</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📚</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Business Training</h3>
              <p className="text-neutral-700">Comprehensive training on business management and operations</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">👨‍💼</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Mentorship</h3>
              <p className="text-neutral-700">One-on-one mentoring from experienced entrepreneurs</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📈</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Business Planning</h3>
              <p className="text-neutral-700">Help in creating detailed business plans and strategies</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🤝</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Market Linkages</h3>
              <p className="text-neutral-700">Connect with suppliers, distributors, and customers</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📊</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Ongoing Support</h3>
              <p className="text-neutral-700">Continuous guidance for business growth and sustainability</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Business Categories Supported</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🏪 Retail & Trading</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• General Store</li>
              <li>• Garment Shop</li>
              <li>• Mobile Shop</li>
              <li>• Grocery Store</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🍲 Food & Catering</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Restaurant</li>
              <li>• Catering Service</li>
              <li>• Bakery</li>
              <li>• Food Truck</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">⚙️ Manufacturing</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Tailoring Unit</li>
              <li>• Handicrafts</li>
              <li>• Food Processing</li>
              <li>• Packaging</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🔧 Service Sector</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Repair Services</li>
              <li>• Beauty Salon</li>
              <li>• Coaching Classes</li>
              <li>• Event Management</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🌾 Agriculture</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Dairy Farming</li>
              <li>• Poultry</li>
              <li>• Organic Farming</li>
              <li>• Nursery</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">💻 Digital Services</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Computer Center</li>
              <li>• E-commerce</li>
              <li>• Digital Marketing</li>
              <li>• Online Tutoring</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Eligibility Criteria</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Age Requirement</h3>
            <p className="text-neutral-700">Between 18-50 years of age</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Financial Status</h3>
            <p className="text-neutral-700">Annual family income below ₹5 lakhs</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Business Idea</h3>
            <p className="text-neutral-700">Clear and viable business plan or idea</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Commitment</h3>
            <p className="text-neutral-700">Willingness to undergo training and follow guidance</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Application Process</h2>
        <div className="grid md:grid-cols-5 gap-3">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
            <h3 className="font-semibold text-sm text-neutral-900 mb-1">Apply</h3>
            <p className="text-xs text-neutral-700">Submit application with business idea</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
            <h3 className="font-semibold text-sm text-neutral-900 mb-1">Screening</h3>
            <p className="text-xs text-neutral-700">Committee reviews application</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
            <h3 className="font-semibold text-sm text-neutral-900 mb-1">Training</h3>
            <p className="text-xs text-neutral-700">Attend business training program</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
            <h3 className="font-semibold text-sm text-neutral-900 mb-1">Funding</h3>
            <p className="text-xs text-neutral-700">Receive financial assistance</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">5</div>
            <h3 className="font-semibold text-sm text-neutral-900 mb-1">Launch</h3>
            <p className="text-xs text-neutral-700">Start business with ongoing support</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-neutral-200 p-6 rounded-lg">
            <p className="text-neutral-700 italic mb-4">
              "With AMP's support, I started my own tailoring business. Today I employ 5 women from my community and 
              have a stable income. This program changed my family's future."
            </p>
            <div className="font-semibold text-neutral-900">Rukhsana Begum</div>
            <div className="text-sm text-neutral-600">Tailoring Business Owner, Delhi</div>
          </div>
          <div className="border border-neutral-200 p-6 rounded-lg">
            <p className="text-neutral-700 italic mb-4">
              "The business training and mentorship I received through AMP helped me establish a successful mobile shop. 
              I'm now financially independent and support my family comfortably."
            </p>
            <div className="font-semibold text-neutral-900">Mohammad Irfan</div>
            <div className="text-sm text-neutral-600">Mobile Shop Owner, Lucknow</div>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Start Your Entrepreneurial Journey</h2>
        <p className="mb-6">Apply for self-employment assistance and become your own boss</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
            Apply Now
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};
