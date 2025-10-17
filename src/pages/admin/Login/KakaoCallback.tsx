import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { apiInstance } from './api/initInstance';
import type { ErrorResponse } from '../Signup/type/error';
import type { AxiosError, AxiosResponse } from 'axios';

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
        const res: AxiosResponse<LoginResponse> = await apiInstance.post('/auth/kakao/login', {
          authorizationCode: code,
        });

        switch (res.data.status) {
          case 'LOGIN_SUCCESS':
            localStorage.setItem('accessToken', res.data.accessToken);
            navigate('/');
            break;
          case 'REGISTRATION_REQUIRED':
            sessionStorage.setItem('temporaryToken', res.data.temporaryToken);
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
