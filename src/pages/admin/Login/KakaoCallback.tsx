import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { useAuthCode } from './hook/useAuthCode';

export const KakaoCallback = () => {
  const navigate = useNavigate();

  const { errorMessage, isLoading } = useAuthCode(navigate);
  if (isLoading) return <LoadingSpinner />;
  if (errorMessage) toast.error(errorMessage);

  return null;
};
