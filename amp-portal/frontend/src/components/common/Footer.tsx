import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-neutral-900 text-white mt-12">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Association of Muslim Professionals</h3>
          <p className="text-sm text-neutral-300">We endeavour to provide the best possible services and support. If you get an opportunity or concern, send us an email or give us a call and we will respond as quickly as possible.</p>
          <button className="mt-4 px-4 py-2 rounded bg-primary-700 text-white">Donate Now</button>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li><a href="/about">About Us</a></li>
            <li><a href="/ngo-corner">NGO Corner - Register</a></li>
            <li><a href="/ngos">Search NGOs</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/resources">Resource Center</a></li>
            <li><a href="/discussions">Discussion Corner</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Non profit</h4>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>Legal Corner</li>
            <li>Government Circulars</li>
            <li>NGO Careers</li>
            <li>Our Partner NGOs</li>
            <li>NGO Directory</li>
            <li>Press Gallery</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-neutral-300 text-sm">469B Umar Manzil, 5th Road, Khar (W),</p>
          <p className="text-neutral-300 text-sm">info@ampindia.org</p>
          <p className="text-neutral-300 text-sm">+91 7300116660</p>
        </div>
      </div>
      <div className="mt-12 border-t border-neutral-800 pt-6 text-neutral-400 text-xs flex justify-between">
        <div className="space-x-4">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
        <p>© AMP 2025</p>
      </div>
    </div>
  </footer>
);