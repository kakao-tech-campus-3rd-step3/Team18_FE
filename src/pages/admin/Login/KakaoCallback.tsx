import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';

export const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (!code) return;

    console.log(code);
    const fetchToken = async () => {
      try {
        const res = axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/kakao/login`, {
          authorizationCode: code,
        });
        console.log('응답res ', res);

        // CASE 1) 기존 회원

        // 1-1. accessToken, refreshToken 발급
        // localStorage.setItem('accessToken', res.data.accessToken);
        // localStorage.setItem('refreshToken ', res.data.refreshToken)- (수정전)
        // refreshToken은 httpOnly 관리(수정후)
        // ------------------------------------------------------------
        // 2-2 main 페이지 이동
        // navigate('/'); // 로그인 후 홈으로 이동

        // CASE 2) 기존 회원
        // 2-1. 임시 토큰
        // 2-2. navigate('/signup')
      } catch (error) {
        console.log('error:', error);
      }
    };

    fetchToken();
  }, [navigate]);

  return <LoadingSpinner />;
};
