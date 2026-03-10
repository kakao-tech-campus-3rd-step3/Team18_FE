import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast as sonnerToast } from 'sonner';
import { toast } from '@/shared/utils/toast';
import { overwriteApplicationForm, postApplicationForm } from '../api/apply';
import type { FormInputs } from '../type/apply';

export const useApplicationSubmit = (
  clubId: number,
  clubName: string,
  questionArray: string[],
  onSuccess?: () => void,
) => {
  const navigate = useNavigate();

  const { mutateAsync: overwrite } = useMutation({
    mutationFn: (data: FormInputs) => overwriteApplicationForm(clubId, data, questionArray),
    onSuccess: () => {
      toast.success('제출 성공!', () => {
        navigate(`/clubs/${clubId}`);
        onSuccess?.();
      });
    },
    onError: () => {
      toast.error('제출 실패!');
    },
  });

  const { mutateAsync: submit } = useMutation({
    mutationFn: (data: FormInputs) => postApplicationForm(clubId, data, questionArray),
    onSuccess: (result, data) => {
      if (result.status === 202) {
        sonnerToast('이미 제출된 지원서가 있습니다.', {
          description: '덮어쓰시겠습니까?',
          action: {
            label: '예',
            onClick: () => overwrite(data),
          },
          cancel: {
            label: '아니오',
            onClick: () => {},
          },
          duration: Infinity,
        });
        return;
      }

      toast.success('제출 성공!', () => {
        navigate(`/clubs/${clubId}`);
        onSuccess?.();
      });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (data: FormInputs) => {
    window.dataLayer?.push({ event: 'club_submit_click', clubId, clubName });
    submit(data);
  };

  return { handleSubmit };
};
