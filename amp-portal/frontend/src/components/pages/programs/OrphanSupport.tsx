import React from 'react';
import { Link } from 'react-router-dom';

export const OrphanSupport: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/programs" className="hover:text-primary-700"> Programs</Link> / 
          <span className="text-neutral-900"> Orphan Education Support</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">Orphan Education Support</h1>
        <p className="text-lg text-neutral-700">Ensuring every child has access to quality education</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">607</div>
          <div className="text-neutral-600">Orphans Currently Supported</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">500+</div>
          <div className="text-neutral-600">Total Beneficiaries</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">100%</div>
          <div className="text-neutral-600">Education Coverage</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About the Program</h2>
        <p className="text-neutral-700 mb-4">
          AMP's Orphan Education Support Program is dedicated to ensuring that children who have lost one or both parents 
          don't lose their right to quality education. We currently support 607 orphans across India, providing them with 
          comprehensive educational assistance from primary school through higher education.
        </p>
        <p className="text-neutral-700 mb-4">
          Our program covers not just tuition fees but also school supplies, uniforms, books, and other educational necessities. 
          We believe that every child deserves an equal opportunity to learn, grow, and achieve their potential, regardless of 
          their circumstances.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">What We Provide</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-3xl">📚</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">School Fees</h3>
              <p className="text-neutral-700">Complete coverage of tuition and admission fees</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📖</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Books & Stationery</h3>
              <p className="text-neutral-700">All required textbooks and study materials</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">👕</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Uniforms</h3>
              <p className="text-neutral-700">School uniforms and sports dress</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🎒</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">School Supplies</h3>
              <p className="text-neutral-700">Bags, shoes, and other essential supplies</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🍽️</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Meal Support</h3>
              <p className="text-neutral-700">Nutrition support for better learning</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">👨‍🏫</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Tutorial Assistance</h3>
              <p className="text-neutral-700">Additional coaching when needed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Eligibility Criteria</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Orphan Status</h3>
            <p className="text-neutral-700">Child must have lost one or both parents</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Age Requirement</h3>
            <p className="text-neutral-700">Children aged 5-18 years enrolled in school</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Financial Need</h3>
            <p className="text-neutral-700">Family unable to afford educational expenses</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Documentation</h3>
            <p className="text-neutral-700">Valid death certificate(s) and guardian information</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Education Levels Covered</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">🏫</div>
            <h3 className="font-semibold text-primary-700 mb-2">Primary</h3>
            <p className="text-sm text-neutral-700">Classes 1-5</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold text-primary-700 mb-2">Upper Primary</h3>
            <p className="text-sm text-neutral-700">Classes 6-8</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="font-semibold text-primary-700 mb-2">Secondary</h3>
            <p className="text-sm text-neutral-700">Classes 9-10</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-semibold text-primary-700 mb-2">Higher Secondary</h3>
            <p className="text-sm text-neutral-700">Classes 11-12</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">How to Apply</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Submit Application</h3>
            <p className="text-sm text-neutral-700">Fill out the support application form with child and guardian details</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Provide Documents</h3>
            <p className="text-sm text-neutral-700">Submit required certificates and proof of orphan status</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Get Support</h3>
            <p className="text-sm text-neutral-700">Approved children receive continuous educational support</p>
          </div>
        </div>
      </div>

      <div className="bg-cream-100 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">Sponsor an Orphan's Education</h2>
        <p className="text-neutral-700 mb-6">
          You can make a lasting impact in a child's life by sponsoring their education. Your contribution will cover 
          all educational expenses for an entire year, giving a child the gift of learning and a brighter future.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-700 mb-2">₹15,000/year</div>
            <div className="text-sm text-neutral-600">Primary Education</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-700 mb-2">₹20,000/year</div>
            <div className="text-sm text-neutral-600">Secondary Education</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-700 mb-2">₹25,000/year</div>
            <div className="text-sm text-neutral-600">Higher Secondary</div>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Support a Child's Education</h2>
        <p className="mb-6">Help us ensure that no child is denied education due to circumstances beyond their control</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
            Apply for Support
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700">
            Sponsor a Child
          </button>
        </div>
      </div>
    </div>
  );
};
