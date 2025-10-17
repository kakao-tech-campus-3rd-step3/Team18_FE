import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { postAuthCode } from './api/postAuthCode';
import { setAccessToken, setTemporaryToken } from '../Signup/utils/token';
import type { ErrorResponse } from '../Signup/type/error';
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

export const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (!code) {
      navigate('/login');
      return;
    }

    const fetchToken = async () => {
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
        return new Error(error.response?.data.message);
      }
    };
    fetchToken();
  }, [navigate]);

  return <LoadingSpinner />;
};
