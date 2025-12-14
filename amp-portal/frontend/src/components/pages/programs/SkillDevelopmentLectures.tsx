import React from 'react';
import { PageLayout } from '../../common/PageLayout';
import { Card, StatCard } from '../../common/Card';
import { SectionHeader } from '../../common/SectionHeader';
import { CallToAction } from '../../common/CallToAction';

export const SkillDevelopmentLectures: React.FC = () => {
  const stats = [
    { value: '80+', label: 'Locations Nationwide' },
    { value: '1+ Lakh', label: 'Students Annually' },
    { value: '500+', label: 'Expert Lecturers' },
  ];

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Programs', path: '/programs' },
        { label: 'Skill Development Lectures' },
      ]}
      title="Skill Development Lectures (SDL)"
      subtitle="Enhancing academic skills and knowledge across India"
    >
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <Card className="mb-8">
        <SectionHeader title="About SDL Program" />
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
      </Card>

      <Card className="mb-8">
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
      </Card>

      <Card className="mb-8">
        <SectionHeader title="Program Features" />
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
      </Card>

      <Card className="mb-8">
        <SectionHeader title="Program Features" />
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
      </Card>

      <CallToAction
        title="Join SDL Program Today"
        description="Find SDL lectures in your city and start your journey to academic excellence"
        buttons={[
          { label: 'Find Nearest Location', variant: 'outline' },
          { label: 'View Schedule', variant: 'outline' },
        ]}
      />
    </PageLayout>
  );
};
