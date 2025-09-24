import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchDetailApplication,
  updateApplicationStatus,
} from '@/pages/admin/ApplicationDetail/api/detailApplication';
import type { DetailApplication } from '@/pages/admin/ApplicationDetail/types/detailApplication';
import type { UseApiQueryResult } from '@/types/useApiQueryResult';

type UseDetailApplicationResult = UseApiQueryResult<DetailApplication | null> & {
  updateStatus: (status: DetailApplication['status']) => void;
};

export const useDetailApplications = (
  clubId: number,
  applicantId: number,
): UseDetailApplicationResult => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['detailApplications', clubId, applicantId],
    queryFn: () => fetchDetailApplication(clubId!, applicantId!),
    staleTime: 1000 * 60 * 5,
  });

  const { mutate: updateStatus } = useMutation({
    mutationFn: (status: DetailApplication['status']) => {
      if (!data?.applicationId) {
        throw new Error('신청서 ID를 찾을 수 없습니다.');
      }
      return updateApplicationStatus(data.applicationId, status);
    },
    onSuccess: (_, newStatus) => {
      queryClient.setQueryData(
        ['detailApplications', clubId, applicantId],
        (oldData: DetailApplication | undefined) => {
          if (oldData) {
            return { ...oldData, status: newStatus };
          }
          return oldData;
        },
      );
      queryClient.invalidateQueries({ queryKey: ['applicants'] });
    },
  });

  return {
    data: data || null,
    isLoading,
    isError,
    updateStatus,
  };
};
