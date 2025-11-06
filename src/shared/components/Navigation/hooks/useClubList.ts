import { useEffect, useState } from 'react';
import { useAuth } from '@/providers/auth';
import type { ClubMemberInfo } from '@/pages/admin/Login/api/auth';

export const useClubList = () => {
  const { user, setUser } = useAuth();
  const [clubs, setClubs] = useState<ClubMemberInfo[]>([]);

  useEffect(() => {
    if (!user) return;

    const userClubs: ClubMemberInfo[] =
      user.clubAndRoleList && user.clubAndRoleList.length > 0
        ? user.clubAndRoleList
        : user.clubId
          ? [{ clubId: user.clubId, clubName: user.clubName, role: user.role }]
          : [];

    setClubs(userClubs);
  }, [user]);

  const handleSelectClub = (club: ClubMemberInfo) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      clubId: club.clubId ?? undefined,
      clubName: club.clubName ?? '',
      role: club.role ?? null,
    };

    setUser(updatedUser);
    localStorage.setItem('user_data', JSON.stringify(updatedUser));
  };

  const selectedClub = clubs.find((club) => club.clubId === user?.clubId) ?? clubs[0] ?? null;

  return { clubs, selectedClub, handleSelectClub };
};
