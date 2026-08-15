import { BsEye, BsFillPatchCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useClubFiltering } from '@/pages/user/Main/hooks/useClubFiltering.ts';
import { engToKorCategory } from '@/shared/utils/formatting.ts';
import * as S from './Club.styled.ts';
import NoSearchResult from './NoSearchResult.tsx';
import type { Club, RecruitStatus } from '@/pages/user/Main/types/club.ts';
import type { ClubCategoryEng } from '@/shared/types/club';

type ClubFilteringProps = {
  categoryFilter: ClubCategoryEng;
  searchText: string;
  recruitStatus?: RecruitStatus;
};

export const ClubListSection = ({
  categoryFilter,
  searchText,
  recruitStatus,
}: ClubFilteringProps) => {
  const navigate = useNavigate();

  const filterStatus = recruitStatus === '전체' ? undefined : recruitStatus;
  const filteredClubs = useClubFiltering(categoryFilter, searchText, filterStatus);

  const isDefaultSort = !searchText && categoryFilter === 'ALL' && !filterStatus;
  const sortedClubs = isDefaultSort
    ? [...filteredClubs].sort((a, b) => Number(!!b.isRegistered) - Number(!!a.isRegistered))
    : filteredClubs;

  if (sortedClubs.length === 0)
    return NoSearchResult(filteredClubs, searchText, categoryFilter, filterStatus);

  return (
    <S.ClubListContainer>
      <S.Grid>
        {sortedClubs.map((club: Club) => (
          <S.ClubItem onClick={() => navigate(`/clubs/${club.id}`)} key={club.id}>
            <S.ClubHeader>
              <S.ClubNameContainer>
                <S.ClubNameText>{club.name}</S.ClubNameText>
                {club.isRegistered && (
                  <S.VerifiedBadge>
                    <BsFillPatchCheckFill size={14} />
                  </S.VerifiedBadge>
                )}
              </S.ClubNameContainer>
              {!!club.currentViewerCount && (
                <S.LiveViewerBadge title='현재 이 동아리를 보고 있는 사람 수'>
                  <S.LiveDot />
                  {club.currentViewerCount}명
                </S.LiveViewerBadge>
              )}
            </S.ClubHeader>
            <S.ClubIntroduction>{club.shortIntroduction}</S.ClubIntroduction>
            <S.StatusContainer>
              <S.CategoryStatusBox>
                <S.CategoryStatusText>
                  {club.category in engToKorCategory
                    ? engToKorCategory[club.category as ClubCategoryEng]
                    : '전체'}
                </S.CategoryStatusText>
              </S.CategoryStatusBox>
              <S.RecruitStatusBox status={club.recruitStatus}>
                <S.RecruitStatusText status={club.recruitStatus}>
                  {club.recruitStatus}
                </S.RecruitStatusText>
              </S.RecruitStatusBox>
              {club.todayViewCount !== undefined && (
                <S.TodayViewCount title='오늘 조회수'>
                  <BsEye size={14} />
                  오늘 {club.todayViewCount.toLocaleString()}
                </S.TodayViewCount>
              )}
            </S.StatusContainer>
          </S.ClubItem>
        ))}
      </S.Grid>
    </S.ClubListContainer>
  );
};
