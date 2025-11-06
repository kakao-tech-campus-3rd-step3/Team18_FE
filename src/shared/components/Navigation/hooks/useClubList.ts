import { useEffect, useState } from 'react';
import { apiInstance } from '@/api/initInstance';
import { useAuth } from '@/providers/auth';
import type { ClubMemberInfo } from '@/pages/admin/Login/api/auth';

export const useClubList = () => {
  const { user } = useAuth();
  const [clubs, setClubs] = useState<ClubMemberInfo[]>([]);
  const [selectedClub, setSelectedClub] = useState<ClubMemberInfo | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchClubs = async () => {
      try {
        const res = await apiInstance.get('/clubs/my');
        const userData = res.data;
        const userClubs = userData?.clubs || [];

        setClubs(userClubs);
        if (userClubs.length > 0) setSelectedClub(userClubs[0]);
      } catch (err) {
        console.error('Failed to fetch clubs:', err);
      }
    };

    fetchClubs();
  }, [user]);

  const handleSelectClub = (club: ClubMemberInfo) => {
    setSelectedClub(club);
  };

  return { clubs, selectedClub, handleSelectClub };
};
