import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/App.tsx';
import { ROUTE_PATH } from '@/constants/routerPath.ts';
import { ClubDetailEditPage } from '@/pages/admin/ClubDetailEdit/Page';
import { DashboardPage } from '@/pages/admin/Dashboard/Page';

import { ClubDetailPage } from '@/pages/user/ClubDetail/Page';
import { MainPage } from '@/pages/user/Main/Page.tsx';
import { ApplicationDetailPage } from './admin/ApplicationDetail/Page';
import { ClubApplicationPage } from './user/Apply/Page';


const { MAIN, CLUBDETAIL, CLUBEDIT, APPLICATIONDETAIL, DASHBOARD, CLUBAPPLICATION } = ROUTE_PATH;

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: MAIN, element: <MainPage /> },
      {
        path: CLUBDETAIL,
        element: <ClubDetailPage />,
      },
      {
        path: CLUBAPPLICATION,
        element: <ClubApplicationPage />,
      },
      {
        path: '/admin',
        children: [
          {
            path: DASHBOARD,
            element: <DashboardPage />,
          },
          {
            path: APPLICATIONDETAIL,
            element: <ApplicationDetailPage />,
          },
          {
            path: CLUBEDIT,
            element: <ClubDetailEditPage />,
          },
        ],
      },
    ],
  },
]);
