import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { ROUTE_PATH } from '@/constants/routerPath';
import { useAuth } from '@/providers/auth';
import { getTemporaryToken, removeTemporaryToken } from '@/shared/auth/token';
import { theme } from '@/styles/theme';
import { postSignupForm, type RegisterSuccessResponse } from '../api/signup';
import type { SignupFormInputs } from '../type/signup';

export const useSignup = () => {
  const navigate = useNavigate();
  const { completeSignup } = useAuth();

  const onSubmit = async (signupFormValue: SignupFormInputs) => {
    const temporaryToken = getTemporaryToken();

    if (!temporaryToken) {
      toast.error('회원가입을 위한 토큰이 존재하지 않습니다.');
      return;
    }

    try {
      const response: RegisterSuccessResponse = await postSignupForm(
        signupFormValue,
        temporaryToken,
      );

      completeSignup(response.accessToken);
      toast.success('회원가입 완료!', {
        style: { backgroundColor: theme.colors.primary, color: 'white' },
        duration: 1000,
        onAutoClose: () => navigate(ROUTE_PATH.COMMON.MAIN),
      });
      removeTemporaryToken();
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message, {
          duration: 1000,
          style: {
            backgroundColor: 'white',
            color: theme.colors.error,
          },
        });
      }
    }
  };
  return { onSubmit };
};
