import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { fetchApplicants } from '@/pages/admin/Dashboard/api/applicant';
import type {
  ApplicantData,
  ApplicantsApiResponse,
  ApplicationFilterOption,
  ApplicantCounts,
} from '@/pages/admin/Dashboard/types/dashboard';
import type { UseApiQueryResult } from '@/shared/types/useApiQueryResult';

export interface ExtendedUseApiQueryResult<T> extends UseApiQueryResult<T> {
  counts: ApplicantCounts;
}

export const useApplicants = (
  clubId: number,
  stage: 'INTERVIEW' | 'FINAL',
  status?: ApplicationFilterOption,
): ExtendedUseApiQueryResult<ApplicantData[]> => {
  const {
    data: responseData,
    isLoading,
    error,
  } = useQuery<ApplicantsApiResponse>({
    queryKey: ['applicants', clubId, stage],
    queryFn: () => fetchApplicants(clubId, stage),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 30000,
    enabled: !!stage,
  });

  const applicants = responseData?.applicants || [];

  const filteredData = useMemo(() => {
    if (!Array.isArray(applicants)) return [];
    if (!status || status === 'ALL') return applicants;

    return applicants.filter((applicant) => applicant.status === status);
  }, [applicants, status]);

  const counts = useMemo(() => {
    if (!Array.isArray(applicants)) return { ALL: 0, PENDING: 0, APPROVED: 0, REJECTED: 0 };

    const initialCounts = {
      ALL: applicants.length,
      PENDING: 0,
      APPROVED: 0,
      REJECTED: 0,
    };

    return applicants.reduce((acc, applicant) => {
      acc[applicant.status] += 1;
      return acc;
    }, initialCounts);
  }, [applicants]);

  return {
    data: filteredData,
    isLoading,
    error,
    counts,
  };
};
