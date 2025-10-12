import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { fetchApplicants } from '@/pages/admin/Dashboard/api/applicant';
import type {
  ApplicantData,
  ApplicationFilterOption,
  ApplicantCounts,
} from '@/pages/admin/Dashboard/types/dashboard';
import type { UseApiQueryResult } from '@/types/useApiQueryResult';

export interface ExtendedUseApiQueryResult<T> extends UseApiQueryResult<T> {
  counts: ApplicantCounts;
}

export const useApplicants = (
  clubId: number,
  status?: ApplicationFilterOption,
): ExtendedUseApiQueryResult<ApplicantData[]> => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['applicants', clubId],
    queryFn: () => fetchApplicants(clubId),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 30000,
  });

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (!status || status === 'ALL') return data;

    return data.filter((applicant) => applicant.status === status);
  }, [data, status]);

  const counts = useMemo(() => {
    if (!data) return { ALL: 0, PENDING: 0, APPROVED: 0, REJECTED: 0 };

    return {
      ALL: data.length,
      PENDING: data.filter((a) => a.status === 'PENDING').length,
      APPROVED: data.filter((a) => a.status === 'APPROVED').length,
      REJECTED: data.filter((a) => a.status === 'REJECTED').length,
    };
  }, [data]);

  return {
    data: filteredData,
    isLoading,
    error,
    counts,
  };
};
