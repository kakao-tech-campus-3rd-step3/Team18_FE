import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { DashboardPage } from '@/pages/admin/Dashboard/Page';
import Page from '@/pages/user/Main/Page.tsx';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTE_PATH.MAIN} element={<Page />} />
    </RouterRoutes>
  );
};

export const ROUTE_PATH = {
  DASHBOARD: '/admin/club/dashboard',
  MAIN: '/',
};
