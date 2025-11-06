import { useState, useEffect } from 'react';
import { useAuth } from '@/providers/auth';
import type { ClubMemberInfo } from '@/pages/admin/Login/api/auth';

export const useClubList = () => {
  const { user } = useAuth();
  const [clubs, setClubs] = useState<ClubMemberInfo[]>([]);
  const [selectedClub, setSelectedClub] = useState<ClubMemberInfo | null>(null);

  useEffect(() => {
    if (!user) return;

    const userClubs: ClubMemberInfo[] = user.clubId
      ? [{ clubId: user.clubId, clubName: user.clubName, role: user.role }]
      : [];

    setClubs(userClubs);
    if (userClubs.length > 0) setSelectedClub(userClubs[0]);
  }, [user]);

  const handleSelectClub = (club: ClubMemberInfo) => {
    setSelectedClub(club);
  };

  return { clubs, selectedClub, handleSelectClub };
};
