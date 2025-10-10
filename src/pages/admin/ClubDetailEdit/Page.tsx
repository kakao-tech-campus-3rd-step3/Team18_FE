import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import { ClubHeaderSection } from '@/shared/components/ClubDetailLayout/ClubHeaderSection';
import {
  Layout,
  ContentLeft,
  ContentRight,
} from '@/shared/components/ClubDetailLayout/index.styled';
import { updateClubDetailEdit } from './api/clubDetailEdit';
import { ClubActivityPhotosEditSection } from './components/ClubActivityPhotosEditSection';
import { ClubDescriptionEditSection } from './components/ClubDescriptionEditSection';
import { ClubInfoSidebarEditSection } from './components/ClubInfoSidebarEditSection';
import { ClubShortIntroductionEditSection } from './components/ClubShortIntroductionEditSection';
import { useClubDetailEdit } from './hook/useClubDetailEdit';
import type { ClubDetailEdit } from './types/clubDetailEdit';

export const ClubDetailEditPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const { data: club, isLoading, error } = useClubDetailEdit(clubId ?? '');

  const methods = useForm<ClubDetailEdit>({
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (club) reset(club);
  }, [club, reset]);

  const onSubmit = async (data: ClubDetailEdit) => {
    try {
      await updateClubDetailEdit(clubId ?? '', data);
      alert('수정이 완료되었습니다!');
    } catch (error) {
      console.error(error);
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  if (!club) return null;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <ContentLeft>
            <ClubHeaderSection clubName={club.clubName} category={club.category} />
            <ClubShortIntroductionEditSection />
            <ClubActivityPhotosEditSection images={club.introductionImages} />
            <ClubDescriptionEditSection />
            {errors.presidentPhoneNumber && (
              <ErrorMessage>{errors.presidentPhoneNumber.message}</ErrorMessage>
            )}

            <ButtonGroup>
              <Button type='submit' disabled={isSubmitting}>
                {isSubmitting ? '저장 중...' : '수정하기'}
              </Button>
              <Button variant='light' to={`/admin/clubs/dashboard`}>
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

const ErrorMessage = styled.span(({ theme }) => ({
  color: theme.colors.error,
  marginTop: '0.5rem',
  display: 'block',
}));

const SuccessMessage = styled.span(({ theme }) => ({
  color: theme.colors.success,
  marginTop: '1rem',
  display: 'block',
}));
