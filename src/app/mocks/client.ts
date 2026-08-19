import { setupWorker } from 'msw/browser';
import { applicantHandlers } from '@/app/mocks/handler/applicant';
import { clubHandlers } from '@/app/mocks/handler/club';
import { noticeHandlers } from '@/app/mocks/handler/notice';
import { applyFormHandlers } from './handler/applyForm';
import { authHandlers } from './handler/auth';
import { dashboardHandlers } from './handler/dashboard';
import { statisticsHandlers } from './handler/statistics';

export const client = setupWorker(
  ...clubHandlers,
  ...applicantHandlers,
  ...noticeHandlers,
  ...applyFormHandlers,
  ...authHandlers,
  ...dashboardHandlers,
  ...statisticsHandlers,
);
