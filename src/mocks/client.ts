import { setupWorker } from 'msw/browser';
import { applicantHandlers } from '@/mocks/handler/applicant';
import { clubHandlers } from '@/mocks/handler/club';
import { noticeHandlers } from '@/mocks/handler/notice';
import { authHandlers } from './handler/auth';

export const client = setupWorker(
  ...clubHandlers,
  ...applicantHandlers,
  ...noticeHandlers,
  ...authHandlers,
);
