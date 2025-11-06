export const handleAxiosError = (error: unknown, defaultMessage?: string): never => {
  if (error && typeof error === 'object' && 'response' in error) {
    const axiosError = error as { response?: { data?: { message?: string } } };
    const message = axiosError.response?.data?.message || defaultMessage;
    throw new Error(message);
  }
  throw new Error('알 수 없는 오류가 발생했습니다.');
};
