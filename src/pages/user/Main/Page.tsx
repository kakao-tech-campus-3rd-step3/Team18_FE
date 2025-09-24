import { ClubListSection } from '@/pages/user/Main/components/ClubListSection';
import { BannerSection } from '@/pages/user/Main/components/BannerSection';
import { MemoizedClubCategorySection } from '@/pages/user/Main/components/ClubCategorySection';
import { useCallback, useState } from 'react';
import type { ClubCategoryEng } from '@/pages/user/Main/constant/clubCategory.ts';

export const MainPage = () => {
  const [filter, setFilter] = useState<ClubCategoryEng>('all');
  const [searchText, setSearchText] = useState('');

  const handleFilter = useCallback((c: ClubCategoryEng) => {
    setFilter(c);
  }, []);

  return (
    <>
      <BannerSection onChange={(s: string) => setSearchText(s)} />
      <MemoizedClubCategorySection selected={filter} onSelect={handleFilter} />
      <ClubListSection filter={filter} searchText={searchText} />
    </>
  );
};
