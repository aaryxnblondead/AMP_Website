import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => (
  <div className={`bg-white rounded-xl shadow-md p-6 ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}>
    {children}
  </div>
);

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
  color?: 'primary' | 'blue' | 'green';
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, icon, color = 'primary' }) => {
  const colorClasses = {
    primary: 'text-primary-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
  };
  
  return (
    <Card hover className="text-center">
      {icon && <div className="text-5xl mb-3">{icon}</div>}
      <div className={`text-5xl font-bold ${colorClasses[color]} mb-2`}>{value}</div>
      <div className="text-neutral-600 font-medium">{label}</div>
    </Card>
  );
};

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
  <Card hover className={className}>
    <div className="flex gap-4">
      <div className="text-4xl flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-neutral-900 text-lg mb-2">{title}</h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </Card>
);

interface ActionCardProps {
  title: string;
  description: string;
  icon?: string;
  to?: string;
  onClick?: () => void;
  buttonText?: string;
  variant?: 'primary' | 'blue' | 'green';
}

export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  icon,
  to,
  onClick,
  buttonText = 'Learn More',
  variant = 'primary',
}) => {
  const variantClasses = {
    primary: 'bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200',
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    green: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
  };
  
  const buttonVariants = {
    primary: 'bg-primary-600 hover:bg-primary-700',
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
  };
  
  return (
    <div className={`${variantClasses[variant]} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300`}>
      {icon && <div className="text-5xl mb-4">{icon}</div>}
      <h3 className="font-bold text-neutral-900 text-xl mb-3">{title}</h3>
      <p className="text-neutral-700 mb-4 leading-relaxed">{description}</p>
      {to ? (
        <Link 
          to={to} 
          className={`inline-block px-5 py-2.5 rounded-lg ${buttonVariants[variant]} text-white font-semibold transition-colors`}
        >
          {buttonText} →
        </Link>
      ) : onClick ? (
        <button 
          onClick={onClick}
          className={`inline-block px-5 py-2.5 rounded-lg ${buttonVariants[variant]} text-white font-semibold transition-colors`}
        >
          {buttonText} →
        </button>
      ) : null}
    </div>
  );
};
