import { Outlet } from 'react-router-dom';
import { EmptyState } from '@/shared/components/EmptyState';
import { useAuth } from '../auth';
export const ClubGuard = () => {
  // if (import.meta.env.DEV) return <Outlet />; // 로컬 테스트용
  const { user } = useAuth();
  if (!user?.clubId) {
    return <EmptyState />;
  }
  return <Outlet />;
};
