import { useQuery } from '@tanstack/react-query';
import { fetchApplicants } from '@/pages/admin/Dashboard/api/applicant';
import type { ApplicantData } from '@/types/dashboard';

interface useApplicantsResult {
  applicants: ApplicantData[];
  isLoading: boolean;
  isError: boolean;
}
export const useApplicants = (clubId: number): useApplicantsResult => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['applicants', clubId],
    queryFn: () => fetchApplicants(clubId),
  });

  return {
    applicants: data || [],
    isLoading: isLoading,
    isError: isError,
  };
};
