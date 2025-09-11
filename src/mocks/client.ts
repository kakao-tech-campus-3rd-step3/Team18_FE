import { setupWorker } from 'msw/browser';
import { handlers } from '@/mocks/handler/club';
import { detailApplicationHandlers } from './handler/detailApplication';

export const client = setupWorker(...handlers, ...detailApplicationHandlers);
