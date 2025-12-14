import React from 'react';
import { Link } from 'react-router-dom';

export const JobFairs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/programs" className="hover:text-primary-700"> Programs</Link> / 
          <span className="text-neutral-900"> Job Fairs & Job Drives</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">Job Fairs & Job Drives</h1>
        <p className="text-lg text-neutral-700">Connecting job seekers with employment opportunities</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">25+</div>
          <div className="text-neutral-600">Job Fairs Conducted</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">250+</div>
          <div className="text-neutral-600">Job Drives Completed</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">15,000+</div>
          <div className="text-neutral-600">Candidates Placed</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">500+</div>
          <div className="text-neutral-600">Partner Companies</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About Job Fairs & Drives</h2>
        <p className="text-neutral-700 mb-4">
          AMP's Job Fairs and Job Drives are flagship employment programs that have successfully connected over 15,000 candidates 
          with quality employment opportunities. We organize large-scale job fairs across India, bringing together job seekers and 
          employers under one roof.
        </p>
        <p className="text-neutral-700 mb-4">
          With 25+ major job fairs and 250+ targeted job drives conducted, we have established strong partnerships with leading 
          companies across various sectors. Our job fairs are completely free for candidates and provide direct access to 
          hiring managers and on-the-spot interviews.
        </p>
      </div>

      <div className="bg-primary-50 border-l-4 border-primary-700 p-6 mb-8">
        <h3 className="font-display font-bold text-primary-700 text-xl mb-2">📍 Recent Event</h3>
        <p className="text-neutral-700 font-semibold mb-2">AMP's Free Job Fair at Srinagar</p>
        <p className="text-neutral-600">Successfully conducted with participation from 50+ companies and 2000+ job seekers</p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Job Fair Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-3xl">🏢</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Multiple Companies</h3>
              <p className="text-neutral-700">Meet 50+ companies in a single day</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">💼</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Various Sectors</h3>
              <p className="text-neutral-700">IT, Manufacturing, Retail, Healthcare, BPO, and more</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">On-the-Spot Interviews</h3>
              <p className="text-neutral-700">Direct interaction with hiring managers</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📝</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Resume Support</h3>
              <p className="text-neutral-700">Free resume review and improvement tips</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🆓</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Free Entry</h3>
              <p className="text-neutral-700">No registration or entry fees for candidates</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🎓</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Career Counseling</h3>
              <p className="text-neutral-700">Expert guidance on career options</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Job Profiles Available</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['Software Developer', 'Sales Executive', 'Customer Support', 'Data Entry Operator', 'Accountant', 'HR Executive', 'Marketing Manager', 'Production Supervisor', 'Quality Analyst', 'Nurse', 'Teacher', 'Business Development'].map((job) => (
            <div key={job} className="bg-cream-100 p-3 rounded-lg text-center">
              <span className="text-neutral-800">{job}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Upcoming Job Fairs</h2>
        <div className="space-y-4">
          <div className="border border-neutral-200 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-lg text-primary-700 mb-1">Mumbai Mega Job Fair 2025</h3>
                <p className="text-neutral-600">📍 NSCI Stadium, Worli, Mumbai</p>
              </div>
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-semibold">
                Jan 25, 2025
              </div>
            </div>
            <p className="text-neutral-700 mb-3">Expected: 100+ companies | 5000+ candidates | Multiple sectors</p>
            <button className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800">
              Register Now
            </button>
          </div>

          <div className="border border-neutral-200 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-lg text-primary-700 mb-1">Lucknow IT Job Drive</h3>
                <p className="text-neutral-600">📍 Lucknow IT Park, Lucknow</p>
              </div>
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-semibold">
                Feb 10, 2025
              </div>
            </div>
            <p className="text-neutral-700 mb-3">Focus: IT & Software jobs | Freshers & Experienced | Top tech companies</p>
            <button className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800">
              Register Now
            </button>
          </div>

          <div className="border border-neutral-200 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-lg text-primary-700 mb-1">Bengaluru Campus Recruitment Drive</h3>
                <p className="text-neutral-600">📍 Multiple Campuses, Bengaluru</p>
              </div>
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-semibold">
                Feb 20, 2025
              </div>
            </div>
            <p className="text-neutral-700 mb-3">For Final Year Students | Engineering & Management | Leading MNCs</p>
            <button className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800">
              Register Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">For Employers</h2>
        <p className="text-neutral-700 mb-4">
          Partner with AMP to access a large pool of talented and motivated candidates. Our job fairs attract thousands 
          of job seekers across all education levels and experience ranges.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-cream-100 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Wide Reach</h3>
            <p className="text-sm text-neutral-700">Access to diverse talent pool</p>
          </div>
          <div className="text-center p-4 bg-cream-100 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Cost Effective</h3>
            <p className="text-sm text-neutral-700">Reduced recruitment costs</p>
          </div>
          <div className="text-center p-4 bg-cream-100 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Fast Hiring</h3>
            <p className="text-sm text-neutral-700">Quick candidate selection</p>
          </div>
        </div>
        <button className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800">
          Partner with Us
        </button>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Looking for a Job?</h2>
        <p className="mb-6">Register for our upcoming job fairs and take the next step in your career</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
            View All Job Fairs
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700">
            Upload Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};
