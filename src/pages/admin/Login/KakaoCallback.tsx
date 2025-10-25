import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { useAuthCode } from './hook/useAuthCode';

export const KakaoCallback = () => {
  const navigate = useNavigate();

  const { errorMessage, isLoading } = useAuthCode(navigate);
  useEffect(() => {
    if (errorMessage) toast.error(errorMessage);
  }, [errorMessage]);
  if (isLoading) return <LoadingSpinner />;

  return null;
};
