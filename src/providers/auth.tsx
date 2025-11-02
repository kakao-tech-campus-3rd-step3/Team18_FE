import { isAxiosError } from 'axios';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser, postAuthCode, type LoginResponse } from '@/pages/admin/Login/api/auth';
import {
  removeAccessToken,
  setAccessToken,
  setTemporaryToken,
} from '@/pages/admin/Signup/utils/token';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AuthContextType, User } from '@/types/auth';

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const LOGOUT_REDIRECT_URI = import.meta.env.VITE_LOGOUT_REDIRECT_URI;

export const AuthContext = createContext<AuthContextType>({
  user: { role: 'guest' },
  login: async () => {
    return Promise.resolve();
  },
  logout: async () => {
    return Promise.resolve();
  },
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({ role: 'guest' });
  const navigate = useNavigate();

  const login = async (code: string, signal: AbortSignal) => {
    try {
      const response: LoginResponse = await postAuthCode(code, signal);

      switch (response.status) {
        case 'LOGIN_SUCCESS': {
          setAccessToken(response.accessToken);
          const defaultClub = response.clubIdAndRoleList[0];
          if (defaultClub) {
            const { role, clubId } = defaultClub;
            setUser({ role, clubId });
          } else {
            setUser({ role: 'guest' });
          }
          navigate('/');
          break;
        }
        case 'REGISTRATION_REQUIRED':
          setTemporaryToken(response.temporaryToken);
          navigate('/signup');
          break;
      }
    } catch (e) {
      if (isAxiosError<ErrorResponse>(e)) {
        throw new Error(e.response?.data.message ?? '로그인 중 오류가 발생했습니다.');
      }
      throw e;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser({ role: 'guest' });
      removeAccessToken();
      const kakaoLogoutUrl = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
      window.location.href = kakaoLogoutUrl;
    } catch (e) {
      if (isAxiosError<ErrorResponse>(e)) {
        throw new Error(e.response?.data.message ?? '로그아웃 중 오류가 발생했습니다.');
      }
      throw e;
    }
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth는 UserProvider 범위 내에서만 유효합니다.');
  return context;
};
