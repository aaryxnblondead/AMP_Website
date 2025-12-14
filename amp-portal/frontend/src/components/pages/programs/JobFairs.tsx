import React from 'react';
import { PageLayout } from '../../common/PageLayout';
import { Card, StatCard, FeatureCard } from '../../common/Card';
import { SectionHeader } from '../../common/SectionHeader';
import { CallToAction } from '../../common/CallToAction';

export const JobFairs: React.FC = () => {
  const stats = [
    { value: '25+', label: 'Job Fairs Conducted' },
    { value: '250+', label: 'Job Drives Completed' },
    { value: '15,000+', label: 'Candidates Placed' },
    { value: '500+', label: 'Partner Companies' },
  ];

  const features = [
    {
      icon: '🏢',
      title: 'Multiple Companies',
      description: 'Meet 50+ companies in a single day',
    },
    {
      icon: '💼',
      title: 'Various Sectors',
      description: 'IT, Manufacturing, Retail, Healthcare, BPO, and more',
    },
    {
      icon: '🎯',
      title: 'On-the-Spot Interviews',
      description: 'Direct interaction with hiring managers',
    },
    {
      icon: '📝',
      title: 'Resume Support',
      description: 'Free resume review and improvement tips',
    },
    {
      icon: '🆓',
      title: 'Free Entry',
      description: 'No registration or entry fees for candidates',
    },
    {
      icon: '🎓',
      title: 'Career Counseling',
      description: 'Expert guidance on career options',
    },
  ];

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Programs', path: '/programs' },
        { label: 'Job Fairs & Job Drives' },
      ]}
      title="Job Fairs & Job Drives"
      subtitle="Connecting job seekers with employment opportunities"
    >
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <Card className="mb-8">
        <SectionHeader title="About Job Fairs & Drives" />
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
      </Card>

      <div className="bg-primary-50 border-l-4 border-primary-700 p-6 mb-8">
        <h3 className="font-display font-bold text-primary-700 text-xl mb-2">📍 Recent Event</h3>
        <p className="text-neutral-700 font-semibold mb-2">AMP's Free Job Fair at Srinagar</p>
        <p className="text-neutral-600">Successfully conducted with participation from 50+ companies and 2000+ job seekers</p>
      </div>

      <Card className="mb-8">
        <SectionHeader title="Job Fair Features" />
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Card>

      <Card className="mb-8">
        <SectionHeader title="Job Profiles Available" />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['Software Developer', 'Sales Executive', 'Customer Support', 'Data Entry Operator', 'Accountant', 'HR Executive', 'Marketing Manager', 'Production Supervisor', 'Quality Analyst', 'Nurse', 'Teacher', 'Business Development'].map((job) => (
            <div key={job} className="bg-cream-100 p-3 rounded-lg text-center">
              <span className="text-neutral-800">{job}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-8">
        <SectionHeader title="Upcoming Job Fairs" />
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
      </Card>

      <Card className="mb-8">
        <SectionHeader title="For Employers" />
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
      </Card>

      <CallToAction
        title="Looking for a Job?"
        description="Register for our upcoming job fairs and take the next step in your career"
        buttons={[
          { label: 'View All Job Fairs', variant: 'outline' },
          { label: 'Upload Your Resume', variant: 'outline' },
        ]}
      />
    </PageLayout>
  );
};
