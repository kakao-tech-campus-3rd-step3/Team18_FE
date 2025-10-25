export type User = {
  role: string;
};

export type AuthContextType = {
  user: User | null;
  login: (code: string, signal: AbortSignal) => void;
  logout: () => void;
};
