import React from 'react';

export const NGOOfMonth: React.FC = () => {
  return (
    <div className="bg-cream-100 rounded-xl p-6 shadow-card">
      <h3 className="text-xl font-bold text-primary-700">NGO of the Month</h3>
      <p className="mt-1 text-neutral-700">Community Health Initiative</p>
      <ul className="mt-4 space-y-2 text-neutral-700">
        <li>• 40% reduction in infant mortality</li>
        <li>• 50+ mobile health camps monthly</li>
        <li>• 100+ healthcare workers trained</li>
      </ul>
      <button className="mt-4 px-4 py-2 rounded-full bg-primary-700 text-white">View Profile</button>
    </div>
  );
};
