import { toast as sonnerToast } from 'sonner';
import { theme } from '@/styles/theme';

const TOAST_DURATION = 1000;

export const toast = {
  success: (message: string, onAutoClose?: () => void) => {
    sonnerToast.success(message, {
      style: { backgroundColor: theme.colors.primary, color: 'white' },
      duration: TOAST_DURATION,
      onAutoClose,
    });
  },
  error: (message: string) => {
    sonnerToast.error(message, {
      duration: TOAST_DURATION,
      style: { backgroundColor: 'white', color: theme.colors.error },
    });
  },
};
