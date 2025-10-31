import { setupWorker } from 'msw/browser';
import { applicantHandlers } from '@/app/mocks/handler/applicant';
import { clubHandlers } from '@/app/mocks/handler/club';
import { noticeHandlers } from '@/app/mocks/handler/notice';

export const client = setupWorker(...clubHandlers, ...applicantHandlers, ...noticeHandlers);
