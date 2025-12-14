import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { ngoAPI } from '../../services/api';
import { LoadingState, ErrorState } from '../common/States';
import { Card } from '../common/Card';
import { PageLayout } from '../common/PageLayout';

export const NGODetail: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error, execute } = useApi<any>(ngoAPI.getNGOById);

  useEffect(() => {
    if (id) execute(Number(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) return <div className="max-w-5xl mx-auto px-4 py-6"><LoadingState message="Loading NGO details..." /></div>;
  if (error) return <div className="max-w-5xl mx-auto px-4 py-6"><ErrorState message="Failed to load NGO details." onRetry={() => id && execute(Number(id))} /></div>;

  const ngo = data?.ngo || data;

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Search NGOs', path: '/search-ngos' },
        { label: ngo?.name || 'NGO Details' },
      ]}
      title={ngo?.name || 'NGO Details'}
      subtitle={ngo?.city && ngo?.state ? `${ngo.city}, ${ngo.state}` : (ngo?.city || ngo?.state || '')}
    >
      <Card className="mb-8">
        <h2 className="text-xl font-display font-semibold text-neutral-900 mb-4">About</h2>
        <p className="text-neutral-700">{ngo?.description || 'No description available.'}</p>
      </Card>

      {(ngo?.contact_email || ngo?.phone) && (
        <Card>
          <h2 className="text-xl font-display font-semibold text-neutral-900 mb-4">Contact Information</h2>
          <div className="space-y-2 text-neutral-700">
            {ngo?.contact_email && (
              <p className="flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <a href={`mailto:${ngo.contact_email}`} className="text-primary-700 hover:underline">
                  {ngo.contact_email}
                </a>
              </p>
            )}
            {ngo?.phone && (
              <p className="flex items-center gap-2">
                <span className="font-semibold">Phone:</span>
                <a href={`tel:${ngo.phone}`} className="text-primary-700 hover:underline">
                  {ngo.phone}
                </a>
              </p>
            )}
          </div>
        </Card>
      )}
    </PageLayout>
  );
};
