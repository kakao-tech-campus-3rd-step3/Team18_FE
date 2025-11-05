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
import { ROLE } from '@/types/navigation';
import { handleAxiosError } from '@/utils/handleAxiosError';
import type { AuthContextType, User } from '@/types/auth';

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const LOGOUT_REDIRECT_URI = import.meta.env.VITE_LOGOUT_REDIRECT_URI;

export const AuthContext = createContext<AuthContextType>({
  user: { role: null },
  login: async () => {
    throw new Error('login은 UserProvider 내부에서 실행되어야 합니다.');
  },
  logout: async () => {
    throw new Error('logout은 UserProvider 내부에서 실행되어야 합니다.');
  },
  completeSignup: () => {
    throw new Error('completeSignup은 UserProvider 내부에서 실행되어야 합니다.');
  },
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

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
          const defaultClub = response.clubAndRoleList?.[0];

          if (!defaultClub || !defaultClub.role) {
            const userData: User = { role: ROLE.APPLICANT };
            setUser(userData);
            storeUserData(userData);
            break;
          }

          const { role, clubId, clubName } = defaultClub;
          const userData: User = { role, clubId, clubName };
          setUser(userData);
          storeUserData(userData);
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
      handleAxiosError(e, '로그인 중 오류가 발생했습니다.');

      throw e;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutUser();
      clearAuthData();
      const kakaoLogoutUrl = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
      window.location.href = kakaoLogoutUrl;
    } catch (e) {
      handleAxiosError(e);
      throw e;
    }
  }, []);

  const completeSignup = useCallback((accessToken: string) => {
    setAccessToken(accessToken);
    const userData: User = { role: ROLE.CLUB_MEMBER };
    setUser(userData);
    storeUserData(userData);
  }, []);

  const value = { user, login, logout, completeSignup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth는 UserProvider 범위 내에서만 유효합니다.');
  return context;
};
