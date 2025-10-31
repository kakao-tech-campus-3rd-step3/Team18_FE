import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '@/providers/auth';

export function useKakaoLogin() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const code = new URL(window.location.href).searchParams.get('code');

    if (!code) {
      navigate('/login');
      return;
    }

    const processLogin = async () => {
      try {
        await login(code, controller.signal);
      } catch (e: unknown) {
        if (e instanceof Error) {
          toast.error(e.message);
        } else {
          toast.error('로그인 중 오류가 발생했습니다.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    processLogin();

    return () => controller.abort();
  }, [login, navigate]);
  return { isLoading };
}
