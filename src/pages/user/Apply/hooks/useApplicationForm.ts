import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchApplicationForm } from '@/pages/user/Apply/api/apply.ts';

export const useApplicationForm = (clubId: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['applicationForm', clubId],
    queryFn: () => fetchApplicationForm(clubId),
  });

  return data;
};
