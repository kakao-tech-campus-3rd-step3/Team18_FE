import { DashboardPage } from '@/pages/admin/Dashboard/Page';
import { MainPage } from '@/pages/user/Main/Page.tsx';
import { ApplicationDetailPage } from './admin/ApplicationDetail/Page';
import { ClubDetailPage } from '@/pages/user/ClubDetail/Page';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/App.tsx';

export const ROUTE_PATH = {
  DASHBOARD: 'club/dashboard',
  APPLICATIONDETAIL: '/admin/clubs/:clubId/applicants/:applicantId',
  MAIN: '/',
  CLUBDETAIL: 'club/:id',
};

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: ROUTE_PATH.MAIN, element: <MainPage /> },
      { path: ROUTE_PATH.CLUBDETAIL, element: <ClubDetailPage /> },
      {
        path: '/admin',
        children: [
          {
            path: ROUTE_PATH.DASHBOARD,
            element: <DashboardPage />,
          },
          {
            path: ROUTE_PATH.APPLICATIONDETAIL,
            element: <ApplicationDetailPage />,
          },
        ],
      },
    ],
  },
]);
