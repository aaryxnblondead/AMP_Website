import React from 'react';
import { Link } from 'react-router-dom';

export const Scholarships: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/programs" className="hover:text-primary-700"> Programs</Link> / 
          <span className="text-neutral-900"> Higher Education Scholarships</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">Higher Education Scholarships</h1>
        <p className="text-lg text-neutral-700">Empowering deserving students to pursue their dreams</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">582</div>
          <div className="text-neutral-600">Scholarships Awarded</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">₹2+ Cr</div>
          <div className="text-neutral-600">Total Support Provided</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">15+</div>
          <div className="text-neutral-600">Fields Covered</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About the Scholarship Program</h2>
        <p className="text-neutral-700 mb-4">
          AMP's Higher Education Scholarship Program is designed to support meritorious students from economically weaker sections 
          who aspire to pursue professional courses. With 582 scholarships awarded so far, we have helped students achieve their 
          dreams in fields like Medicine, Engineering, Law, Management, and many more.
        </p>
        <p className="text-neutral-700 mb-4">
          Our scholarships cover tuition fees, living expenses, and other educational costs, ensuring that financial constraints 
          don't stand in the way of a student's academic aspirations. We believe in investing in talented individuals who will 
          contribute to society and their communities.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Fields of Study Covered</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🏥 Medical Sciences</h3>
            <p className="text-sm text-neutral-700">MBBS, BDS, Pharmacy, Nursing</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">⚙️ Engineering</h3>
            <p className="text-sm text-neutral-700">All branches of engineering</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">⚖️ Law</h3>
            <p className="text-sm text-neutral-700">LLB, LLM, Integrated Law programs</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">💼 Management</h3>
            <p className="text-sm text-neutral-700">MBA, BBA, Specialized Management</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🔬 Pure Sciences</h3>
            <p className="text-sm text-neutral-700">Physics, Chemistry, Biology, Mathematics</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">💻 Information Technology</h3>
            <p className="text-sm text-neutral-700">Computer Science, IT, Data Science</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🎓 Education</h3>
            <p className="text-sm text-neutral-700">B.Ed, M.Ed, Education Studies</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🎨 Design & Arts</h3>
            <p className="text-sm text-neutral-700">Architecture, Design, Fine Arts</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">📊 Commerce</h3>
            <p className="text-sm text-neutral-700">CA, CS, CMA, B.Com, M.Com</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Eligibility Criteria</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Academic Merit</h3>
            <p className="text-neutral-700">Minimum 60% marks in the last qualifying examination</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Financial Need</h3>
            <p className="text-neutral-700">Annual family income less than ₹3 lakhs</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Course Admission</h3>
            <p className="text-neutral-700">Must have secured admission in a recognized institution</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-neutral-900 mb-1">Age Limit</h3>
            <p className="text-neutral-700">Below 25 years for undergraduate, 30 years for postgraduate</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Application Process</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Register</h3>
            <p className="text-sm text-neutral-700">Create account and fill application form</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Submit Documents</h3>
            <p className="text-sm text-neutral-700">Upload required certificates and proofs</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Review</h3>
            <p className="text-sm text-neutral-700">Committee reviews your application</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
            <h3 className="font-semibold text-neutral-900 mb-2">Award</h3>
            <p className="text-sm text-neutral-700">Selected candidates receive scholarship</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-neutral-200 p-6 rounded-lg">
            <div className="text-4xl mb-3">👨‍⚕️</div>
            <p className="text-neutral-700 italic mb-4">"AMP's scholarship helped me fulfill my dream of becoming a doctor. Without this support, medical education would have been impossible for my family."</p>
            <div className="font-semibold text-neutral-900">Rahil Ahmed</div>
            <div className="text-sm text-neutral-600">MBBS Graduate, 2024</div>
          </div>
          <div className="border border-neutral-200 p-6 rounded-lg">
            <div className="text-4xl mb-3">👨‍💻</div>
            <p className="text-neutral-700 italic mb-4">"Thanks to AMP, I could pursue engineering at a top college. Today I'm working at a leading tech company."</p>
            <div className="font-semibold text-neutral-900">Nazir Khan</div>
            <div className="text-sm text-neutral-600">Software Engineer, 2023</div>
          </div>
          <div className="border border-neutral-200 p-6 rounded-lg">
            <div className="text-4xl mb-3">⚖️</div>
            <p className="text-neutral-700 italic mb-4">"The scholarship not only covered my law school fees but also gave me confidence that someone believed in my potential."</p>
            <div className="font-semibold text-neutral-900">Ayesha Parveen</div>
            <div className="text-sm text-neutral-600">Advocate, 2022</div>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Apply for Scholarship</h2>
        <p className="mb-6">Applications for 2025-26 academic year are now open</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
            Apply Now
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700">
            Download Guidelines
          </button>
        </div>
      </div>
    </div>
  );
};
