import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sentMessage } from '@/pages/admin/Dashboard/api/sentMessage';

export const useSentMessage = (clubId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (message: string) => sentMessage(clubId, message),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applicants', clubId] });
    },
  });

  return mutation;
};
