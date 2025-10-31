import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sentMessage } from '@/pages/admin/Dashboard/api/sentMessage';
import { toast } from 'sonner';
import type { ApplicationStage } from '@/pages/admin/Dashboard/types/dashboard';

export const useSentMessage = (clubId: number, stage: ApplicationStage) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (message: string) => sentMessage(clubId, message, stage),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applicants', clubId] });
      toast.success('결과가 전송되었습니다.');
    },
    onError: () => {
      toast.error('결과 전송이 실패하였습니다.');
    },
  });

  return { ...mutation, isLoading: mutation.isPending };
};
