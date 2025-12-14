import React from 'react';
import { Link } from 'react-router-dom';

export const CampusToCorporate: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/programs" className="hover:text-primary-700"> Programs</Link> / 
          <span className="text-neutral-900"> Campus to Corporate</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">Campus to Corporate Program</h1>
        <p className="text-lg text-neutral-700">Bridging the gap between education and employment</p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About the Program</h2>
        <p className="text-neutral-700 mb-4">
          The Campus to Corporate program is designed to prepare students for successful transitions from academic life to 
          professional careers. We partner with colleges and universities to provide students with the skills, knowledge, 
          and opportunities they need to excel in the corporate world.
        </p>
        <p className="text-neutral-700 mb-4">
          Through campus connect initiatives, recruitment drives, internship programs, and corporate partnerships, we ensure 
          that students are job-ready and connected with the right opportunities when they graduate.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Program Components</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Campus Recruitment Drives</h3>
            <p className="text-neutral-700">On-campus placement drives connecting students with leading companies</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Internship Programs</h3>
            <p className="text-neutral-700">Industry internships providing hands-on experience</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Skill Development Workshops</h3>
            <p className="text-neutral-700">Workshops on communication, teamwork, and professional skills</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Resume Building</h3>
            <p className="text-neutral-700">Expert guidance on creating impactful resumes and portfolios</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Interview Preparation</h3>
            <p className="text-neutral-700">Mock interviews and feedback from industry professionals</p>
          </div>
          <div className="border-l-4 border-primary-700 pl-4">
            <h3 className="font-semibold text-lg text-neutral-900 mb-2">Corporate Mentorship</h3>
            <p className="text-neutral-700">Mentoring from experienced professionals in various fields</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Skills Training Areas</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">💬 Communication Skills</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Business Communication</li>
              <li>• Presentation Skills</li>
              <li>• Email Etiquette</li>
              <li>• Public Speaking</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🤝 Soft Skills</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Teamwork & Collaboration</li>
              <li>• Leadership Skills</li>
              <li>• Time Management</li>
              <li>• Problem Solving</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">💼 Professional Skills</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Corporate Etiquette</li>
              <li>• Business Writing</li>
              <li>• Project Management</li>
              <li>• Critical Thinking</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Corporate Partner Network</h2>
        <p className="text-neutral-700 mb-6">
          We have established partnerships with leading companies across various industries who actively participate 
          in our campus recruitment programs and offer internship opportunities to students.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-cream-100 p-3 rounded text-center font-semibold text-neutral-800">IT & Software</div>
          <div className="bg-cream-100 p-3 rounded text-center font-semibold text-neutral-800">Manufacturing</div>
          <div className="bg-cream-100 p-3 rounded text-center font-semibold text-neutral-800">BFSI</div>
          <div className="bg-cream-100 p-3 rounded text-center font-semibold text-neutral-800">Healthcare</div>
          <div className="bg-cream-100 p-3 rounded text-center font-semibold text-neutral-800">Retail</div>
          <div className="bg-cream-100 p-3 rounded text-center font-semibold text-neutral-800">E-commerce</div>
          <div className="bg-cream-100 p-3 rounded text-center font-semibold text-neutral-800">Consulting</div>
          <div className="bg-cream-100 p-3 rounded text-center font-semibold text-neutral-800">Education</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">For Colleges & Universities</h2>
        <p className="text-neutral-700 mb-4">
          Partner with AMP to enhance placement opportunities for your students. We provide comprehensive support 
          including campus recruitment drives, skill development workshops, and corporate connections.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 border border-neutral-200 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Enhanced Placements</h3>
            <p className="text-sm text-neutral-700">Better placement rates</p>
          </div>
          <div className="text-center p-4 border border-neutral-200 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Industry Connect</h3>
            <p className="text-sm text-neutral-700">Direct corporate access</p>
          </div>
          <div className="text-center p-4 border border-neutral-200 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Skill Training</h3>
            <p className="text-sm text-neutral-700">Free workshops for students</p>
          </div>
        </div>
        <button className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800">
          Partner with AMP
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-neutral-200 p-6 rounded-lg">
            <p className="text-neutral-700 italic mb-4">
              "Through AMP's Campus to Corporate program, I received excellent interview preparation and was placed in 
              a leading IT company even before my final semester ended."
            </p>
            <div className="font-semibold text-neutral-900">Arif Khan</div>
            <div className="text-sm text-neutral-600">Software Engineer, TCS</div>
          </div>
          <div className="border border-neutral-200 p-6 rounded-lg">
            <p className="text-neutral-700 italic mb-4">
              "The internship opportunity I got through AMP helped me understand corporate culture and gave me a head start 
              in my career. I was offered a full-time position after my internship."
            </p>
            <div className="font-semibold text-neutral-900">Fatima Siddiqui</div>
            <div className="text-sm text-neutral-600">Marketing Executive, Wipro</div>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Ready to Start Your Corporate Journey?</h2>
        <p className="mb-6">Join our Campus to Corporate program and get the skills and opportunities you need</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
            Register Now
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700">
            View Upcoming Events
          </button>
        </div>
      </div>
    </div>
  );
};
