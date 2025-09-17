import { useQuery } from '@tanstack/react-query';
import { fetchDetailApplication } from '@/pages/admin/ApplicationDetail/api/detailApplication';
import type { DetailApplication } from '@/pages/admin/ApplicationDetail/types/detailApplication';

interface UseDetailApplicationResult {
  detailApplicants: DetailApplication | null;
  isLoading: boolean;
  isError: boolean;
}

export const useDetailApplications = (
  clubId: number,
  applicantId: number,
): UseDetailApplicationResult => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['detailApplications', clubId, applicantId],
    queryFn: () => fetchDetailApplication(clubId!, applicantId!),
  });

  return {
    detailApplicants: data || null,
    isLoading: isLoading,
    isError: isError,
  };
};
