import type { ApplicationForm } from '@/pages/user/Apply/type/apply.ts';

export const fetchApplicationForm = async (Id: number): Promise<ApplicationForm> => {
  const response = await fetch(import.meta.env.VITE_API_BASE_URL + `/clubs/${Id}/apply`);
  return await response.json();
};
