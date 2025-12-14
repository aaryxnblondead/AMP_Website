import React from 'react';

export const ContactUs: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
    <div className="bg-white rounded-lg shadow-card p-6 sm:p-8">
      <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 mb-4">Contact Us</h1>
      <div className="space-y-4 text-sm sm:text-base text-neutral-700">
        <p className="flex items-start gap-2">
          <span className="text-xl">📍</span>
          <span>68/69 Umar Manzil, 5th Road, Khar (W), Mumbai 400052</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-xl">✉️</span>
          <a href="mailto:info@ampindia.org" className="text-primary-700 hover:underline">info@ampindia.org</a>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-xl">📞</span>
          <a href="tel:+917303116060" className="text-primary-700 hover:underline">+91 7303116060</a>
        </p>
      </div>
    </div>
  </div>
);
