import { useQuery } from '@tanstack/react-query';
import { fetchDetailApplication } from '../api/detailApplication';

export const useDetailApplications = (clubId: number | null, applicantId: number | null) => {
  return useQuery({
    queryKey: ['detailApplications', clubId],
    queryFn: () => fetchDetailApplication(clubId!, applicantId!),
  });
};
