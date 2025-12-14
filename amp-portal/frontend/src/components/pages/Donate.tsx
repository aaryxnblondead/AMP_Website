import React from 'react';

export const Donate: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
    <div className="bg-white rounded-lg shadow-card p-6 sm:p-8">
      <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 mb-4">Make a Donation</h1>
      <p className="text-sm sm:text-base lg:text-lg text-neutral-700 mb-8">Your contribution makes a difference in transforming lives and communities.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg text-neutral-900 mb-2">General Donation</h3>
          <p className="text-sm text-neutral-600">Support our overall mission and programs</p>
        </div>
        <div className="p-4 sm:p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg text-neutral-900 mb-2">Zakat</h3>
          <p className="text-sm text-neutral-600">Shariah-compliant charitable giving</p>
        </div>
        <div className="p-4 sm:p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg text-neutral-900 mb-2">CSR Sponsorship</h3>
          <p className="text-sm text-neutral-600">Corporate social responsibility partnerships</p>
        </div>
        <div className="p-4 sm:p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg text-neutral-900 mb-2">Sponsor Individual</h3>
          <p className="text-sm text-neutral-600">Direct support for students and beneficiaries</p>
        </div>
        <div className="p-4 sm:p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-700 transition-colors cursor-pointer">
          <h3 className="font-semibold text-lg text-neutral-900 mb-2">Fundraisers</h3>
          <p className="text-sm text-neutral-600">Support specific campaigns and causes</p>
        </div>
      </div>
    </div>
  </div>
);
