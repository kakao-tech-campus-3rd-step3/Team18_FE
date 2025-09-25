import { setupWorker } from 'msw/browser';
import { clubHandlers } from '@/mocks/handler/club';
import { applicantHandlers } from '@/mocks/handler/applicant';

export const client = setupWorker(...clubHandlers, ...applicantHandlers);
