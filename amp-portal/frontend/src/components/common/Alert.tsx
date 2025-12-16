import React from 'react';

interface AlertProps {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  onClose?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  onClose,
  className = '',
}) => {
  const styles = {
    success: {
      bg: 'bg-success-50',
      border: 'border-success-500',
      text: 'text-success-700',
      icon: '✓',
    },
    error: {
      bg: 'bg-error-50',
      border: 'border-error-500',
      text: 'text-error-700',
      icon: '✗',
    },
    warning: {
      bg: 'bg-warning-50',
      border: 'border-warning-500',
      text: 'text-warning-700',
      icon: '⚠',
    },
    info: {
      bg: 'bg-info-50',
      border: 'border-info-500',
      text: 'text-info-700',
      icon: 'ℹ',
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} border-l-4 ${style.border} p-4 rounded-lg ${className}`} role="alert">
      <div className="flex items-start gap-3">
        <span className={`text-2xl ${style.text} flex-shrink-0`}>{style.icon}</span>
        <div className="flex-1">
          {title && <h4 className={`font-bold ${style.text} mb-1`}>{title}</h4>}
          <p className={`${style.text} text-sm`}>{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={`${style.text} hover:opacity-70 transition-opacity flex-shrink-0`}
            aria-label="Close"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

interface BannerProps {
  type?: 'announcement' | 'urgent' | 'event';
  message: string;
  action?: {
    text: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
}

export const Banner: React.FC<BannerProps> = ({
  type = 'announcement',
  message,
  action,
  onDismiss,
}) => {
  const styles = {
    announcement: 'bg-blue-600',
    urgent: 'bg-red-600',
    event: 'bg-green-600',
  };

  return (
    <div className={`${styles[type]} text-white py-3 px-4`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <p className="font-medium text-sm sm:text-base">{message}</p>
        <div className="flex items-center gap-3">
          {action && (
            <button
              onClick={action.onClick}
              className="px-4 py-1.5 bg-white text-neutral-900 rounded-lg font-semibold text-sm hover:bg-neutral-100 transition-colors"
            >
              {action.text}
            </button>
          )}
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="Dismiss"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({
  steps,
  currentStep,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                  index < currentStep
                    ? 'bg-success-500 text-white'
                    : index === currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-neutral-200 text-neutral-500'
                }`}
              >
                {index < currentStep ? '✓' : index + 1}
              </div>
              <p
                className={`mt-2 text-xs sm:text-sm font-medium text-center ${
                  index <= currentStep ? 'text-neutral-900' : 'text-neutral-500'
                }`}
              >
                {step}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2 -mt-10">
                <div
                  className={`h-full ${
                    index < currentStep ? 'bg-success-500' : 'bg-neutral-200'
                  }`}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
