import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/shared/components/Button';
import { PageHeader } from '@/shared/components/PageHeader';
import { Layout, ContentLeft, ContentRight } from '@/shared/components/PageHeader/index.styled';
import { theme } from '@/styles/theme';
import { engToKorCategory } from '@/utils/formatting';
import { updateClubDetailEdit } from './api/clubDetailEdit';
import { updateClubImages } from './api/clubImagesEdit';
import { ClubActivityPhotosEditSection } from './components/ClubActivityPhotosEditSection';
import { ClubDescriptionEditSection } from './components/ClubDescriptionEditSection';
import { ClubInfoSidebarEditSection } from './components/ClubInfoSidebarEditSection';
import { ClubShortIntroductionEditSection } from './components/ClubShortIntroductionEditSection';
import { useClubDetailEdit } from './hooks/useClubDetailEdit';
import type { ClubDetailUpdatePayload } from './types/clubDetailEdit';
import type { ClubCategoryEng } from '@/types/club';

export const ClubDetailEditPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const { data: club, isLoading, error } = useClubDetailEdit(clubId ?? '');

  const methods = useForm<ClubDetailUpdatePayload>({
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

  const navigate = useNavigate();

  const onSubmit = async (data: ClubDetailUpdatePayload) => {
    const payload = { ...data };

    updateClubDetailEdit(clubId ?? '', payload)
      .then(() => {
        toast.success('수정 성공!', {
          style: { backgroundColor: theme.colors.primary, color: 'white' },
          duration: 1000,
          onAutoClose: () => navigate(`/clubs/${clubId}`),
        });
      })
      .catch(() => {
        toast.error('수정 실패!', {
          duration: 1000,
          style: { backgroundColor: 'white', color: theme.colors.error },
        });
      });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  if (!club) return null;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <ContentLeft>
            <PageHeader
              clubName={club.clubName}
              category={
                club.category in engToKorCategory ? (club.category as ClubCategoryEng) : 'ALL'
              }
            />
            <ClubShortIntroductionEditSection />

            <ClubActivityPhotosEditSection
              clubId={club.clubId}
              images={club.introductionImages}
              onUpload={(files: File[]) =>
                updateClubImages(club.clubId, files, club.introductionImages)
              }
            />

            <ClubDescriptionEditSection />
            {errors.presidentPhoneNumber && (
              <ErrorMessage>{errors.presidentPhoneNumber.message}</ErrorMessage>
            )}

            <ButtonGroup>
              <Button type='submit' disabled={isSubmitting}>
                {isSubmitting ? '저장 중...' : '수정하기'}
              </Button>
              <Button variant='light' onClick={() => navigate(-1)}>
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
