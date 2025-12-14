import React, { useEffect, useMemo, useState } from 'react';
import { FilterBar, SearchFilters } from '../search/FilterBar';
import { NGOCard, NGO } from '../search/NGOCard';
import { useApi } from '../../hooks/useApi';
import { ngoAPI } from '../../services/api';

interface SearchResponse {
  items: NGO[];
  page: number;
  pageSize: number;
  total: number;
}

export const SearchNGOs: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    state: '',
    city: '',
    category: '',
    sort: 'relevance',
  });

  const [page, setPage] = useState(1);
  const { data, loading, error, execute } = useApi<SearchResponse>(ngoAPI.searchNGOs);

  const params = useMemo(() => ({
    q: filters.query || undefined,
    state: filters.state || undefined,
    city: filters.city || undefined,
    category: filters.category || undefined,
    sort: filters.sort,
    page,
    pageSize: 12,
  }), [filters, page]);

  const search = async () => {
    try {
      await execute(params);
    } catch (e) {
      // handled in hook state; avoid crashing the app
    }
  };

  useEffect(() => {
    // initial load
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = (data?.items || []) as NGO[];
  const totalPages = data ? Math.ceil(data.total / data.pageSize) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="font-display text-2xl text-neutral-900 mb-4">Search NGOs</h1>

      <FilterBar filters={filters} onChange={setFilters} onSearch={() => { setPage(1); search(); }} />

      <div className="mt-6">
        {loading && <div className="text-neutral-700">Loading results…</div>}
        {error && (
          <div className="text-red-700">{error.response?.data as any || 'Failed to fetch NGOs'}</div>
        )}
        {!loading && items.length === 0 && (
          <div className="text-neutral-700">No NGOs found. Try different filters.</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((ngo) => (
            <NGOCard key={ngo.id} ngo={ngo} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              className="px-3 py-1 rounded border border-neutral-300 bg-white disabled:opacity-50"
              disabled={page <= 1}
              onClick={() => { setPage((p) => Math.max(1, p - 1)); search(); }}
            >
              Prev
            </button>
            <span className="text-sm text-neutral-700">Page {page} of {totalPages}</span>
            <button
              className="px-3 py-1 rounded border border-neutral-300 bg-white disabled:opacity-50"
              disabled={page >= totalPages}
              onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); search(); }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
