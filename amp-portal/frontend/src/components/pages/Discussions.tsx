import React from 'react';

export const Discussions: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="font-display text-2xl text-neutral-900 mb-4">Discussion Corner</h1>
      <p className="text-neutral-700">This section will host community discussions, topics, and threads. Implementation is planned alongside Events and Resource pages.</p>
      <div className="mt-4 text-sm text-neutral-600">For now, this page is a placeholder and does not call the API.</div>
    </div>
  );
};
