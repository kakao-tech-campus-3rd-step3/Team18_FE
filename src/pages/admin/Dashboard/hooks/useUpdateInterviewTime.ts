import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateInterviewTime } from '@/pages/admin/Dashboard/api/applicant';

export const useUpdateInterviewTime = (clubId: number, applicantId: number) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (interviewAt: string) => updateInterviewTime(clubId, applicantId, interviewAt),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applicants', clubId] });
    },
  });

  return { updateTime: mutate, isPending };
};
