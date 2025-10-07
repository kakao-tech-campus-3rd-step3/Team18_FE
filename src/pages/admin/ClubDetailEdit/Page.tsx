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
import { useForm, FormProvider } from 'react-hook-form';
import type { ClubDetailEdit } from './types/clubDetailEdit';
import { fetchClubDetailEdit } from './api/clubDetailEdit';

export const ClubDetailEditPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const [club, setClub] = useState<ClubDetailEdit | null>(null);

  const methods = useForm<ClubDetailEdit>({
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (!clubId) return;
    fetchClubDetailEdit(clubId)
      .then((data) => {
        setClub(data);
        reset(data); 
      })
      .catch(console.error);
  }, [clubId, reset]);

  const onSubmit = (data: ClubDetailEdit) => {
    console.log('수정된 값 저장', data);
  };

  const handleCancel = () => {
    console.log('취소');
  };

  if (!club) return <div>Loading...</div>;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <ContentLeft>
            <ClubHeaderSection clubName={club.clubName} category={club.category} />
            <ClubActivityPhotosEditSection images={club.introductionImages} />
            <ClubDescriptionEditSection />
            {errors.presidentPhoneNumber && (
              <ErrorMessage>{errors.presidentPhoneNumber.message}</ErrorMessage>
            )}

            <ButtonGroup>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? '저장 중...' : '수정하기'}
              </Button>
              <Button variant="light" onClick={handleCancel}>
                취소
              </Button>
            </ButtonGroup>

            {isSubmitSuccessful && <SuccessMessage>저장 완료!</SuccessMessage>}
          </ContentLeft>

          <ContentRight>
            <ClubInfoSidebarEditSection />
          </ContentRight>
        </Layout>
      </form>
    </FormProvider>
  );
};

const ButtonGroup = styled.div({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '2rem',
});

const ErrorMessage = styled.span({
  color: 'red',
  marginTop: '0.5rem',
  display: 'block',
});

const SuccessMessage = styled.span({
  color: 'green',
  marginTop: '1rem',
  display: 'block',
});
