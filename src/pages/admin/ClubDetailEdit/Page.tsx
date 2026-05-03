import styled from '@emotion/styled';
import { useForm, FormProvider } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import { TwoColumnLayout } from '@/shared/components/Layout/TwoColumnLayout';
import { OnboardingPopup } from '@/shared/components/OnboardingPopup';
import { PageHeader } from '@/shared/components/PageHeader';
import { useOnboardingPopup } from '@/shared/hooks/useOnboardingPopup';
import { engToKorCategory } from '@/shared/utils/formatting';
import { toast } from '@/shared/utils/toast';
import { updateClubDetailEdit } from './api/clubDetailEdit';
import { updateClubImages } from './api/clubImagesEdit';
import { ClubActivityPhotosEditSection } from './components/ClubActivityPhotosEditSection';
import { ClubDescriptionEditSection } from './components/ClubDescriptionEditSection';
import { ClubInfoSidebarEditSection } from './components/ClubInfoSidebarEditSection';
import { ClubShortIntroductionEditSection } from './components/ClubShortIntroductionEditSection';
import { useClubDetailEdit } from './hooks/useClubDetailEdit';

import type { ClubDetailUpdatePayload } from './types/clubDetailEdit';
import type { ClubCategoryEng } from '@/shared/types/club';

export const ClubDetailEditPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const {
    isOpen: isClubPagePopupOpen,
    confirm: confirmClubPagePopup,
    reopen: reopenClubPagePopup,
  } = useOnboardingPopup('club-page', { triggerMode: 'pageVisit' });
  const club = useClubDetailEdit(clubId ?? '');

  const methods = useForm<ClubDetailUpdatePayload>({
    mode: 'onTouched',
    defaultValues: club,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const navigate = useNavigate();

  const onSubmit = async (data: ClubDetailUpdatePayload) => {
    const payload = { ...data };

    updateClubDetailEdit(clubId ?? '', payload)
      .then(() => {
        toast.success('수정 성공!', () => navigate(`/clubs/${clubId}`));
      })
      .catch((error: Error) => {
        toast.error(error.message || '수정 실패!');
      });
  };

  return (
    <>
      <OnboardingPopup
        isOpen={isClubPagePopupOpen}
        images={[1, 2, 3].map((n) => `/assets/onboarding/club-page/${n}.webp`)}
        imageAlt='동아리페이지 관리 가이드'
        onConfirm={confirmClubPagePopup}
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TwoColumnLayout
            left={
              <>
                <PageHeader
                  clubName={club.clubName}
                  category={
                    club.category in engToKorCategory ? (club.category as ClubCategoryEng) : 'ALL'
                  }
                  onOpenGuide={reopenClubPagePopup}
                />
                <ClubShortIntroductionEditSection />
                <div style={{ pointerEvents: isClubPagePopupOpen ? 'none' : undefined }}>
                  <ClubActivityPhotosEditSection
                    clubId={club.clubId}
                    images={club.introductionImages}
                    onUpload={(files: File[]) =>
                      updateClubImages(club.clubId, files, club.introductionImages)
                    }
                  />
                </div>
                <ClubDescriptionEditSection />
                {errors.presidentPhoneNumber && (
                  <ErrorMessage>{errors.presidentPhoneNumber.message}</ErrorMessage>
                )}

                <ButtonGroup>
                  <Button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? '저장 중...' : '수정하기'}
                  </Button>
                  <Button variant='light' to={`/admin/clubs/${clubId}/dashboard`}>
                    취소
                  </Button>
                </ButtonGroup>

                {isSubmitSuccessful && <SuccessMessage>저장 완료!</SuccessMessage>}
              </>
            }
            right={
              <>
                <ClubInfoSidebarEditSection />
              </>
            }
          />
        </form>
      </FormProvider>
    </>
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
