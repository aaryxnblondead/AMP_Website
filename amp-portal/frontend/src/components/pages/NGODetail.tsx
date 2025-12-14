import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { ngoAPI } from '../../services/api';

export const NGODetail: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error, execute } = useApi<any>(ngoAPI.getNGOById);

  useEffect(() => {
    if (id) execute(Number(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) return <div className="max-w-5xl mx-auto px-4 py-6">Loading NGO…</div>;
  if (error) return <div className="max-w-5xl mx-auto px-4 py-6 text-red-700">Failed to load NGO.</div>;

  const ngo = data?.ngo || data;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="font-display text-2xl text-neutral-900">{ngo?.name}</h1>
      <div className="mt-2 text-neutral-700">
        {(ngo?.city || ngo?.state) && (
          <p>{(ngo?.city || '') + (ngo?.city && ngo?.state ? ', ' : '') + (ngo?.state || '')}</p>
        )}
      </div>
      <div className="mt-6 prose max-w-none">
        <p>{ngo?.description || '—'}</p>
      </div>

      {ngo?.contact_email || ngo?.phone ? (
        <div className="mt-6 text-sm text-neutral-700">
          {ngo?.contact_email && <p>Email: {ngo.contact_email}</p>}
          {ngo?.phone && <p>Phone: {ngo.phone}</p>}
        </div>
      ) : null}
    </div>
  );
};
