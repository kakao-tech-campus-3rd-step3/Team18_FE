import { Outlet } from 'react-router-dom';
import { EmptyState } from '@/shared/components/EmptyState';
import { useAuth } from '../auth';
export const ClubGuard = () => {
  const { user } = useAuth();
  if (!user?.clubId) {
    return <EmptyState />;
  }
  return <Outlet />;
};
