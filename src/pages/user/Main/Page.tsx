import { ClubListSection } from '@/pages/user/Main/components/ClubListSection';
import { BannerSection } from '@/pages/user/Main/components/BannerSection';
import { ClubCategorySection } from '@/pages/user/Main/components/ClubCategorySection';
import { useState } from 'react';
import type { ClubCategory } from '@/pages/user/Main/constant/clubCategory.ts';

export const MainPage = () => {
  const [filter, setFilter] = useState<ClubCategory>('전체');
  return (
    <>
      <BannerSection />
      <ClubCategorySection selected={filter} onSelect={(c: ClubCategory) => setFilter(c)} />
      <ClubListSection filter={filter} />
    </>
  );
};
