import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';

export const Volunteer: React.FC = () => {
  const { user } = useAuthStore();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    educationLevel: '',
    occupation: '',
    skills: [] as string[],
    availability: '',
    interests: [] as string[],
    experience: '',
    whyVolunteer: '',
    agreeToTerms: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-fill user details if logged in
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        fullName: user.full_name || '',
        email: user.email || ''
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Store in localStorage as backup until API is ready
      const volunteers = JSON.parse(localStorage.getItem('volunteer_registrations') || '[]');
      volunteers.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('volunteer_registrations', JSON.stringify(volunteers));
      
      // TODO: Uncomment when API is ready
      // const response = await fetch('/api/volunteers/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Registration failed');
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const skillOptions = [
    'Teaching/Mentoring',
    'Event Management',
    'Social Media',
    'Content Writing',
    'Photography',
    'Graphic Design',
    'Web Development',
    'Data Entry',
    'Fundraising',
    'Public Speaking'
  ];

  const interestOptions = [
    'Education & Career Guidance',
    'Skill Development',
    'Community Events',
    'Fundraising Campaigns',
    'Social Media Campaigns',
    'Administrative Support',
    'Field Work',
    'Online Support'
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 mb-3 sm:mb-4">Become a Volunteer</h1>
        <p className="text-sm sm:text-base lg:text-lg text-neutral-700">Join our community of changemakers and make a real difference</p>
      </div>

      {user && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-700 text-sm">
            <span className="font-semibold">Welcome back, {user.full_name}!</span> Your account details have been pre-filled.
          </p>
        </div>
      )}

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 font-semibold">✓ Volunteer registration submitted successfully!</p>
          <p className="text-sm text-green-600 mt-1">We'll review your application and get back to you within 2-3 business days.</p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 font-semibold">✗ Error</p>
          <p className="text-sm text-red-600 mt-1">{error}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-card p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-display font-bold text-neutral-900 mb-4 pb-2 border-b">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={!!user}
                  className={`w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors ${user ? 'bg-neutral-50' : ''}`}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={!!user}
                  className={`w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors ${user ? 'bg-neutral-50' : ''}`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors"
                  placeholder="+91 1234567890"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  State *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors"
                >
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Education Level *
                </label>
                <select
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors"
                >
                  <option value="">Select Level</option>
                  <option value="High School">High School</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Doctorate">Doctorate</option>
                </select>
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div>
            <h2 className="text-xl font-display font-bold text-neutral-900 mb-4 pb-2 border-b">Professional Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Current Occupation *
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors"
                  placeholder="e.g., Student, Engineer, Teacher"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Availability *
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors"
                >
                  <option value="">Select Availability</option>
                  <option value="Weekdays">Weekdays</option>
                  <option value="Weekends">Weekends</option>
                  <option value="Both">Both Weekdays & Weekends</option>
                  <option value="Flexible">Flexible</option>
                  <option value="Online Only">Online Only</option>
                </select>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-display font-bold text-neutral-900 mb-4 pb-2 border-b">Your Skills</h2>
            <p className="text-sm text-neutral-600 mb-4">Select all skills that apply to you</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {skillOptions.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    formData.skills.includes(skill)
                      ? 'border-primary-700 bg-primary-50 text-primary-700'
                      : 'border-neutral-300 hover:border-primary-300 text-neutral-700'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Areas of Interest */}
          <div>
            <h2 className="text-xl font-display font-bold text-neutral-900 mb-4 pb-2 border-b">Areas of Interest</h2>
            <p className="text-sm text-neutral-600 mb-4">What type of volunteer work interests you?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interestOptions.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all text-left ${
                    formData.interests.includes(interest)
                      ? 'border-primary-700 bg-primary-50 text-primary-700'
                      : 'border-neutral-300 hover:border-primary-300 text-neutral-700'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h2 className="text-xl font-display font-bold text-neutral-900 mb-4 pb-2 border-b">Additional Information</h2>
            <div className="space-y-6 mt-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Previous Volunteer Experience (if any)
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors resize-none"
                  placeholder="Tell us about your previous volunteer work or community service experience..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Why do you want to volunteer with AMP? *
                </label>
                <textarea
                  name="whyVolunteer"
                  value={formData.whyVolunteer}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 transition-colors resize-none"
                  placeholder="Share your motivation and what you hope to achieve..."
                />
              </div>
            </div>
          </div>

          {/* Terms & Submit */}
          <div>
            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-primary-700 border-neutral-300 rounded focus:ring-primary-700"
              />
              <label className="text-sm text-neutral-700">
                I agree to AMP's volunteer guidelines and commit to contributing positively to the organization's mission. I understand that my application will be reviewed and I may be contacted for further screening. *
              </label>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={!formData.agreeToTerms || loading}
                className="px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-8 py-3 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Why Volunteer Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-cream-100 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">🤝</div>
          <h3 className="font-semibold text-neutral-900 mb-2">Make an Impact</h3>
          <p className="text-sm text-neutral-700">Contribute to meaningful social change in your community</p>
        </div>
        <div className="bg-cream-100 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">📚</div>
          <h3 className="font-semibold text-neutral-900 mb-2">Learn & Grow</h3>
          <p className="text-sm text-neutral-700">Develop new skills and gain valuable experience</p>
        </div>
        <div className="bg-cream-100 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">🌟</div>
          <h3 className="font-semibold text-neutral-900 mb-2">Join Community</h3>
          <p className="text-sm text-neutral-700">Connect with like-minded individuals and build lasting relationships</p>
        </div>
      </div>
    </div>
  );
};
