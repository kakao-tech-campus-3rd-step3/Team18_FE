import { setupWorker } from 'msw/browser';
import { handlers } from '@/mocks/handlers';

export const client = setupWorker(...handlers);
