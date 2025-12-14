import React from 'react';

export const Projects: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <h1 className="font-display text-3xl text-neutral-900">Our Projects</h1>
      <p className="mt-2 text-neutral-700">Explore AMP's flagship programs and initiatives driving social impact.</p>

      {/* Category Tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {['Education', 'Skill Development', 'Community Welfare', 'Health', 'Livelihood'].map((tab) => (
          <button key={tab} className="px-3 py-1 rounded-full border bg-neutral-50 hover:bg-neutral-100 text-sm">
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid - image placeholders */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden border">
            <div className="h-40 bg-neutral-200" />
            <div className="p-4">
              <div className="font-semibold text-neutral-900">Project Title {i + 1}</div>
              <p className="text-sm text-neutral-700 mt-1">Short description of the project to match the design.</p>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <span className="px-2 py-1 rounded bg-primary-50 text-primary-700">Active</span>
                <span className="text-neutral-600">Location: Multi-city</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
