import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  className = '' 
}) => (
  <div className={`mb-6 ${className}`}>
    <h2 className="text-2xl font-display font-bold text-neutral-900 mb-2">{title}</h2>
    {subtitle && <p className="text-neutral-700">{subtitle}</p>}
  </div>
);
