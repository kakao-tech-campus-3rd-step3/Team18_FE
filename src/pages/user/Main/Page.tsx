import { useCallback, useState } from 'react';
import { BannerSection } from '@/pages/user/Main/components/BannerSection';
import { ClubListSection } from '@/pages/user/Main/components/ClubListSection';
import type { ClubCategoryEng } from '@/pages/user/Main/constant/clubCategory.ts';

export const MainPage = () => {
  const [filter, setFilter] = useState<ClubCategoryEng>('ALL');
  const [searchText, setSearchText] = useState('');

  const handleFilter = useCallback((c: ClubCategoryEng) => {
    setFilter(c);
  }, []);

  return (
    <>
      <BannerSection onSelect={handleFilter} onChange={(s: string) => setSearchText(s)} />
      <ClubListSection filter={filter} searchText={searchText} />
    </>
  );
};
