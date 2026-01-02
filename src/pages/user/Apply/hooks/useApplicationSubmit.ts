import { isAxiosError } from 'axios';
import ReactGA from 'react-ga4';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { theme } from '@/app/styles/theme';
import { overwriteApplicationForm, postApplicationForm } from '../api/apply';
import type { FormInputs } from '../type/apply';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';

export const useApplicationSubmit = (
  clubId: number,
  clubName: string,
  questionArray: string[],
  onSuccess?: () => void,
) => {
  const navigate = useNavigate();

  const handleOverwriteConfirm = async (data: FormInputs) => {
    try {
      await overwriteApplicationForm(clubId, data, questionArray);

      // [GA] 덮어쓰기 제출 성공 이벤트 전송
      ReactGA.event('click_submit_button', {
        event_category: 'ApplicationForm',
        club_name: clubName,
        status: 'overwrite',
      });

      toast.success('제출 성공!', {
        style: {
          backgroundColor: theme.colors.primary,
          color: 'white',
        },
        duration: 1000,
        onAutoClose: () => {
          navigate(`/clubs/${clubId}`);
          onSuccess?.();
        },
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

      // [GA] 신규 제출 성공 이벤트 전송
      ReactGA.event('click_submit_button', {
        event_category: 'ApplicationForm',
        club_name: clubName,
        status: 'new',
      });

      toast.success('제출 성공!', {
        style: {
          backgroundColor: theme.colors.primary,
          color: 'white',
        },
        duration: 1000,
        onAutoClose: () => {
          navigate(`/clubs/${clubId}`);
          onSuccess?.();
        },
      });
    } catch (e: unknown) {
      if (isAxiosError<ErrorResponse>(e)) {
        toast.error(e.response?.data.message, {
          duration: 1000,
          style: {
            backgroundColor: 'white',
            color: theme.colors.error,
          },
        });
      } else {
        toast.error('알 수 없는 오류가 발생했습니다.', {
          duration: 1000,
          style: {
            backgroundColor: 'white',
            color: theme.colors.error,
          },
        });
      }
    }
  };

  return { handleSubmit };
};
