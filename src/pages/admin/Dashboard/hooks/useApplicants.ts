import { useQuery } from '@tanstack/react-query';
import { fetchApplicants } from '@/pages/admin/Dashboard/api/applicant';
import type {
  ApplicantData,
  ApplicationFilterOption,
} from '@/pages/admin/Dashboard/types/dashboard';

interface useApplicantsResult {
  applicants: ApplicantData[];
  isLoading: boolean;
  isError: boolean;
}

export const useApplicants = (
  clubId: number,
  status?: ApplicationFilterOption,
): useApplicantsResult => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['applicants', clubId, status],
    queryFn: () => fetchApplicants(clubId, status),
    staleTime: 1000 * 60 * 2,
  });

  return {
    applicants: data || [],
    isLoading: isLoading,
    isError: isError,
  };
};
