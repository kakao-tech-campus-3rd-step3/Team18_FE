import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';
import { ClubHeaderSection } from '@/shared/components/ClubDetailLayout/ClubHeaderSection';
// import { ClubActivityPhotosSection } from './components/ClubActivityPhotosSection';
import {
  Layout,
  ContentLeft,
  ContentRight,
} from '@/shared/components/ClubDetailLayout/index.styled';
import { ClubDescriptionEditSection } from './components/ClubDescriptionEditSection';
import { ClubInfoSidebarEditSection } from './components/ClubInfoSidebarEditSection';
import { mockClubDetail } from './components/mock';

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
        <ButtonGroup>
          <Button onClick={handleSave}>수정하기</Button>
          <Button variant='light' onClick={handleCancel}>
            취소
          </Button>
        </ButtonGroup>
      </ContentLeft>
      <ContentRight>
        <ClubInfoSidebarEditSection />
      </ContentRight>
    </Layout>
  );
};

const ButtonGroup = styled.div({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '2rem',
});
