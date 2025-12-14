import React from 'react';

export const EventsHub: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <h1 className="font-display text-2xl text-neutral-900 mb-2">Events</h1>
    <p className="text-neutral-700 mb-4">Find NTS 2025, NGO Conferences, Job Fairs, Webinars, and more.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 rounded border bg-white">National Talent Search 2025</div>
      <div className="p-4 rounded border bg-white">NGO Conferences</div>
      <div className="p-4 rounded border bg-white">Job Fairs</div>
      <div className="p-4 rounded border bg-white">Webinars</div>
      <div className="p-4 rounded border bg-white">Community Events</div>
      <div className="p-4 rounded border bg-white">Seminars & Workshops</div>
    </div>
  </div>
);
