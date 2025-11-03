import type { Role } from './navigation';
import type { LoginResponse } from '@/pages/admin/Login/api/auth';

export type User = {
  clubId?: number;
  role: Role;
};

export type AuthContextType = {
  user: User | null;
  login: (code: string, signal: AbortSignal) => Promise<LoginResponse>;
  logout: () => Promise<void>;
};
