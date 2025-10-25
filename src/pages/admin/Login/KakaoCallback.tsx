import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { useKakaoLogin } from './hooks/useKakaoLogin';

export const KakaoCallback = () => {
  const { isLoading } = useKakaoLogin();
  if (isLoading) return <LoadingSpinner />;
  return null;
};
