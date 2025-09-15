import { setupWorker } from 'msw/browser';
import { handlers } from '@/mocks/handler/club';
import { detailApplicationHandlers } from './handler/detailApplication';
import { applicantHandlers } from '@/mocks/handler/applicant';

export const client = setupWorker(...handlers, ...detailApplicationHandlers, ...applicantHandlers);
