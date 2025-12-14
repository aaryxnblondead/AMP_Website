import React, { useEffect, useMemo, useState } from 'react';
import { FilterBar, SearchFilters } from '../search/FilterBar';
import { NGOCard, NGO } from '../search/NGOCard';
import { useApi } from '../../hooks/useApi';
import { ngoAPI } from '../../services/api';
import { LoadingState, ErrorState, EmptyState } from '../common/States';
import { PageLayout } from '../common/PageLayout';
import { Button } from '../common/Button';

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
    <PageLayout
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Search NGOs' },
      ]}
      title="Search NGOs"
      subtitle="Find and connect with NGOs across India"
    >
      <FilterBar filters={filters} onChange={setFilters} onSearch={() => { setPage(1); search(); }} />

      <div className="mt-6">
        {loading && <LoadingState message="Searching NGOs..." />}
        {error && (
          <ErrorState 
            message={error.response?.data as any || 'Failed to fetch NGOs'} 
            onRetry={search}
          />
        )}
        {!loading && items.length === 0 && (
          <EmptyState
            icon="🔍"
            title="No NGOs found"
            description="Try adjusting your search filters or search terms"
          />
        )}

        {items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((ngo) => (
              <NGOCard key={ngo.id} ngo={ngo} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              disabled={page <= 1}
              onClick={() => { setPage((p) => Math.max(1, p - 1)); search(); }}
            >
              Prev
            </Button>
            <span className="text-sm text-neutral-700 px-4">Page {page} of {totalPages}</span>
            <Button
              variant="secondary"
              size="sm"
              disabled={page >= totalPages}
              onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); search(); }}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};
