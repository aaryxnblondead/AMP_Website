import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <h1 className="font-display text-2xl text-neutral-900 mb-2">About Us</h1>
    <p className="text-neutral-700 mb-4">Learn about AMP's vision, mission, achievements, team, and chapters.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Link to="/about/vision-mission" className="p-4 rounded border bg-white hover:bg-neutral-50">Vision & Mission</Link>
      <Link to="/about/achievements" className="p-4 rounded border bg-white hover:bg-neutral-50">Achievements</Link>
      <Link to="/about/team" className="p-4 rounded border bg-white hover:bg-neutral-50">Our Team</Link>
      <Link to="/about/chapters" className="p-4 rounded border bg-white hover:bg-neutral-50">Chapters Directory</Link>
      <Link to="/about/history" className="p-4 rounded border bg-white hover:bg-neutral-50">History & Milestones</Link>
    </div>
  </div>
);
