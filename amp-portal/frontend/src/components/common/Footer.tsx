import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SOCIAL_MEDIA } from '../../config/constants';

export const Footer: React.FC = () => (
  <footer className="bg-neutral-900 text-white mt-16">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 font-display">Association of Muslim Professionals</h3>
          <p className="text-sm text-neutral-300 leading-relaxed mb-4">We endeavour to provide the best possible services and support. If you have an opportunity or concern, send us an email or give us a call and we will respond as quickly as possible.</p>
          <Link to="/donate" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-semibold">
            <span className="text-lg">♥</span>
            <span>Donate Now</span>
          </Link>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2.5 text-neutral-300 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors hover:underline">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-white transition-colors hover:underline">Programs</Link></li>
            <li><Link to="/events" className="hover:text-white transition-colors hover:underline">Events</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors hover:underline">Resource Center</Link></li>
            <li><Link to="/search-ngos" className="hover:text-white transition-colors hover:underline">Search NGOs</Link></li>
            <li><Link to="/discussions" className="hover:text-white transition-colors hover:underline">Discussion Corner</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-lg">Get Involved</h4>
          <ul className="space-y-2.5 text-neutral-300 text-sm">
            <li><Link to="/volunteer" className="hover:text-white transition-colors hover:underline">Become a Volunteer</Link></li>
            <li><Link to="/donate" className="hover:text-white transition-colors hover:underline">Make a Donation</Link></li>
            <li><Link to="/donatezakat" className="hover:text-white transition-colors hover:underline">AMP Zakat Fund</Link></li>
            <li><Link to="/register" className="hover:text-white transition-colors hover:underline">Register / Join</Link></li>
            <li><Link to="/ngo_connect" className="hover:text-white transition-colors hover:underline">NGO Partnership</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
          <div className="space-y-3 text-sm text-neutral-300">
            <p className="leading-relaxed">469B Umar Manzil, 5th Road,<br />Khar (W), Mumbai 400052</p>
            <a href={`mailto:${CONTACT_INFO.email}`} className="block hover:text-white transition-colors hover:underline">{CONTACT_INFO.email}</a>
            <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="block hover:text-white transition-colors hover:underline">{CONTACT_INFO.phone}</a>
            <div className="flex gap-3 pt-2">
              <a href={SOCIAL_MEDIA.facebook} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors" aria-label="Facebook">📘</a>
              <a href={SOCIAL_MEDIA.twitter} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors" aria-label="Twitter">🐦</a>
              <a href={SOCIAL_MEDIA.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors" aria-label="LinkedIn">💼</a>
              <a href={SOCIAL_MEDIA.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors" aria-label="Instagram">📸</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-neutral-800 text-neutral-400 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
        <p className="text-center sm:text-right">© {new Date().getFullYear()} Association of Muslim Professionals. All rights reserved.</p>
      </div>
    </div>
  </footer>
);