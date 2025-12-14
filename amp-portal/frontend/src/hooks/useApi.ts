import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

// Generic API hook to execute async calls with standard state
export const useApi = <T,>(apiFunction: (...args: any[]) => Promise<any>) => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (...args: any[]) => {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const response = await apiFunction(...args);
      setState({ data: response.data?.data ?? response.data, loading: false, error: null });
      return response;
    } catch (error: any) {
      setState({ data: null, loading: false, error });
      throw error;
    }
  }, [apiFunction]);

  return { ...state, execute };
};
