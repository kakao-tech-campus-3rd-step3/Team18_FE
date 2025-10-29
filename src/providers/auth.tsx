import { isAxiosError } from 'axios';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAuthCode, type LoginResponse } from '@/pages/admin/Login/api/postAuthCode';
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
  const [user, setUser] = useState<User>({ role: 'guest' });
  const navigate = useNavigate();

  const login = async (code: string, signal: AbortSignal) => {
    try {
      const response: LoginResponse = await postAuthCode(code, signal);

      switch (response.status) {
        case 'LOGIN_SUCCESS': {
          const defaultClub = response.clubIdAndRoleList[0];
          if (defaultClub) {
            const { role, clubId } = defaultClub;
            setAccessToken(response.accessToken);
            setUser({ role, clubId });
            navigate('/');
          } else {
            setAccessToken(response.accessToken);
            setUser({ role: 'guest' });
            navigate('/');
          }
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

  const logout = () => {
    setUser({ role: 'guest' });
    removeAccessToken();
    navigate('/');
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
