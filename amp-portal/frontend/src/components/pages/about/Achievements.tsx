import React from 'react';

export const Achievements: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <h1 className="font-display text-3xl text-neutral-900">AMP Achievements</h1>
      <p className="mt-2 text-neutral-700">Milestones and recognitions achieved by AMP and its community.</p>

      {/* Timeline */}
      <div className="mt-8 relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200" />
        <div className="space-y-8">
          {[
            { year: '2021', title: 'National Education Drive', desc: 'Scaled mentorship programs across cities.' },
            { year: '2022', title: 'Skill Development Outreach', desc: 'Launched vocational training with partners.' },
            { year: '2023', title: 'Community Welfare Expansion', desc: 'Expanded healthcare and livelihood initiatives.' },
            { year: '2024', title: 'Global Collaboration', desc: 'Forged international partnerships for greater impact.' },
          ].map((item, i) => (
            <div key={item.year} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`md:col-span-1 ${i % 2 === 0 ? '' : 'md:order-2'}`}>
                <div className="rounded-xl border bg-neutral-50 p-4">
                  <div className="text-sm text-primary-700 font-semibold">{item.year}</div>
                  <div className="font-semibold text-neutral-900">{item.title}</div>
                  <p className="text-sm text-neutral-700 mt-1">{item.desc}</p>
                </div>
              </div>
              <div className={`md:col-span-1 ${i % 2 === 0 ? '' : 'md:order-1'}`}>
                <div className="h-32 rounded-xl bg-neutral-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
