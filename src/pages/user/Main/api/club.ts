import type { ClubResponse } from '@/types/club.ts';

export async function getClubs(): Promise<ClubResponse> {
  const response = await fetch('/api/clubs');
  return await response.json();
}
