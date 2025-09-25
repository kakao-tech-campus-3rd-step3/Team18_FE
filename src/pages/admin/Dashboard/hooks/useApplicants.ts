import { useQuery } from '@tanstack/react-query';
import { fetchApplicants } from '@/pages/admin/Dashboard/api/applicant';
import type {
  ApplicantData,
  ApplicationFilterOption,
} from '@/pages/admin/Dashboard/types/dashboard';
import type { UseApiQueryResult } from '@/types/useApiQueryResult';

export const useApplicants = (
  clubId: number,
  status?: ApplicationFilterOption,
): UseApiQueryResult<ApplicantData[]> => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['applicants', clubId, status],
    queryFn: () => fetchApplicants(clubId, status),
    staleTime: 1000 * 60 * 2,
  });

  return {
    data: data || [],
    isLoading,
    error,
  };
};
