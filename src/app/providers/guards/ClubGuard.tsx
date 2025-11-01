import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { EmptyState } from '@/shared/components/EmptyState';
import { AuthContext } from '../auth';

export const ClubGuard = () => {
  const { user } = useContext(AuthContext);
  if (!user?.clubId) {
    return <EmptyState />;
  }
  return <Outlet />;
};
