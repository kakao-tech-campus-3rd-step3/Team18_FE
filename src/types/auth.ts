import type { Role } from './navigation';

export type User = {
  clubId?: number;
  clubName?: string;
  role: Role;
};

export type AuthContextType = {
  user: User | null;
  login: (code: string, signal: AbortSignal) => void;
  logout: () => void;
};
