import { setupWorker } from 'msw/browser';
import { applicantHandlers } from '@/mocks/handler/applicant';
import { clubHandlers } from '@/mocks/handler/club';

export const client = setupWorker(...clubHandlers, ...applicantHandlers);
