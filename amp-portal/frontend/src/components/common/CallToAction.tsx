import React from 'react';
import { Button } from './Button';

interface CTAButton {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

interface CallToActionProps {
  title: string;
  description?: string;
  buttons: CTAButton[];
  className?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttons,
  className = '',
}) => (
  <div className={`bg-primary-700 text-white rounded-lg p-8 text-center ${className}`}>
    <h2 className="text-2xl font-display font-bold mb-4">{title}</h2>
    {description && <p className="mb-6 text-lg">{description}</p>}
    <div className="flex flex-wrap justify-center gap-4">
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={button.variant || 'outline'}
          onClick={button.onClick}
        >
          {button.label}
        </Button>
      ))}
    </div>
  </div>
);
