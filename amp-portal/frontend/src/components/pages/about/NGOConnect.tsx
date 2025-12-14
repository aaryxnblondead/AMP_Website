import React from 'react';
import { Link } from 'react-router-dom';

export const NGOConnect: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    {/* Header */}
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <h1 className="font-display text-3xl text-neutral-900">NGO Connect Program</h1>
      <p className="mt-2 text-neutral-700">Connect, collaborate, and co-create impact with AMP and partner NGOs.</p>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'NGOs Registered', value: '500+' },
          { label: 'Projects Collaborated', value: '120+' },
          { label: 'Volunteers', value: '5,000+' },
          { label: 'Cities', value: '80+' },
        ].map((s) => (
          <div key={s.label} className="rounded-lg bg-primary-50 p-4">
            <div className="font-display text-2xl text-primary-700">{s.value}</div>
            <div className="text-sm text-neutral-700">{s.label}</div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="mt-8">
        <h2 className="font-display text-xl text-neutral-900">How It Works</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Register', desc: 'Sign up your NGO to get listed and discover collaborations.' },
            { title: 'Engage', desc: 'Connect with peers, share resources, and plan joint activities.' },
            { title: 'Contribute', desc: 'Execute initiatives with volunteer support and shared funding.' },
          ].map((step) => (
            <div key={step.title} className="rounded-lg border bg-neutral-50 p-4">
              <div className="font-semibold text-neutral-900">{step.title}</div>
              <p className="text-sm text-neutral-700 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/ngos/register" className="px-4 py-2 rounded bg-neutral-900 text-white">Register Your NGO</Link>
        <Link to="/search-ngos" className="px-4 py-2 rounded border bg-white">Find NGOs</Link>
      </div>
    </div>
  </div>
);
