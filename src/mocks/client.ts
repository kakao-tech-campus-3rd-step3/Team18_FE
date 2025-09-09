import { setupWorker } from 'msw/browser';
import { handlers } from '@/mocks/handler/club';

export const client = setupWorker(...handlers);
