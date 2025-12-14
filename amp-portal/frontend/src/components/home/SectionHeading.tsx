import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle }) => (
  <div className="text-center my-8">
    <h2 className="text-2xl md:text-3xl font-bold text-primary-700">{title}</h2>
    {subtitle && (
      <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);
