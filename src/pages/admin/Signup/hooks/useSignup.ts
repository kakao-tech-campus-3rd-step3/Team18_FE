import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/app/constants/routerPath';
import { useAuth } from '@/app/providers/auth';
import { getTemporaryToken, removeTemporaryToken } from '@/shared/auth/token';
import { toast } from '@/shared/utils/toast';
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
      completeSignup(signupFormValue, temporaryToken);

      toast.success('회원가입 완료!', () => navigate(ROUTE_PATH.COMMON.MAIN));
      removeTemporaryToken();
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      }
    }
  };
  return { onSubmit };
};
