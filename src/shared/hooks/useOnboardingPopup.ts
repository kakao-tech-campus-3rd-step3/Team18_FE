import { useState } from 'react';
import { getOnboardingSeen, getPendingOnboarding, markOnboardingSeen } from '@/shared/auth/token';

type UseOnboardingPopupOptions = {
  triggerMode: 'login' | 'pageVisit';
};

type UseOnboardingPopupReturn = {
  isOpen: boolean;
  confirm: () => void;
};

export const useOnboardingPopup = (
  id: string,
  { triggerMode }: UseOnboardingPopupOptions,
): UseOnboardingPopupReturn => {
  const [isOpen] = useState(() => {
    const seen = getOnboardingSeen();
    if (seen.includes(id)) return false;
    if (triggerMode === 'login') return getPendingOnboarding() === id;
    return true;
  });

  const confirm = () => {
    markOnboardingSeen(id);
  };

  return { isOpen, confirm };
};
