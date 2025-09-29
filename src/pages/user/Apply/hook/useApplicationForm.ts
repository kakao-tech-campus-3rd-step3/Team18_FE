import { useEffect, useState } from 'react';
import { fetchApplicationForm } from '@/pages/user/Apply/api/apply.ts';
import type { ApplicationForm } from '../type/apply';

export const useApplicationForm = (Id: number) => {
  const [clubApplicationForm, setClubApplicationForm] = useState<ApplicationForm | null>(null);

  useEffect(() => {
    if (!Id) return;
    const setFormStateAfterFetch = async () => {
      const applicationForm = await fetchApplicationForm(Id);
      setClubApplicationForm(applicationForm);
    };
    setFormStateAfterFetch();
  }, [Id]);

  return clubApplicationForm;
};
