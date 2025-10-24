import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/App.tsx';
import { ROUTE_PATH } from '@/constants/routerPath.ts';
import { ClubDetailEditPage } from '@/pages/admin/ClubDetailEdit/Page';
import { DashboardPage } from '@/pages/admin/Dashboard/Page';

import { ClubDetailPage } from '@/pages/user/ClubDetail/Page';
import { MainPage } from '@/pages/user/Main/Page.tsx';
import { ApplicationDetailPage } from './admin/ApplicationDetail/Page';
import { KakaoCallback } from './admin/Login/KakaoCallback';
import { LoginPage } from './admin/Login/Page';
import { AdminSignupPage } from './admin/Signup/Page';
import { ClubApplicationPage } from './user/Apply/Page';

const { USER, ADMIN, COMMON } = ROUTE_PATH;

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: COMMON.MAIN, element: <MainPage /> },
      {
        path: COMMON.CLUBDETAIL,
        element: <ClubDetailPage />,
      },
      {
        path: COMMON.LOGIN,
        element: <LoginPage />,
      },
      {
        path: USER.APPLICATION,
        element: <ClubApplicationPage />,
      },
      {
        path: COMMON.CALLBACK,
        element: <KakaoCallback />,
      },
      {
        path: COMMON.SIGNUP,
        element: <AdminSignupPage />,
      },
      {
        path: '/admin',
        children: [
          {
            path: ADMIN.DASHBOARD,
            element: <DashboardPage />,
          },
          {
            path: ADMIN.APPLICATIONDETAIL,
            element: <ApplicationDetailPage />,
          },
          {
            path: ADMIN.CLUBEDIT,
            element: <ClubDetailEditPage />,
          },
        ],
      },
    ],
  },
]);
