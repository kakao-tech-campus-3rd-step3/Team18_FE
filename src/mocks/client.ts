import { setupWorker } from 'msw/browser';
import { handlers } from '@/mocks/handler/club';
import { applicantHandlers } from '@/mocks/handler/applicant';

export const client = setupWorker(...handlers, ...applicantHandlers);
