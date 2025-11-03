import type { User } from '@/types/auth';

const USER_DATA_KEY = 'user_data';

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
