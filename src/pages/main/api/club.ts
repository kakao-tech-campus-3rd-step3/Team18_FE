import type { ClubResponse } from '@/pages/main/domain/club';

export async function getClubs(): Promise<ClubResponse> {
  const response = await fetch('/api/clubs');
  return response.json();
}
