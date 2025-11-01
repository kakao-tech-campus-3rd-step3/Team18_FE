import { setupWorker } from 'msw/browser';
import { applicantHandlers } from '@/mocks/handler/applicant';
import { clubHandlers } from '@/mocks/handler/club';
import { noticeHandlers } from '@/mocks/handler/notice';
import { applyFormHandlers } from './handler/applyForm';

export const client = setupWorker(
  ...clubHandlers,
  ...applicantHandlers,
  ...noticeHandlers,
  ...applyFormHandlers,
);

