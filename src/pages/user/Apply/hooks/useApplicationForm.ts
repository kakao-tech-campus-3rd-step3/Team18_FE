import { useEffect, useState } from 'react';
import { fetchApplicationForm } from '@/pages/user/Apply/api/apply.ts';
import type { ApplicationForm } from '../type/apply';

export const useApplicationForm = (clubId: number) => {
  const [clubApplicationForm, setClubApplicationForm] = useState<ApplicationForm | null>(null);

  useEffect(() => {
    if (!clubId) return;
    const setFormStateAfterFetch = async () => {
      const applicationForm = await fetchApplicationForm(clubId);
      setClubApplicationForm(applicationForm);
    };
    setFormStateAfterFetch();
  }, [clubId]);

  return clubApplicationForm;
};
