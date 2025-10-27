import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { theme } from '@/styles/theme';
import { overwriteApplicationForm, postApplicationForm } from '../api/apply';
import type { FormInputs } from '../type/apply';

export const useApplicationSubmit = (clubId: number, questionArray: string[]) => {
  const navigate = useNavigate();
  const handleOverwriteConfirm = async (data: FormInputs) => {
    try {
      await overwriteApplicationForm(clubId, data, questionArray);
      toast.success('제출 성공!', {
        style: {
          backgroundColor: theme.colors.primary,
          color: 'white',
        },
        duration: 1000,
        onAutoClose: () => navigate(`/clubs/${clubId}`),
      });
    } catch {
      toast.error('제출 실패!', {
        duration: 1000,
        style: {
          backgroundColor: 'white',
          color: theme.colors.error,
        },
      });
    }
  };
  const handleSubmit = async (data: FormInputs) => {
    try {
      const result = await postApplicationForm(clubId, data, questionArray);
      if (result.status === 202) {
        toast('이미 제출된 지원서가 있습니다.', {
          description: '덮어쓰시겠습니까?',
          action: {
            label: '예',
            onClick: () => handleOverwriteConfirm(data),
          },
          cancel: {
            label: '아니오',
            onClick: () => {},
          },
          duration: Infinity,
        });
        return;
      }
      toast.success('제출 성공!', {
        style: {
          backgroundColor: theme.colors.primary,
          color: 'white',
        },
        duration: 1000,
        onAutoClose: () => navigate(`/clubs/${clubId}`),
      });
    } catch {
      toast.error('제출 실패!', {
        duration: 1000,
        style: {
          backgroundColor: 'white',
          color: theme.colors.error,
        },
      });
    }
  };
  return { handleSubmit };
};
