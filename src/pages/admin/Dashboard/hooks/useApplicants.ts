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
  stage: 'INTERVIEW' | 'FINAL',
  status?: ApplicationFilterOption,
): ExtendedUseApiQueryResult<ApplicantData[]> => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['applicants', clubId, stage],
    queryFn: () => fetchApplicants(clubId, stage),
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

    return data.reduce(
      (acc, applicant) => {
        acc[applicant.status] += 1;
        return acc;
      },
      {
        ALL: data.length,
        PENDING: 0,
        APPROVED: 0,
        REJECTED: 0,
      },
    );
  }, [data]);

  return {
    data: filteredData,
    isLoading,
    error,
    counts,
  };
};
