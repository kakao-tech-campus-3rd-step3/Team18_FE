import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateInterviewTime } from '@/pages/admin/Dashboard/api/applicant';
import { toast } from '@/shared/utils/toast';

export const useUpdateInterviewTime = (clubId: number, applicantId: number) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (interviewAt: string) => updateInterviewTime(clubId, applicantId, interviewAt),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applicants', clubId] });
    },
    onError: (error: Error) => {
      toast.error(error.message || '면접 시간 저장에 실패했습니다.');
    },
  });

  return { updateTime: mutate, isPending };
};
