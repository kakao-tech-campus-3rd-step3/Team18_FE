import { isAxiosError } from 'axios';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser, postAuthCode, type LoginResponse } from '@/pages/admin/Login/api/auth';
import {
  removeAccessToken,
  setAccessToken,
  setTemporaryToken,
} from '@/pages/admin/Signup/utils/token';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AuthContextType, User } from '@/types/auth';

export const AuthContext = createContext<AuthContextType>({
  user: { role: 'guest' },
  login: () => {},
  logout: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({ role: 'admin' });
  const navigate = useNavigate();

  const login = async (code: string, signal: AbortSignal) => {
    try {
      const response: LoginResponse = await postAuthCode(code, signal);

      switch (response.status) {
        case 'LOGIN_SUCCESS':
          setAccessToken(response.accessToken);
          setUser({ role: 'admin' });
          navigate('/');
          break;
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
      navigate('/');
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
