import styled from '@emotion/styled';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '@/app/providers/auth';
import { BannerSection } from '@/pages/user/Main/components/BannerSection';
import { ClubListSection } from '@/pages/user/Main/components/ClubListSection';
import { FiltersSection } from '@/pages/user/Main/components/FiltersSection';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { OnboardingPopup } from '@/shared/components/OnboardingPopup';
import { useOnboardingPopup } from '@/shared/hooks/useOnboardingPopup';
import { ROLE } from '@/shared/types/navigation';
import type { RecruitStatus } from './types/club';
import type { ClubCategoryEng } from '@/shared/types/club';

const VALID_CATEGORIES: ClubCategoryEng[] = [
  'ALL',
  'LITERATURE',
  'STUDY',
  'SPORTS',
  'RELIGION',
  'VOLUNTEER',
];

const ENG_TO_KOR_STATUS: Record<string, RecruitStatus> = {
  RECRUITING: '모집중',
  CLOSED: '모집 종료',
  PREPARING: '모집 준비중',
  NOT_SCHEDULED: '모집 일정 미정',
};

export const MainPage = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === ROLE.CLUB_ADMIN || user?.role === ROLE.CLUB_EXECUTIVE;
  const { isOpen: isDashboardPopupOpen, confirm: confirmDashboardPopup } = useOnboardingPopup(
    'dashboard',
    { triggerMode: 'login' },
  );

  const [searchParams] = useSearchParams();

  const rawCategory = searchParams.get('category') as ClubCategoryEng | null;
  const categoryFilter: ClubCategoryEng =
    rawCategory && VALID_CATEGORIES.includes(rawCategory) ? rawCategory : 'ALL';

  const rawStatus = searchParams.get('status');
  const recruitStatus: RecruitStatus =
    rawStatus && ENG_TO_KOR_STATUS[rawStatus] ? ENG_TO_KOR_STATUS[rawStatus] : '전체';

  const [searchText, setSearchText] = useState('');

  return (
    <Container>
      {isAdmin && (
        <OnboardingPopup
          isOpen={isDashboardPopupOpen}
          images={[1, 2, 3, 4, 5, 6].map((n) => `/assets/onboarding/dashboard/${n}.webp`)}
          imageAlt='지원자 관리 가이드'
          onConfirm={confirmDashboardPopup}
        />
      )}
      <BannerSection onChangeSearch={(s: string) => setSearchText(s)} />
      <FiltersSection selectedCategory={categoryFilter} selectedRecruitStatus={recruitStatus} />
      <Suspense fallback={<LoadingSpinner />}>
        <ClubListSection
          categoryFilter={categoryFilter}
          searchText={searchText}
          recruitStatus={recruitStatus}
        />
      </Suspense>
    </Container>
  );
};

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  maxWidth: '100vw',
  boxSizing: 'border-box',
});
