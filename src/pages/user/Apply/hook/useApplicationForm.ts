import { useEffect, useState } from 'react';
import { fetchApplicationForm } from '@/pages/user/Apply/api/apply.ts';
import type { ApplicationForm } from '../type/apply';

export const useApplicationForm = (Id: number) => {
  const [clubApplicationForm, setClubApplicationForm] = useState<ApplicationForm | null>(null);

  useEffect(() => {
    if (!Id) return;
    fetchApplicationForm(Id).then((res) => {
      setClubApplicationForm(res);
    });
  }, [Id]);

  return clubApplicationForm;
};
