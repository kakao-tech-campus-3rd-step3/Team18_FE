import { useQuery } from '@tanstack/react-query';
import { fetchApplicants } from '@/pages/admin/Dashboard/api/applicant';

export const useApplicants = (clubId: number | null) => {
  return useQuery({
    queryKey: ['applicants', clubId],
    queryFn: () => fetchApplicants(clubId!),
  });
};
