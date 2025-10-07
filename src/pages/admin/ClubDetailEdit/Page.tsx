import styled from '@emotion/styled';
import { Button } from '@/shared/components/Button';
import { ClubHeaderSection } from '@/shared/components/ClubDetailLayout/ClubHeaderSection';
import {
  Layout,
  ContentLeft,
  ContentRight,
} from '@/shared/components/ClubDetailLayout/index.styled';
import { ClubActivityPhotosEditSection } from './components/ClubActivityPhotosEditSection';
import { ClubDescriptionEditSection } from './components/ClubDescriptionEditSection';
import { ClubInfoSidebarEditSection } from './components/ClubInfoSidebarEditSection';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { ClubDetailEdit } from './types/clubDetailEdit';
import { fetchClubDetailEdit } from './api/clubDetailEdit';

export const ClubDetailEditPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const [club, setClub] = useState<ClubDetailEdit | null>(null);

  useEffect(() => {
    if (!clubId) return;
    fetchClubDetailEdit(clubId)
      .then(setClub)
      .catch(console.error);
  }, [clubId]);

  const handleSave = () => {
    console.log('수정된 값 저장');
  };

  const handleCancel = () => {
    console.log('취소');
  };

  if (!club) return <div>Loading...</div>;

  return (
    <Layout>
      <ContentLeft>
        <ClubHeaderSection clubName={club.clubName} category={club.category} />
        <ClubActivityPhotosEditSection images={club.introductionImages} />
        <ClubDescriptionEditSection
          introductionOverview={club.introductionOverview}
          introductionActivity={club.introductionActivity}
          introductionIdeal={club.introductionIdeal}
        />
        <ButtonGroup>
          <Button onClick={handleSave}>수정하기</Button>
          <Button variant='light' onClick={handleCancel}>
            취소
          </Button>
        </ButtonGroup>
      </ContentLeft>
      <ContentRight>
        <ClubInfoSidebarEditSection
          presidentName={club.presidentName}
          presidentPhoneNumber={club.presidentPhoneNumber}
          location={club.location}
          recruitStart={club.recruitStart}
          recruitEnd={club.recruitEnd}
          regularMeetingInfo={club.regularMeetingInfo}
          applicationNotice={club.applicationNotice}
        />
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
