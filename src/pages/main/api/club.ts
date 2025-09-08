import type { ClubResponse } from '@/pages/main/type/club';

export async function getClubs(): Promise<ClubResponse> {
  const response = await fetch('/api/clubs');
  const data = await response.json();
  return data;
}
