import { fetchApplicationForm } from '@/pages/user/Apply/api/apply.ts';
import { useEffect, useState } from 'react';
import type { ApplicationForm } from '../type/apply';

export const useApplicationForm = (Id: number) => {
  const [clubApplicationForm, setclubApplicationForm] = useState<ApplicationForm | null>(null);

  useEffect(() => {
    if (!Id) return;
    fetchApplicationForm(Id).then((res) => {
      setclubApplicationForm(res);
    });
  }, [Id]);

  return clubApplicationForm;
};
