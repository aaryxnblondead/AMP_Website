import React from 'react';
import { Breadcrumb } from './Breadcrumb';

interface PageLayoutProps {
  breadcrumbs: Array<{ label: string; path?: string }>;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  headerAction?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  breadcrumbs,
  title,
  subtitle,
  children,
  headerAction,
}) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
    <div className="mb-6 sm:mb-8">
      <Breadcrumb items={breadcrumbs} />
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary-700 mb-3 sm:mb-4">
            {title}
          </h1>
          {subtitle && <p className="text-sm sm:text-base lg:text-lg text-neutral-700">{subtitle}</p>}
        </div>
        {headerAction && <div className="w-full sm:w-auto flex-shrink-0">{headerAction}</div>}
      </div>
    </div>
    {children}
  </div>
);
