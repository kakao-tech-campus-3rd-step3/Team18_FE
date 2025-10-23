import { useEffect, useState } from 'react';
import { setAccessToken, setTemporaryToken } from '@/pages/admin/Signup/utils/token';
import { postAuthCode } from '../api/postAuthCode';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AxiosError } from 'axios';

interface LoginSuccessResponse {
  status: 'LOGIN_SUCCESS';
  accessToken: string;
  refreshToken: string;
}

interface RegistrationRequiredResponse {
  status: 'REGISTRATION_REQUIRED';
  temporaryToken: string;
}

type LoginResponse = LoginSuccessResponse | RegistrationRequiredResponse;

export const useAuthCode = (navigate: (path: string) => void) => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (!code) {
      navigate('/login');
      return;
    }

    const fetchToken = async () => {
      setIsLoading(true);
      try {
        const response: LoginResponse = await postAuthCode(code);

        switch (response.status) {
          case 'LOGIN_SUCCESS':
            setAccessToken(response.accessToken);
            navigate('/');
            break;
          case 'REGISTRATION_REQUIRED':
            setTemporaryToken(response.temporaryToken);
            navigate('/signup');
            break;
        }
      } catch (e) {
        const error = e as AxiosError<ErrorResponse>;
        setErrorMessage(error.response?.data.message ?? '로그인 중 오류 발생');
      } finally {
        setIsLoading(false);
      }
    };
    fetchToken();
  });

  return { errorMessage, isLoading };
};
