import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchApplicationForm, patchApplicationForm, postApplicationForm } from '../api/apply-form';
import type { ApplicationForm } from '../types/fieldType';

export const useApplicationForm = (clubId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['apply-form', clubId],
    queryFn: () => fetchApplicationForm(clubId),
  });

  return {
    data: data || undefined,
    isLoading,
    error,
  };
};

export const usePostApplicationForm = (clubId: number) => {
  const queryClient = useQueryClient();
  const { mutate: postForm, isSuccess } = useMutation<ApplicationForm, Error, ApplicationForm>({
    mutationFn: (form: ApplicationForm) => postApplicationForm({ clubId, form }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apply-form', clubId] });
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
  });

  return { patchForm, isSuccess };
};
