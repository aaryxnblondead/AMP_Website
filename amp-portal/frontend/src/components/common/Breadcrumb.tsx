import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <nav className="text-sm text-neutral-600 mb-4">
    {items.map((item, index) => (
      <React.Fragment key={index}>
        {index > 0 && <span className="mx-2">/</span>}
        {item.path ? (
          <Link to={item.path} className="hover:text-primary-700 transition-colors">
            {item.label}
          </Link>
        ) : (
          <span className="text-neutral-900 font-semibold">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);
