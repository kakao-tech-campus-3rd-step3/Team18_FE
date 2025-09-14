import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { DashboardPage } from '@/pages/admin/Dashboard/Page';
import { MainPage } from '@/pages/user/Main/Page.tsx';
import { ApplicationDetailPage } from './admin/ApplicationDetail/Page';
import { ClubDetailPage } from '@/pages/user/ClubDetail/Page';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTE_PATH.MAIN} element={<MainPage />} />
      <Route path={ROUTE_PATH.APPLICATIONDETAIL} element={<ApplicationDetailPage />} />
      <Route path={ROUTE_PATH.CLUBDETAIL} element={<ClubDetailPage />} />
    </RouterRoutes>
  );
};

export const ROUTE_PATH = {
  DASHBOARD: '/admin/club/dashboard',
  MAIN: '/',
  APPLICATIONDETAIL: '/admin/clubs/:clubId/applicants/:applicantId',
  CLUBDETAIL: '/club/:id',
};
