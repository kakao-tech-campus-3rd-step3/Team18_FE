import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { toast } from '@/shared/utils/toast';
import { fetchApplicationForm, patchApplicationForm, postApplicationForm } from '../api/apply-form';
import type { ApplicationForm } from '../types/fieldType';

export const useApplicationForm = (clubId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['apply-form', clubId],
    queryFn: () => fetchApplicationForm(clubId),
  });

  return { data };
};

export const usePostApplicationForm = (clubId: number) => {
  const queryClient = useQueryClient();
  const { mutate: postForm, isSuccess } = useMutation<ApplicationForm, Error, ApplicationForm>({
    mutationFn: (form: ApplicationForm) => postApplicationForm({ clubId, form }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apply-form', clubId] });
    },
    onError: (error: Error) => {
      toast.error(error.message || '지원서 양식 저장에 실패했습니다.');
    },
  });
  return { postForm, isSuccess };
};

export const usePatchApplicationForm = (clubId: number) => {
  const queryClient = useQueryClient();
  const { mutate: patchForm, isSuccess } = useMutation<
    ApplicationForm,
    Error,
    Partial<ApplicationForm>
  >({
    mutationFn: (form: Partial<ApplicationForm>) => patchApplicationForm({ clubId, form }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apply-form', clubId] });
    },
    onError: (error: Error) => {
      toast.error(error.message || '지원서 양식 수정에 실패했습니다.');
    },
  });

  return { patchForm, isSuccess };
};
