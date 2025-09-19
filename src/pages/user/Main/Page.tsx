import { ClubListSection } from '@/pages/user/Main/components/ClubListSection';
import { BannerSection } from '@/pages/user/Main/components/BannerSection';
import { MemoizedClubCategorySection } from '@/pages/user/Main/components/ClubCategorySection';
import { useCallback, useState } from 'react';
import type { ClubCategory } from '@/pages/user/Main/constant/clubCategory.ts';

export const MainPage = () => {
  const [filter, setFilter] = useState<ClubCategory>('전체');
  const [searchText, setSearchText] = useState('');

  const handleFilter = useCallback((c: ClubCategory) => {
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
