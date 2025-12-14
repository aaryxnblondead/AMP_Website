import React from 'react';
import { Button } from './Button';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = 'Loading...' 
}) => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-700 mb-4"></div>
    <p className="text-neutral-600">{message}</p>
  </div>
);

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ 
  message = 'Something went wrong', 
  onRetry 
}) => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="text-6xl mb-4">⚠️</div>
    <p className="text-red-700 mb-4">{message}</p>
    {onRetry && (
      <Button onClick={onRetry}>
        Try Again
      </Button>
    )}
  </div>
);

interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = '📭',
  title,
  description,
  action,
}) => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="text-6xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{title}</h3>
    {description && <p className="text-neutral-600 text-center mb-6 max-w-md">{description}</p>}
    {action}
  </div>
);
