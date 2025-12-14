import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  columns?: 2 | 3 | 4;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps, columns = 4 }) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };
  
  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {steps.map((step) => (
        <div key={step.number} className="text-center">
          <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
            {step.number}
          </div>
          <h3 className="font-semibold text-neutral-900 mb-2">{step.title}</h3>
          <p className="text-sm text-neutral-700">{step.description}</p>
        </div>
      ))}
    </div>
  );
};
