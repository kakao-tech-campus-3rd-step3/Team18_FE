import { useQuery } from '@tanstack/react-query';
import { fetchApplicationForm } from '../api/apply-form';

export const useApplicationForm = (clubId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['apply-form', clubId],
    queryFn: () => fetchApplicationForm(clubId),
  });

  return {
    data: data || [],
    isLoading,
    error,
  };
};
