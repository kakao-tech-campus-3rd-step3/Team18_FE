import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { sentMessage } from '@/pages/admin/Dashboard/api/sentMessage';
import { toast } from '@/shared/utils/toast';
import type { ApplicationStage } from '@/pages/admin/Dashboard/types/dashboard';

interface BackendErrorResponse {
  error_code: string;
  message: string;
}

export const useSentMessage = (clubId: number, stage: ApplicationStage) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (message: string) => sentMessage(clubId, message, stage),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applicants', clubId] });
      toast.success('결과가 전송되었습니다.');
    },
    onError: (error: AxiosError) => {
      const backendError = error.response?.data as BackendErrorResponse;
      const errorMessage = backendError?.message;
      const errorCode = backendError?.error_code;

      if (errorCode === 'PENDING_APPLICATION_EXISTS') {
        toast.error(errorMessage);
      } else if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.error('결과 전송이 실패하였습니다.');
      }
    },
  });

  return { ...mutation, isLoading: mutation.isPending };
};
