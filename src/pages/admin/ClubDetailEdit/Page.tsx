import { ClubHeaderSection } from '@/shared/components/ClubDetailLayout/ClubHeaderSection';
import { ClubActivityPhotosEditSection } from './components/ClubActivityPhotosEditSection';
import { ClubDescriptionEditSection } from './components/ClubDescriptionEditSection';
import { ClubInfoSidebarEditSection } from './components/ClubInfoSidebarEditSection';
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
        <ClubActivityPhotosEditSection />
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
