import React from 'react';
import { Link } from 'react-router-dom';
import { UpcomingEvents } from '../home/UpcomingEvents';
import { NGOOfMonth } from '../home/NGOOfMonth';

export const About: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    {/* Hero Section */}
    <div className="bg-white rounded-xl shadow-card overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 md:p-8">
          <h1 className="font-display text-3xl text-neutral-900">Know AMP</h1>
          <p className="mt-3 text-neutral-700">
            Association of Muslim Professionals (AMP) NGO Connect aims to create an online platform
            to foster collaboration among NGOs, professionals, and institutions to connect, engage,
            and contribute effectively toward impactful social causes.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-lg bg-neutral-50">
              <div className="font-semibold text-neutral-900">AMP Membership</div>
              <p className="text-sm text-neutral-700">Volunteer and earn higher impact in education projects.</p>
              <Link to="/about/vision-mission" className="text-primary-700 font-medium mt-2 inline-block">Read More</Link>
            </div>
            <div className="p-4 rounded-lg bg-neutral-50">
              <div className="font-semibold text-neutral-900">Start Donating</div>
              <p className="text-sm text-neutral-700">Start giving today; create a positive change.</p>
              <Link to="/donate" className="text-primary-700 font-medium mt-2 inline-block">Read More</Link>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 bg-cream-100 flex items-center justify-center">
          {/* Placeholder for hero image from design */}
          <div className="w-full h-64 md:h-80 rounded-lg bg-neutral-200" />
        </div>
      </div>
    </div>

    {/* Highlights cards */}
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded-xl bg-primary-50">
        <div className="font-display font-bold text-primary-700">Community-Centered</div>
        <p className="mt-1 text-sm text-neutral-700">We place communities at the heart of every initiative.</p>
      </div>
      <div className="p-4 rounded-xl bg-primary-50">
        <div className="font-display font-bold text-primary-700">Collaborative Approach</div>
        <p className="mt-1 text-sm text-neutral-700">We partner with NGOs, institutions, and professionals.</p>
      </div>
      <div className="p-4 rounded-xl bg-primary-50">
        <div className="font-display font-bold text-primary-700">Global Impact</div>
        <p className="mt-1 text-sm text-neutral-700">Positive change across countries with localized actions.</p>
      </div>
    </div>

    {/* Sidebar navigation + content grid */}
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Left: sitemap section list */}
      <aside className="lg:col-span-1">
        <div className="rounded-xl bg-white shadow-card p-4">
          <ul className="space-y-2 text-primary-700 font-semibold">
            <li><Link to="/about">Know AMP</Link></li>
            <li><Link to="/about/vision-mission">Vision and Mission</Link></li>
            <li><Link to="/about/projects">Our Projects</Link></li>
            <li><Link to="/ngo_connect">NGO Connect Program</Link></li>
            <li><Link to="/about/achievements">AMP Achievements</Link></li>
          </ul>
        </div>
      </aside>

      {/* Right: partner with us cards */}
      <section className="lg:col-span-3">
        <h2 className="font-display text-xl text-neutral-900 mb-3">Partner With Us</h2>
        <p className="text-neutral-700 mb-4">Join our network of changemakers and contribute to meaningful social impact initiatives.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-xl bg-neutral-900 text-white p-4">
            <div className="font-semibold">Register Your NGO</div>
            <ul className="mt-2 text-sm space-y-1">
              <li>Build Trust & Credibility</li>
              <li>Collaborate & Connect</li>
              <li>Discover Funding & Opportunities</li>
            </ul>
            <Link to="/ngos/register" className="mt-3 inline-block px-3 py-2 rounded bg-white text-neutral-900">Register NGO</Link>
          </div>
          <div className="rounded-xl bg-white p-4 border">
            <div className="font-semibold text-neutral-900">Search NGOs</div>
            <input className="mt-2 w-full px-3 py-2 border rounded" placeholder="Search NGO name" />
            <Link to="/search-ngos" className="mt-2 inline-block px-3 py-2 rounded bg-neutral-900 text-white">Submit</Link>
            <div className="mt-4 font-semibold text-neutral-900">Subscribe to Newsletter</div>
            <Link to="/resources/newsletter" className="mt-2 inline-block px-3 py-2 rounded bg-neutral-900 text-white">Subscribe</Link>
            <div className="mt-4 font-semibold text-neutral-900">Invite Your Friend</div>
            <Link to="/contact" className="mt-2 inline-block px-3 py-2 rounded bg-neutral-900 text-white">Invite</Link>
          </div>
          <div className="rounded-xl bg-white p-4 border md:col-span-2">
            <div className="font-semibold text-neutral-900">Collaborate on Projects</div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="h-20 rounded bg-neutral-200" />
              <div className="h-20 rounded bg-neutral-200" />
              <div className="h-20 rounded bg-neutral-200" />
            </div>
            <Link to="/programs" className="mt-3 inline-block px-3 py-2 rounded bg-neutral-900 text-white">View Projects</Link>
          </div>
        </div>

        {/* NGO of the Month + Upcoming Events */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1"><NGOOfMonth /></div>
          <div className="md:col-span-2"><UpcomingEvents /></div>
        </div>
      </section>
    </div>
  </div>
);
