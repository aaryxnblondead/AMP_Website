import React from 'react';

export interface SearchFilters {
  query: string;
  state: string;
  city: string;
  category: string;
  sort: 'relevance' | 'recent' | 'name';
}

interface Props {
  filters: SearchFilters;
  onChange: (next: SearchFilters) => void;
  onSearch: () => void;
}

export const FilterBar: React.FC<Props> = ({ filters, onChange, onSearch }) => {
  const set = (key: keyof SearchFilters, value: string) => {
    onChange({ ...filters, [key]: value } as SearchFilters);
  };

  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 shadow-card flex flex-col md:flex-row gap-3 md:items-end">
      <div className="flex-1">
        <label className="block text-sm text-neutral-700 mb-1">Search NGOs</label>
        <input
          type="text"
          value={filters.query}
          onChange={(e) => set('query', e.target.value)}
          placeholder="Name, cause, keywords"
          className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm text-neutral-700 mb-1">State</label>
        <input
          type="text"
          value={filters.state}
          onChange={(e) => set('state', e.target.value)}
          placeholder="e.g., Maharashtra"
          className="w-40 rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm text-neutral-700 mb-1">City</label>
        <input
          type="text"
          value={filters.city}
          onChange={(e) => set('city', e.target.value)}
          placeholder="e.g., Mumbai"
          className="w-40 rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm text-neutral-700 mb-1">Category</label>
        <select
          value={filters.category}
          onChange={(e) => set('category', e.target.value)}
          className="w-44 rounded-md border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">All</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="livelihood">Livelihood</option>
          <option value="women">Women Empowerment</option>
          <option value="environment">Environment</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-neutral-700 mb-1">Sort By</label>
        <select
          value={filters.sort}
          onChange={(e) => set('sort', e.target.value)}
          className="w-36 rounded-md border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="relevance">Relevance</option>
          <option value="recent">Most Recent</option>
          <option value="name">Name</option>
        </select>
      </div>

      <div className="md:ml-auto">
        <button
          className="h-10 px-5 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};
