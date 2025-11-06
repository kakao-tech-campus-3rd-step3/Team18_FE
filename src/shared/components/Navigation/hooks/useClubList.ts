import { useState, useEffect } from 'react';
import { useAuth } from '@/providers/auth';
import type { ClubMemberInfo } from '@/pages/admin/Login/api/auth';

export const useClubList = () => {
  const { user, setUser } = useAuth();
  const [clubs, setClubs] = useState<ClubMemberInfo[]>([]);
  const [selectedClub, setSelectedClub] = useState<ClubMemberInfo | null>(null);

  useEffect(() => {
    if (!user) return;

    const userClubs: ClubMemberInfo[] =
      user.clubAndRoleList && user.clubAndRoleList.length > 0
        ? user.clubAndRoleList
        : user.clubId
          ? [{ clubId: user.clubId, clubName: user.clubName, role: user.role }]
          : [];

    setClubs(userClubs);
    if (userClubs.length > 0) setSelectedClub(userClubs[0]);
  }, [user]);

  const handleSelectClub = (club: ClubMemberInfo) => {
    setSelectedClub(club);

    if (user && setUser) {
      const updatedUser = {
        ...user,
        clubId: club.clubId ?? undefined,
        clubName: club.clubName ?? '',
        role: club.role ?? null,
      };
      setUser(updatedUser);
      localStorage.setItem('user_data', JSON.stringify(updatedUser));
    }
  };

  return { clubs, selectedClub, handleSelectClub };
};
