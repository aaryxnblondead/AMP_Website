import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
  const [userType, setUserType] = React.useState<'ngo' | 'donor' | 'student'>('student');
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary-700 mb-3 sm:mb-4">Create Your Account</h1>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-700">Join AMP to access programs, events, and resources</p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-display font-bold text-neutral-900 mb-4 sm:mb-6">Select Account Type</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={() => setUserType('student')}
            className={`p-4 rounded-lg border-2 transition-all ${
              userType === 'student' 
                ? 'border-primary-700 bg-primary-50' 
                : 'border-neutral-200 hover:border-primary-300'
            }`}
          >
            <div className="text-3xl mb-2">🎓</div>
            <div className="font-semibold text-neutral-900">Student</div>
            <div className="text-xs text-neutral-600">Scholarships, NTS, Career Guidance</div>
          </button>
          <Link
            to="/volunteer"
            className="p-4 rounded-lg border-2 border-neutral-200 hover:border-primary-300 transition-all block text-center"
          >
            <div className="text-3xl mb-2">🤝</div>
            <div className="font-semibold text-neutral-900">Volunteer</div>
            <div className="text-xs text-neutral-600">Join our programs</div>
          </Link>
          <button
            onClick={() => setUserType('ngo')}
            className={`p-4 rounded-lg border-2 transition-all ${
              userType === 'ngo' 
                ? 'border-primary-700 bg-primary-50' 
                : 'border-neutral-200 hover:border-primary-300'
            }`}
          >
            <div className="text-3xl mb-2">🏢</div>
            <div className="font-semibold text-neutral-900">NGO</div>
            <div className="text-xs text-neutral-600">Connect & collaborate</div>
          </button>
          <button
            onClick={() => setUserType('donor')}
            className={`p-4 rounded-lg border-2 transition-all ${
              userType === 'donor' 
                ? 'border-primary-700 bg-primary-50' 
                : 'border-neutral-200 hover:border-primary-300'
            }`}
          >
            <div className="text-3xl mb-2">💝</div>
            <div className="font-semibold text-neutral-900">Donor</div>
            <div className="text-xs text-neutral-600">Track donations</div>
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
                placeholder="+91 1234567890"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                State *
              </label>
              <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700">
                <option value="">Select State</option>
                <option value="MH">Maharashtra</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="KA">Karnataka</option>
                <option value="TN">Tamil Nadu</option>
              </select>
            </div>
          </div>

          {userType === 'student' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Education Level *
                </label>
                <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700">
                  <option value="">Select Level</option>
                  <option value="school">School (8th-10th)</option>
                  <option value="junior">Junior College (11th-12th)</option>
                  <option value="ug">Undergraduate</option>
                  <option value="pg">Postgraduate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  School/College Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
                  placeholder="Institution name"
                />
              </div>
            </div>
          )}

          {userType === 'ngo' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Organization Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
                  placeholder="NGO/Organization name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Registration Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
                  placeholder="Registration/Trust number"
                />
              </div>
            </>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
                placeholder="Create a strong password"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
                placeholder="Re-enter password"
              />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              id="terms" 
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-neutral-700">
              I agree to AMP's <Link to="/terms" className="text-primary-700 underline">Terms of Service</Link> and{' '}
              <Link to="/privacy" className="text-primary-700 underline">Privacy Policy</Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-700 text-white py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-700 font-semibold underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};
