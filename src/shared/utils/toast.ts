import { toast as sonnerToast } from 'sonner';
import { theme } from '@/app/styles/theme';

const TOAST_DURATION = 1000;

export const toast = {
  success: (message: string, onAutoClose?: () => void) => {
    sonnerToast.success(message, {
      style: { backgroundColor: theme.colors.primary, color: 'white' },
      duration: TOAST_DURATION,
      onAutoClose,
    });
  },
  error: (message: string, duration: number = TOAST_DURATION) => {
    sonnerToast.error(message, {
      duration,
      style: { backgroundColor: 'white', color: theme.colors.error },
    });
  },
};
