import { apiInstance } from '@/api/initInstance';
import type { Role } from '@/types/navigation';

export interface ClubInfo {
  clubId: number;
  clubName: string;
  role: Role;
}

export const fetchClubList = async (): Promise<ClubInfo[]> => {
  const response = await apiInstance.get('/clubs/my');
  return response.data.clubAndRoleList || [];
};
