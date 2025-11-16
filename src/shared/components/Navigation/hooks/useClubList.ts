import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/app/providers/auth';
import type { ClubMemberInfo } from '@/pages/admin/Login/api/auth';

export const useClubList = () => {
  const { user, setUser } = useAuth();
  const [clubs, setClubs] = useState<ClubMemberInfo[]>([]);
  const navigate = useNavigate();

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

    navigate('/');
  };

  const selectedClub = clubs.find((club) => club.clubId === user?.clubId) ?? clubs[0] ?? null;

  useEffect(() => {
    if (user && selectedClub && user.role !== selectedClub.role) {
      const updatedUser = {
        ...user,
        clubId: selectedClub.clubId ?? undefined,
        clubName: selectedClub.clubName ?? '',
        role: selectedClub.role ?? null,
      };

      setUser(updatedUser);
      localStorage.setItem('user_data', JSON.stringify(updatedUser));
    }
  }, [user, selectedClub, setUser, clubs]);

  return { clubs, selectedClub, handleSelectClub };
};
