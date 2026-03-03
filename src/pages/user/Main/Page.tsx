import styled from '@emotion/styled';
// import { useCallback, useState } from 'react';
// import { BannerSection } from '@/pages/user/Main/components/BannerSection';
// import { ClubListSection } from '@/pages/user/Main/components/ClubListSection';
// import { FiltersSection } from '@/pages/user/Main/components/FiltersSection';
// import type { RecruitStatus } from './types/club';
// import type { ClubCategoryEng } from '@/shared/types/club';

export const MainPage = () => {
  // const [categoryFilter, setCategoryFilter] = useState<ClubCategoryEng>('ALL');
  // const [recruitStatus, setRecruitStatus] = useState<RecruitStatus>('전체');
  // const [searchText, setSearchText] = useState('');

  // const handleCategoryFilter = useCallback((category: ClubCategoryEng) => {
  //   setCategoryFilter(category);
  // }, []);

  // const handleRecruitStatusFilter = useCallback((status: RecruitStatus) => {
  //   setRecruitStatus(status);
  // }, []);

  return (
    //임시
    <MaintenanceContainer>
      <MaintenanceMessage>서버 재정비 중입니다. 9:30AM 이후 이용 부탁드립니다.</MaintenanceMessage>
    </MaintenanceContainer>
  );

  // return (
  //   <Container>
  //     <BannerSection onChangeSearch={(s: string) => setSearchText(s)} />
  //     <FiltersSection
  //       selectedCategory={categoryFilter}
  //       selectedRecruitStatus={recruitStatus}
  //       onSelectCategory={handleCategoryFilter}
  //       onSelectStatus={handleRecruitStatusFilter}
  //     />
  //     <ClubListSection
  //       categoryFilter={categoryFilter}
  //       searchText={searchText}
  //       recruitStatus={recruitStatus}
  //     />
  //   </Container>
  // );
};

const MaintenanceContainer = styled.div({
  //임시
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  boxSizing: 'border-box',
});

const MaintenanceMessage = styled.div({
  //임시
  fontSize: '24px',
  fontWeight: '600',
  color: '#333',
  textAlign: 'center',
  padding: '20px',
});

// export const Container = styled.div({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px',
//   width: '100%',
//   maxWidth: '100vw',
//   boxSizing: 'border-box',
// });
