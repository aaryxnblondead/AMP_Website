import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-card p-6 ${className}`}>
    {children}
  </div>
);

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => (
  <Card className="text-center hover:shadow-xl transition-shadow">
    {icon && <div className="text-4xl mb-2">{icon}</div>}
    <div className="text-4xl font-bold text-primary-700 mb-2">{value}</div>
    <div className="text-neutral-600">{label}</div>
  </Card>
);

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  className = ''
}) => (
  <div className={`flex gap-4 ${className}`}>
    <div className="text-3xl flex-shrink-0">{icon}</div>
    <div>
      <h3 className="font-semibold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-700">{description}</p>
    </div>
  </div>
);
