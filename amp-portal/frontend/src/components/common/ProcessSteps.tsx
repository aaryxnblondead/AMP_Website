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
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };
  
  return (
    <div className={`grid grid-cols-1 gap-4 sm:gap-6 ${gridCols[columns]}`}>
      {steps.map((step) => (
        <div key={step.number} className="text-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-2 sm:mb-3">
            {step.number}
          </div>
          <h3 className="font-semibold text-sm sm:text-base text-neutral-900 mb-1 sm:mb-2">{step.title}</h3>
          <p className="text-xs sm:text-sm text-neutral-700">{step.description}</p>
        </div>
      ))}
    </div>
  );
};
