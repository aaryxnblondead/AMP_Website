import React from 'react';

export const VisionMission: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    {/* Vision & Mission Hero */}
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <h1 className="font-display text-3xl text-neutral-900">Vision & Mission</h1>
      <p className="mt-2 text-neutral-700">Our guiding principles and goals that shape AMP's impact.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-neutral-50 p-4">
          <div className="font-display text-xl text-neutral-900">Our Vision</div>
          <p className="mt-2 text-neutral-700">Empower communities through education, skill-building, and collaborative action.</p>
        </div>
        <div className="rounded-xl border bg-neutral-50 p-4">
          <div className="font-display text-xl text-neutral-900">Our Mission</div>
          <p className="mt-2 text-neutral-700">Connect NGOs, professionals, and volunteers to deliver sustainable initiatives.</p>
        </div>
      </div>

      {/* Principles Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Inclusivity', 'Transparency', 'Impact-Driven', 'Collaboration', 'Innovation', 'Sustainability'].map((p) => (
          <div key={p} className="rounded-xl bg-primary-50 p-4">
            <div className="font-semibold text-primary-700">{p}</div>
            <p className="text-sm text-neutral-700 mt-1">Aligned with AMP values and community needs.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
