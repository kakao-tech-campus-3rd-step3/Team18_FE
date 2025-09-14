import { useQuery } from '@tanstack/react-query';
import { fetchDetailApplication } from '../api/detailApplication';
import type { DetailApplication } from '@/types/detailApplication';

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
