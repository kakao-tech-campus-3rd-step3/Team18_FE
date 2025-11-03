import { isAxiosError } from 'axios';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { logoutUser, postAuthCode, type LoginResponse } from '@/pages/admin/Login/api/auth';
import {
  clearAuthData,
  getAccessToken,
  getStoredUserData,
  setAccessToken,
  setTemporaryToken,
  storeUserData,
} from '@/shared/auth/token';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AuthContextType, User } from '@/types/auth';

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const LOGOUT_REDIRECT_URI = import.meta.env.VITE_LOGOUT_REDIRECT_URI;

export const AuthContext = createContext<AuthContextType>({
  user: { role: null },
  login: async () => {
    return Promise.reject();
  },
  logout: async () => {
    return Promise.reject();
  },
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({ role: null });

  useEffect(() => {
    const initAuth = async () => {
      const token = getAccessToken();
      if (token) {
        try {
          const userData = getStoredUserData();
          if (userData) setUser(userData);
        } catch {
          clearAuthData();
        }
      }
    };
    initAuth();
  }, []);

  const login = useCallback(async (code: string, signal: AbortSignal) => {
    try {
      const response: LoginResponse = await postAuthCode(code, signal);
      switch (response.status) {
        case 'LOGIN_SUCCESS': {
          setAccessToken(response.accessToken);
          const defaultClub = response.clubListInfo[0];
          if (defaultClub) {
            const { role, clubId, clubName } = defaultClub;
            setUser({ role, clubId, clubName });
          } else {
            setUser({ role: 'admin' });
            storeUserData({ role: 'admin' });
          }
          break;
        }
        case 'REGISTRATION_REQUIRED':
          setTemporaryToken(response.temporaryToken);
          break;
      }
      return response;
    } catch (e) {
      if (e instanceof Error && e.name === 'CanceledError') {
        throw e;
      }
      if (isAxiosError<ErrorResponse>(e)) {
        throw new Error(e.response?.data.message ?? '로그인 중 오류가 발생했습니다.');
      }
      throw e;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutUser();
      setUser({ role: null });
      clearAuthData();
      const kakaoLogoutUrl = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
      window.location.href = kakaoLogoutUrl;
    } catch (e) {
      if (isAxiosError<ErrorResponse>(e)) {
        throw new Error(e.response?.data.message ?? '로그아웃 중 오류가 발생했습니다.');
      }
      throw e;
    }
  }, []);

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth는 UserProvider 범위 내에서만 유효합니다.');
  return context;
};
