import type { User } from '@/shared/types/auth';

export const USER_DATA_KEY = 'user_data';

export const AUTH_ERRORS = {
  REQUIRED_COOKIE_NOT_FOUND: 'REQUIRED_COOKIE_NOT_FOUND',
  UNSUPPORTED_JWT: 'UNSUPPORTED_JWT',
  LOGGED_OUT_USER: 'LOGGED_OUT_USER',
  INVALID_JWT_SIGNATURE: 'INVALID_JWT_SIGNATURE',
  EXPIRED_REFRESH_TOKEN: 'EXPIRED_REFRESH_TOKEN',
  INVALID_REFRESH_TOKEN: 'INVALID_REFRESH_TOKEN',
} as const;

export const setAccessToken = (token: string) => localStorage.setItem('accessToken', token);
export const getAccessToken = () => localStorage.getItem('accessToken');
export const removeAccessToken = () => localStorage.removeItem('accessToken');
export const setTemporaryToken = (token: string) => sessionStorage.setItem('temporaryToken', token);
export const removeTemporaryToken = () => sessionStorage.removeItem('temporaryToken');
export const getTemporaryToken = () => sessionStorage.getItem('temporaryToken');

export const storeUserData = (userData: User): void => {
  try {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`사용자 데이터 저장 실패: ${error.message}`);
    }
    throw error;
  }
};

export const removeStoredUserData = (): void => {
  try {
    localStorage.removeItem(USER_DATA_KEY);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`사용자 데이터 제거 실패: ${error.message}`);
    }
    throw error;
  }
};

export const clearAuthData = (): void => {
  removeAccessToken();
  removeStoredUserData();
};

const ONBOARDING_SEEN_KEY = 'onboarding_seen';
const PENDING_ONBOARDING_KEY = 'pending_onboarding';

export const getOnboardingSeen = (): string[] => {
  try {
    const data = localStorage.getItem(ONBOARDING_SEEN_KEY);
    return data ? (JSON.parse(data) as string[]) : [];
  } catch {
    return [];
  }
};

export const markOnboardingSeen = (id: string): void => {
  const seen = getOnboardingSeen();
  if (!seen.includes(id)) {
    localStorage.setItem(ONBOARDING_SEEN_KEY, JSON.stringify([...seen, id]));
  }
  sessionStorage.removeItem(PENDING_ONBOARDING_KEY);
};

export const getPendingOnboarding = (): string | null =>
  sessionStorage.getItem(PENDING_ONBOARDING_KEY);

export const setPendingOnboarding = (id: string): void =>
  sessionStorage.setItem(PENDING_ONBOARDING_KEY, id);

export const getStoredUserData = (): User | null => {
  try {
    const data = localStorage.getItem(USER_DATA_KEY);
    if (!data) return null;

    const parsedUserData = JSON.parse(data) as User;

    if (!parsedUserData) {
      removeStoredUserData();
      return null;
    }

    return parsedUserData;
  } catch (error) {
    removeStoredUserData();
    throw error;
  }
};
