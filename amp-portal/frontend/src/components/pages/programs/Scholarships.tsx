import React from 'react';
import { PageLayout } from '../../common/PageLayout';
import { Card, StatCard } from '../../common/Card';
import { SectionHeader } from '../../common/SectionHeader';
import { ProcessSteps } from '../../common/ProcessSteps';
import { CallToAction } from '../../common/CallToAction';

export const Scholarships: React.FC = () => {
  const stats = [
    { value: '582', label: 'Scholarships Awarded' },
    { value: '₹2+ Cr', label: 'Total Support Provided' },
    { value: '15+', label: 'Fields Covered' },
  ];

  const applicationSteps = [
    { number: 1, title: 'Register', description: 'Create account and fill application form' },
    { number: 2, title: 'Submit Documents', description: 'Upload required certificates and proofs' },
    { number: 3, title: 'Review', description: 'Committee reviews your application' },
    { number: 4, title: 'Approval', description: 'Receive scholarship confirmation' },
  ];

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Programs', path: '/programs' },
        { label: 'Higher Education Scholarships' },
      ]}
      title="Higher Education Scholarships"
      subtitle="Empowering deserving students to pursue their dreams"
    >
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <Card className="mb-8">
        <SectionHeader title="About the Scholarship Program" />
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
      </Card>

      <Card className="mb-8">
        <SectionHeader title="Fields of Study Covered" />
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
      </Card>

      <Card className="mb-8">
        <SectionHeader title="Eligibility Criteria" />
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
      </Card>

      <Card className="mb-8">
        <SectionHeader title="Application Process" />
        <ProcessSteps steps={applicationSteps} columns={4} />
      </Card>

      <Card className="mb-8">
        <SectionHeader title="Success Stories" />
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
      </Card>

      <CallToAction
        title="Ready to Apply?"
        description="Start your scholarship application today and take the first step towards your dreams"
        buttons={[
          { label: 'Apply Now', variant: 'outline' },
          { label: 'Download Guidelines', variant: 'outline' },
        ]}
      />
    </PageLayout>
  );
};
