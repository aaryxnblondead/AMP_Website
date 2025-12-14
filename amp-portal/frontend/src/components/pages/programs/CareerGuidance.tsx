import React from 'react';
import { PageLayout } from '../../common/PageLayout';
import { Card, StatCard, FeatureCard } from '../../common/Card';
import { SectionHeader } from '../../common/SectionHeader';
import { CallToAction } from '../../common/CallToAction';

export const CareerGuidance: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Locations with Activities' },
    { value: '10,000+', label: 'Students Monthly Reach' },
    { value: '100+', label: 'Expert Counselors' },
  ];

  const features = [
    {
      icon: '🎯',
      title: 'One-on-One Counseling',
      description: 'Personalized career guidance sessions with experienced counselors',
    },
    {
      icon: '📊',
      title: 'Career Chart Resources',
      description: 'Comprehensive career path charts for various educational streams',
    },
    {
      icon: '📝',
      title: 'Aptitude Testing',
      description: 'Scientific aptitude tests to identify strengths and interests',
    },
    {
      icon: '🎓',
      title: 'Entrance Exam Guidance',
      description: 'Information and preparation support for major entrance exams',
    },
    {
      icon: '💼',
      title: 'Stream Selection',
      description: 'Guidance for choosing the right educational stream after 10th and 12th',
    },
    {
      icon: '🎤',
      title: 'Career Seminars',
      description: 'Regular seminars featuring industry professionals and experts',
    },
  ];

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Programs', path: '/programs' },
        { label: 'Career Guidance' },
      ]}
      title="Career Guidance & Counseling"
      subtitle="Empowering students with the right career information and guidance"
    >
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <Card className="mb-8">
        <SectionHeader title="About Career Guidance Program" />
        <p className="text-neutral-700 mb-4">
          AMP's Career Guidance Program is designed to help students make informed decisions about their educational and professional paths. 
          With activities at 50+ locations, we reach over 10,000 students every month, providing them with comprehensive career counseling and resources.
        </p>
        <p className="text-neutral-700 mb-4">
          Our program covers various educational streams including Science, Commerce, Arts, and Professional courses. 
          We provide detailed information about course options, entrance exams, career prospects, and skill requirements.
        </p>
      </Card>

      <Card className="mb-8">
        <SectionHeader title="Services Offered" />
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Card>

      <Card className="mb-8">
        <SectionHeader title="Educational Streams Covered" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Science Stream</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Engineering</li>
              <li>• Medical</li>
              <li>• Pure Sciences</li>
              <li>• Technology</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Commerce Stream</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• CA/CS/CMA</li>
              <li>• Banking & Finance</li>
              <li>• Business Administration</li>
              <li>• Economics</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Arts/Humanities</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Law</li>
              <li>• Journalism</li>
              <li>• Social Sciences</li>
              <li>• Psychology</li>
            </ul>
          </div>
          <div className="bg-cream-100 p-4 rounded-lg">
            <h3 className="font-semibold text-primary-700 mb-2">Professional Courses</h3>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Design</li>
              <li>• Hotel Management</li>
              <li>• Aviation</li>
              <li>• Fashion</li>
            </ul>
          </div>
        </div>
      </Card>

      <CallToAction
        title="Need Career Guidance?"
        description="Connect with our expert counselors and make informed career decisions"
        buttons={[
          { label: 'Book a Session', variant: 'outline' },
          { label: 'Download Career Charts', variant: 'outline' },
        ]}
      />
    </PageLayout>
  );
};
