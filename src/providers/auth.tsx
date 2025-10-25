import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAuthCode, type LoginResponse } from '@/pages/admin/Login/api/postAuthCode';
import { setAccessToken, setTemporaryToken } from '@/pages/admin/Signup/utils/token';
import type { ErrorResponse } from '@/pages/admin/Signup/type/error';
import type { AuthContextType, User } from '@/types/auth';
import type { AxiosError } from 'axios';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = async (code: string, signal: AbortSignal) => {
    try {
      const response: LoginResponse = await postAuthCode(code, signal);

      switch (response.status) {
        case 'LOGIN_SUCCESS':
          setAccessToken(response.accessToken);
          setUser({ role: 'manager' });
          navigate('/');
          break;
        case 'REGISTRATION_REQUIRED':
          setTemporaryToken(response.temporaryToken);
          navigate('/signup');
          break;
      }
    } catch (e) {
      const error = e as AxiosError<ErrorResponse>;

      throw new Error(error.response?.data.message);
    }
  };

  const logout = () => {
    setUser(null);
    // TODO : clearAccessToken
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
