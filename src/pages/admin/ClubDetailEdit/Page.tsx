import styled from '@emotion/styled';
import _ from 'lodash';
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
import { ClubActivityPhotosEditSection } from './components/ClubActivityPhotosEditSection';
import { ClubDescriptionEditSection } from './components/ClubDescriptionEditSection';
import { ClubInfoSidebarEditSection } from './components/ClubInfoSidebarEditSection';
import { ClubShortIntroductionEditSection } from './components/ClubShortIntroductionEditSection';
import { useClubActivityPhotos } from './hooks/useClubActivityPhotos';
import { useClubDetailEdit } from './hooks/useClubDetailEdit';

import type { ClubDetailEdit, ClubDetailUpdatePayload } from './types/clubDetailEdit';
import type { ClubCategoryEng } from '@/shared/types/club';

export const ClubDetailEditPage = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const {
    isOpen: isClubPagePopupOpen,
    confirm: confirmClubPagePopup,
    reopen: reopenClubPagePopup,
  } = useOnboardingPopup('club-page', { triggerMode: 'pageVisit' });
  const club = useClubDetailEdit(clubId ?? '');
  const {
    photos,
    handleAdd: handleAddPhoto,
    handleDelete: handleDeletePhoto,
    saveImages,
  } = useClubActivityPhotos(club.introductionImages);

  const methods = useForm<ClubDetailUpdatePayload>({
    mode: 'onTouched',
    defaultValues: club,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const navigate = useNavigate();

  const onSubmit = async (data: ClubDetailUpdatePayload) => {
    // defaultValues로 들어온 진입 시점의 introductionImages는 이미지 전용 API에서만 다룬다.
    const payload: ClubDetailUpdatePayload = _.omit(data as ClubDetailEdit, 'introductionImages');

    try {
      await saveImages(club.clubId);
    } catch (error) {
      toast.error((error as Error).message || '활동 사진 저장에 실패했습니다.');
      return;
    }

    try {
      await updateClubDetailEdit(clubId ?? '', payload);
    } catch (error) {
      toast.error((error as Error).message || '수정 실패!');
      return;
    }

    toast.success('수정 성공!', () => navigate(`/clubs/${clubId}`));
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
                    photos={photos}
                    onAdd={handleAddPhoto}
                    onDelete={handleDeletePhoto}
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
