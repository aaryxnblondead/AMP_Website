import React from 'react';
import { Link } from 'react-router-dom';

export interface NGO {
  id: number;
  name: string;
  description?: string;
  city?: string;
  state?: string;
  category?: string;
  website?: string;
}

export const NGOCard: React.FC<{ ngo: NGO }> = ({ ngo }) => {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-card overflow-hidden">
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg leading-6 text-neutral-900">{ngo.name}</h3>
            <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{ngo.description || '—'}</p>
            <div className="mt-2 text-sm text-neutral-700">
              {(ngo.city || ngo.state) && (
                <span>
                  {(ngo.city || '') + (ngo.city && ngo.state ? ', ' : '') + (ngo.state || '')}
                </span>
              )}
              {ngo.category && <span className="ml-3 inline-block px-2 py-0.5 text-xs bg-neutral-100 border border-neutral-200 rounded">{ngo.category}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between">
        <Link
          to={`/ngos/${ngo.id}`}
          className="text-primary-700 hover:text-primary-800 font-medium"
        >
          View Details
        </Link>
        {ngo.website && (
          <a
            href={ngo.website}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
};
