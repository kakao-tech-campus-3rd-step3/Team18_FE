import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from '@/app/constants/routerPath.ts';
import { ClubGuard } from '@/app/providers/guards/ClubGuard';
import { App } from '@/App.tsx';
import { ClubDetailEditPage } from '@/pages/admin/ClubDetailEdit/Page';
import { DashboardPage } from '@/pages/admin/Dashboard/Page';

import { ClubDetailPage } from '@/pages/user/ClubDetail/Page';
import { MainPage } from '@/pages/user/Main/Page.tsx';
import { NoticeDetailPage } from '@/pages/user/Notice/DetailPage';
import { NoticeListPage } from '@/pages/user/Notice/Page';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { ApplicationDetailPage } from './admin/ApplicationDetail/Page';
import { ApplicationFormBuilderPage } from './admin/ApplicationFormBuilder/Page';
import { KakaoCallback } from './admin/Login/KakaoCallback';
import { LoginPage } from './admin/Login/Page';
import { MemberManagementPage } from './admin/MemberManagement/Page';
import { AdminSignupPage } from './admin/Signup/Page';
import { ClubApplicationPage } from './user/Apply/Page';

const { USER, ADMIN, COMMON } = ROUTE_PATH;

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: COMMON.MAIN, element: <MainPage /> },
      {
        path: COMMON.CLUB_DETAIL,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ClubDetailPage />
          </Suspense>
        ),
      },
      {
        path: COMMON.LOGIN,
        element: <LoginPage />,
      },
      {
        path: USER.APPLICATION,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ClubApplicationPage />
          </Suspense>
        ),
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
        path: COMMON.NOTICE_LIST,
        element: <NoticeListPage />,
      },
      {
        path: COMMON.NOTICE_DETAIL,
        element: <NoticeDetailPage />,
      },
      {
        path: '/admin',
        element: <ClubGuard />,
        children: [
          {
            path: ADMIN.DASHBOARD,
            element: <DashboardPage />,
          },
          {
            path: ADMIN.APPLICATION_DETAIL,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <ApplicationDetailPage />
              </Suspense>
            ),
          },
          {
            path: ADMIN.CLUB_EDIT,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <ClubDetailEditPage />
              </Suspense>
            ),
          },
          {
            path: ADMIN.APPLICATION_FORM_BUILDER,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <ApplicationFormBuilderPage />
              </Suspense>
            ),
          },
          {
            path: ADMIN.MEMBER_MANAGEMENT,
            element: <MemberManagementPage />,
          },
        ],
      },
    ],
  },
]);
