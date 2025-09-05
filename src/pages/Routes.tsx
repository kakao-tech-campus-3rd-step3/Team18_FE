import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { DashboardPage } from './admin/Dashboard/Page';
import MainPage from './main/MainPage';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTE_PATH.MAIN} element={<MainPage />} />
    </RouterRoutes>
  );
};

export const ROUTE_PATH = {
  DASHBOARD: '/admin/club/dashboard',
  MAIN: '/',
};
