import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '@/providers/auth';
import { EmptyState } from '@/shared/components/EmptyState';
export const ClubGuard = () => {
  const { user } = useContext(AuthContext);
  if (!user?.clubId) {
    return <EmptyState />;
  }
  return <Outlet />;
};
