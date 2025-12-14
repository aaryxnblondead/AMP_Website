import React from 'react';

export const FAQ: React.FC = () => {
  const faqs = {
    general: [
      { q: 'What is AMP?', a: 'AMP (Association of Muslim Professionals) is a community organization founded in 2007...' },
      { q: 'How can I contact AMP?', a: 'You can reach us at info@ampindia.org or call +91-7303116660' },
    ],
    nts: [
      { q: 'Who can participate in NTS 2025?', a: 'Students from Class 8th to 3rd year undergraduate can participate...' },
      { q: 'How do I register for NTS?', a: 'You can register online through our website, mobile app, or through bulk registration...' },
    ],
    donations: [
      { q: 'Is my donation tax-deductible?', a: 'Yes, AMP is registered under Section 80G...' },
      { q: 'How is Zakat distributed?', a: 'Zakat is distributed according to Islamic principles to eligible beneficiaries...' },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold text-primary-700 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-neutral-700">Find answers to common questions about AMP and our programs</p>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">General Questions</h2>
        <div className="space-y-4">
          {faqs.general.map((faq, index) => (
            <details key={index} className="border-b border-neutral-200 pb-4">
              <summary className="font-semibold text-neutral-900 cursor-pointer hover:text-primary-700">
                {faq.q}
              </summary>
              <p className="mt-2 text-neutral-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8 mb-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">NTS Related</h2>
        <div className="space-y-4">
          {faqs.nts.map((faq, index) => (
            <details key={index} className="border-b border-neutral-200 pb-4">
              <summary className="font-semibold text-neutral-900 cursor-pointer hover:text-primary-700">
                {faq.q}
              </summary>
              <p className="mt-2 text-neutral-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-8">
        <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">Donations & CSR</h2>
        <div className="space-y-4">
          {faqs.donations.map((faq, index) => (
            <details key={index} className="border-b border-neutral-200 pb-4">
              <summary className="font-semibold text-neutral-900 cursor-pointer hover:text-primary-700">
                {faq.q}
              </summary>
              <p className="mt-2 text-neutral-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};
