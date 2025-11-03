import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { BannerSection } from '@/pages/user/Main/components/BannerSection';
import { ClubListSection } from '@/pages/user/Main/components/ClubListSection';
import type { RecruitStatus } from './types/club';
import type { ClubCategoryEng } from '@/types/club';

export const MainPage = () => {
  const [categoryFilter, setCategoryFilter] = useState<ClubCategoryEng>('ALL');
  const [recruitStatus, setRecruitStatus] = useState<RecruitStatus | undefined>();
  const [searchText, setSearchText] = useState('');

  const handleCategoryFilter = useCallback((category: ClubCategoryEng) => {
    setCategoryFilter(category);
  }, []);

  const handleRecruitStatusFilter = useCallback((status: RecruitStatus) => {
    setRecruitStatus(status);
  }, []);

  return (
    <Container>
      <BannerSection
        selectedCategory={categoryFilter}
        selectedRecruitStatus={recruitStatus}
        onSelectCategory={handleCategoryFilter}
        onSelectStatus={handleRecruitStatusFilter}
        onChangeSearch={(s: string) => setSearchText(s)}
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
  gap: '60px',
});
