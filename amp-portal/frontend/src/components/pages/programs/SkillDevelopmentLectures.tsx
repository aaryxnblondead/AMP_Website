import React from 'react';
import { Link } from 'react-router-dom';

export const SkillDevelopmentLectures: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="text-sm text-neutral-600 mb-4">
          <Link to="/" className="hover:text-primary-700">Home</Link> / 
          <Link to="/programs" className="hover:text-primary-700"> Programs</Link> / 
          <span className="text-neutral-900"> Skill Development Lectures</span>
        </nav>
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">Skill Development Lectures (SDL)</h1>
        <p className="text-lg text-neutral-700">Enhancing academic skills and knowledge across India</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">80+</div>
          <div className="text-neutral-600">Locations Nationwide</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">1+ Lakh</div>
          <div className="text-neutral-600">Students Annually</div>
        </div>
        <div className="bg-white rounded-lg shadow-card p-6 text-center">
          <div className="text-4xl font-bold text-primary-700 mb-2">500+</div>
          <div className="text-neutral-600">Expert Lecturers</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">About SDL Program</h2>
        <p className="text-neutral-700 mb-4">
          Skill Development Lectures (SDL) are AMP's flagship educational initiative conducted at over 80 locations across India. 
          The program reaches more than 1 lakh students annually, providing high-quality academic instruction and skill development 
          opportunities completely free of cost.
        </p>
        <p className="text-neutral-700 mb-4">
          Our SDLs focus on strengthening students' understanding of core subjects, preparing them for competitive exams, 
          and developing essential skills for academic and professional success. Expert teachers and professionals conduct 
          these lectures, ensuring students receive the best possible guidance.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Subject Areas Covered</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">📐 Mathematics</h3>
            <p className="text-sm text-neutral-700">Advanced problem-solving, competitive exam preparation</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">🔬 Science</h3>
            <p className="text-sm text-neutral-700">Physics, Chemistry, Biology - conceptual clarity</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">📖 English</h3>
            <p className="text-sm text-neutral-700">Communication skills, grammar, comprehension</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">📚 General Knowledge</h3>
            <p className="text-sm text-neutral-700">Current affairs, history, geography</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">💡 Reasoning</h3>
            <p className="text-sm text-neutral-700">Logical reasoning, analytical thinking</p>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">💻 Computer Skills</h3>
            <p className="text-sm text-neutral-700">Basic computing, digital literacy</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Program Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-3xl">✅</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Free of Cost</h3>
              <p className="text-neutral-700">Completely free lectures for all students</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">👨‍🏫</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Expert Faculty</h3>
              <p className="text-neutral-700">Experienced teachers and subject matter experts</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📝</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Study Materials</h3>
              <p className="text-neutral-700">Free study materials and practice papers</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🏆</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Exam Preparation</h3>
              <p className="text-neutral-700">Focused preparation for competitive exams</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📍</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Local Accessibility</h3>
              <p className="text-neutral-700">Available at 80+ locations across India</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">📅</div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Regular Schedule</h3>
              <p className="text-neutral-700">Consistent weekly lectures throughout the year</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">Who Can Attend?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-primary-200 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">School Students</h3>
            <p className="text-sm text-neutral-700">Classes 8th to 12th</p>
          </div>
          <div className="border border-primary-200 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">College Students</h3>
            <p className="text-sm text-neutral-700">Undergraduate & Graduate</p>
          </div>
          <div className="border border-primary-200 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Competitive Exam Aspirants</h3>
            <p className="text-sm text-neutral-700">All competitive exams</p>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Join SDL Program Today</h2>
        <p className="mb-6">Find SDL lectures in your city and start your journey to academic excellence</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100">
            Find Nearest Location
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700">
            View Schedule
          </button>
        </div>
      </div>
    </div>
  );
};
