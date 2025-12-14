import React from 'react';

export const ProgramsHub: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <h1 className="font-display text-2xl text-neutral-900 mb-2">Programs & Initiatives</h1>
    <p className="text-neutral-700 mb-4">Explore AMP programs: Education & Skill, Employment Assistance, Community Development, NGO Connect.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="p-4 rounded border bg-white">Education & Skill Development</div>
      <div className="p-4 rounded border bg-white">Employment Assistance</div>
      <div className="p-4 rounded border bg-white">Community Development</div>
      <div className="p-4 rounded border bg-white">NGO Connect Platform</div>
    </div>
  </div>
);
