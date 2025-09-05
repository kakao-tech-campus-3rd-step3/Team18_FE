import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { DashboardPage } from './admin/Dashboard/Page';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.DASHBOARD} element={<DashboardPage />} />
    </RouterRoutes>
  );
};

export const ROUTE_PATH = {
  DASHBOARD: '/admin/club/dashboard',
};
