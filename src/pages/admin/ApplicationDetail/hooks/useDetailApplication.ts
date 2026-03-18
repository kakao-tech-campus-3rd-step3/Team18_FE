import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import {
  fetchDetailApplication,
  updateApplicationStatus,
} from '@/pages/admin/ApplicationDetail/api/detailApplication';
import { toast } from '@/shared/utils/toast';
import type { DetailApplication } from '@/pages/admin/ApplicationDetail/types/detailApplication';

export const useDetailApplications = (clubId: number, applicantId: number) => {
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: ['detailApplications', clubId, applicantId],
    queryFn: () => fetchDetailApplication(clubId, applicantId),
    staleTime: 1000 * 60 * 5,
  });

  const { mutate: updateStatus } = useMutation({
    mutationFn: (status: DetailApplication['status']) => {
      if (!data?.applicationId) {
        throw new Error('신청서 ID를 찾을 수 없습니다.');
      }
      return updateApplicationStatus(data.applicationId, clubId, status);
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
      queryClient.invalidateQueries({ queryKey: ['applicants', clubId] });
      queryClient.invalidateQueries({ queryKey: ['dashboardSummary', clubId] });
    },
    onError: (error: Error) => {
      toast.error(error.message || '지원서 상태 변경에 실패했습니다.');
    },
  });

  return { data, updateStatus };
};
