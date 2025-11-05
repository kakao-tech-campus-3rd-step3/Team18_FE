import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { ROUTE_PATH } from '@/constants/routerPath';
import { useAuth } from '@/providers/auth';
import type { LoginResponse } from '../api/auth';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';

export function useKakaoLogin() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const code = new URL(window.location.href).searchParams.get('code');

    if (!code) {
      setIsLoading(false);
      navigate(`/${ROUTE_PATH.COMMON.LOGIN}`);
      return;
    }

    const processLogin = async () => {
      try {
        const response: LoginResponse = await login(code, controller.signal);
        if (response.status === 'LOGIN_SUCCESS') navigate(ROUTE_PATH.COMMON.MAIN);
        else navigate(`/${ROUTE_PATH.COMMON.SIGNUP}`);
      } catch (e: unknown) {
        if (isAxiosError(e) && e.code === 'ERR_CANCELED') {
          return;
        }
        if (isAxiosError<ErrorResponse>(e)) {
          toast.error(e.response?.data.message);
        } else {
          toast.error('로그인 중 오류가 발생했습니다.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    processLogin();

    return () => controller.abort();
  }, [login, navigate]);
  return { isLoading };
}
