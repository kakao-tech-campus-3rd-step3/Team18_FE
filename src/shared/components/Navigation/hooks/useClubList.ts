import { useEffect, useState } from 'react';
import { fetchClubList, type ClubInfo } from '../api/navigation';

export const useClubList = () => {
  const [clubs, setClubs] = useState<ClubInfo[]>([]);
  const [selectedClub, setSelectedClub] = useState<ClubInfo | null>(null);

  useEffect(() => {
    const getClubs = async () => {
      try {
        const list = await fetchClubList();
        setClubs(list);
        if (list.length > 0) setSelectedClub(list[0]);
      } catch (err) {
        console.error('동아리 목록 불러오기 실패:', err);
      }
    };
    getClubs();
  }, []);

  const handleSelectClub = (club: ClubInfo) => {
    setSelectedClub(club);
  };

  return { clubs, selectedClub, handleSelectClub };
};
