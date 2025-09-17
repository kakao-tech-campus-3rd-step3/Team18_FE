import { ClubHeaderSection } from '@/shared/components/ClubDetailLayout/ClubHeaderSection';
// import { ClubActivityPhotosSection } from './components/ClubActivityPhotosSection';
import { ClubDescriptionEditSection } from './components/ClubDescriptionEditSection';
// import { ClubReviewsSection } from './components/ClubReviewsSection';
// import { ClubInfoSidebarSection } from './components/ClubInfoSidebarSection';
import {
  Layout,
  ContentLeft,
  ContentRight,
} from '@/shared/components/ClubDetailLayout/index.styled';
import { mockClubDetail } from './components/mock';
import { Button } from '@/shared/components/Button';
import styled from '@emotion/styled';

export const ClubDetailEditPage = () => {
  const handleSave = () => {
    console.log('수정된 값 저장');
  };

  const handleCancel = () => {
    console.log('취소');
  };

  return (
    <Layout>
      <ContentLeft>
        <ClubHeaderSection clubName={mockClubDetail.clubName} category={mockClubDetail.category} />
        {/* <ClubActivityPhotosSection /> */}
        <ClubDescriptionEditSection />
        {/* <ClubReviewsSection /> */}
        <ButtonGroup>
          <Button onClick={handleSave}>수정하기</Button>
          <Button variant='light' onClick={handleCancel}>
            취소
          </Button>
        </ButtonGroup>
      </ContentLeft>
      <ContentRight>{/* <ClubInfoSidebarSection /> */}</ContentRight>
    </Layout>
  );
};

const ButtonGroup = styled.div({
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
});
