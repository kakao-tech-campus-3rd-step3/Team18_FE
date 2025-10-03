import { setupWorker } from 'msw/browser';
import { applicantHandlers } from '@/mocks/handler/applicant';
import { clubHandlers } from '@/mocks/handler/club';
import { clubDetailHandlers } from '@/mocks/handler/clubDetail';

export const client = setupWorker(...clubHandlers, ...clubDetailHandlers, ...applicantHandlers);
