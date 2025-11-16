import type { Role } from './navigation';
import type { LoginResponse, ClubMemberInfo } from '@/pages/admin/Login/api/auth';
import type { SignupFormInputs } from '@/pages/admin/Signup/type/signup';

export type User = {
  role: Role;
  clubId?: number;
  clubName?: string;
  userId?: number;
  clubAndRoleList?: ClubMemberInfo[];
};

export type AuthContextType = {
  user: User | null;
  setUser: (user: User) => void;
  login: (code: string, signal: AbortSignal) => Promise<LoginResponse>;
  logout: () => Promise<void>;
  completeSignup: (signupFormValue: SignupFormInputs, temporaryToken: string) => void;
};
