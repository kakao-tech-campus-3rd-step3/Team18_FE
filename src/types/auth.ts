import type { Role } from './navigation';
import type { LoginResponse } from '@/pages/admin/Login/api/auth';

export type User = {
  role: Role;
  clubId?: number;
  clubName?: string;
};

export type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
  login: (code: string, signal: AbortSignal) => Promise<LoginResponse>;
  logout: () => Promise<void>;
  completeSignup: (accessToken: string) => void;
};
