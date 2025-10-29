import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '@/providers/auth';
import { EmptyState } from '@/shared/Pages/emptyState';
export const ClubGuard = () => {
  const { user } = useContext(AuthContext);
  if (!user?.clubId?.length) {
    return <EmptyState />;
  }
  return <Outlet />;
};
