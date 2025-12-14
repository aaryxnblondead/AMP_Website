import React from 'react';

export const ResourcesHub: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <h1 className="font-display text-2xl text-neutral-900 mb-2">Resources</h1>
    <p className="text-neutral-700 mb-4">Blogs, News, Newsletter, Library, NTS Materials, Reports, FAQs, How-To Guides.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 rounded border bg-white">Blog & Articles</div>
      <div className="p-4 rounded border bg-white">News & Press</div>
      <div className="p-4 rounded border bg-white">Newsletter Archive</div>
      <div className="p-4 rounded border bg-white">Resource Library</div>
      <div className="p-4 rounded border bg-white">NTS Preparation</div>
      <div className="p-4 rounded border bg-white">Reports & Impact</div>
      <div className="p-4 rounded border bg-white">FAQs</div>
      <div className="p-4 rounded border bg-white">How-To Guides</div>
    </div>
  </div>
);
