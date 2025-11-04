import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/providers/auth';
import { handleAxiosError } from '@/utils/handleAxiosError';
import type { LoginResponse } from '../api/auth';

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
      navigate('/login');
      return;
    }

    const processLogin = async () => {
      try {
        const response: LoginResponse = await login(code, controller.signal);
        if (response.status === 'LOGIN_SUCCESS') navigate('/');
        else navigate('/signup');
      } catch (e: unknown) {
        if (isAxiosError(e) && e.code === 'ERR_CANCELED') {
          return;
        }
        handleAxiosError(e, '로그인 요청이 실패하였습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    processLogin();

    return () => controller.abort();
  }, [login, navigate]);
  return { isLoading };
}
