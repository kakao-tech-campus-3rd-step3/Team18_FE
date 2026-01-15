import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { BannerSection } from '@/pages/user/Main/components/BannerSection';
import { ClubListSection } from '@/pages/user/Main/components/ClubListSection';
import { FiltersSection } from '@/pages/user/Main/components/FiltersSection';
import type { RecruitStatus } from './types/club';
import type { ClubCategoryEng } from '@/shared/types/club';

export const MainPage = () => {
  const [categoryFilter, setCategoryFilter] = useState<ClubCategoryEng>('ALL');
  const [recruitStatus, setRecruitStatus] = useState<RecruitStatus>('전체');
  const [searchText, setSearchText] = useState('');

  const handleCategoryFilter = useCallback((category: ClubCategoryEng) => {
    setCategoryFilter(category);
  }, []);

  const handleRecruitStatusFilter = useCallback((status: RecruitStatus) => {
    setRecruitStatus(status);
  }, []);

  return (
    <Container>
      <BannerSection onChangeSearch={(s: string) => setSearchText(s)} />
      <FiltersSection
        selectedCategory={categoryFilter}
        selectedRecruitStatus={recruitStatus}
        onSelectCategory={handleCategoryFilter}
        onSelectStatus={handleRecruitStatusFilter}
      />
      <ClubListSection
        categoryFilter={categoryFilter}
        searchText={searchText}
        recruitStatus={recruitStatus}
      />
    </Container>
  );
};

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  maxWidth: '100vw',
  boxSizing: 'border-box',
});
