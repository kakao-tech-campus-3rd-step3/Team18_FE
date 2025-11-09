import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  logoutUser,
  postAuthCode,
  type LoginResponse,
  type ClubMemberInfo,
} from '@/pages/admin/Login/api/auth';
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

export type User = {
  role: (typeof ROLE)[keyof typeof ROLE] | null;
  clubId?: number;
  clubName?: string;
  userId?: string;
  clubAndRoleList?: ClubMemberInfo[];
};

export type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
  login: (code: string, signal: AbortSignal) => Promise<LoginResponse>;
  logout: () => Promise<void>;
  completeSignup: (accessToken: string) => void;
};

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const LOGOUT_REDIRECT_URI = import.meta.env.VITE_LOGOUT_REDIRECT_URI;

export const AuthContext = createContext<AuthContextType>({
  user: { role: null },
  setUser: () => {},
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
  const [user, setUserState] = useState<User | null>(null);

  const setUser = useCallback((newUser: User) => {
    setUserState(newUser);
    storeUserData(newUser);
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      const token = getAccessToken();
      if (token) {
        try {
          const userData = getStoredUserData();
          if (userData) setUserState(userData);
        } catch {
          clearAuthData();
        }
      }
    };
    initAuth();
  }, []);

  const login = useCallback(
    async (code: string, signal: AbortSignal) => {
      try {
        const response: LoginResponse = await postAuthCode(code, signal);
        switch (response.status) {
          case 'LOGIN_SUCCESS': {
            setAccessToken(response.accessToken);

            const defaultUserInfo = response.clubAndRoleList?.[0];
            if (!defaultUserInfo || !defaultUserInfo.role) {
              const userData: User = {
                role: ROLE.APPLICANT,
                clubAndRoleList: response.clubAndRoleList,
              };
              setUser(userData);
              break;
            }

            const userId = response.userId;
            const { role, clubId, clubName } = defaultUserInfo;
            const userData: User = {
              role,
              clubId,
              clubName,
              userId,
              clubAndRoleList: response.clubAndRoleList,
            };
            setUser(userData);
            break;
          }
          case 'REGISTRATION_REQUIRED':
            setTemporaryToken(response.temporaryToken);
            break;
        }
        return response;
      } catch (e) {
        if (e instanceof Error && e.name === 'CanceledError') throw e;
        return handleAxiosError(e, '로그인 중 오류가 발생했습니다.');
      }
    },
    [setUser],
  );

  const logout = useCallback(async () => {
    try {
      await logoutUser();
      clearAuthData();
      const kakaoLogoutUrl = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
      window.location.href = kakaoLogoutUrl;
    } catch (e) {
      handleAxiosError(e, '로그아웃 중 오류가 발생했습니다.');
    }
  }, []);

  const completeSignup = useCallback(
    (accessToken: string) => {
      setAccessToken(accessToken);
      const userData: User = { role: ROLE.CLUB_MEMBER };
      setUser(userData);
    },
    [setUser],
  );

  const value = { user, setUser, login, logout, completeSignup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth는 UserProvider 범위 내에서만 유효합니다.');
  return context;
};
