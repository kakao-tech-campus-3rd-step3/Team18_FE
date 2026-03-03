import { useNavigate } from 'react-router-dom';
import { useClubFiltering } from '@/pages/user/Main/hooks/useClubFiltering.ts';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner.tsx';
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

  const {
    data: filteredClubs,
    isLoading,
    error,
  } = useClubFiltering(categoryFilter, searchText, filterStatus);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>{error.message}</div>;

  // 기본 정렬: 검색이나 필터가 적용되지 않았을 때 isRegistered가 true인 동아리를 상위에 표시
  const isDefaultSort = !searchText && categoryFilter === 'ALL' && !filterStatus;
  const sortedClubs = isDefaultSort
    ? [...filteredClubs].sort((a, b) => {
        if (a.isRegistered === b.isRegistered) return 0;
        return a.isRegistered ? -1 : 1;
      })
    : filteredClubs;

  if (sortedClubs.length === 0)
    return NoSearchResult(filteredClubs, searchText, categoryFilter, filterStatus);

  return (
    <S.ClubListContainer>
      <S.Grid>
        {sortedClubs.map((club: Club) => (
          <S.ClubItem onClick={() => navigate(`/clubs/${club.id}`)} key={club.id}>
            <S.ClubNameText>{club.name}</S.ClubNameText>
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
            </S.StatusContainer>
          </S.ClubItem>
        ))}
      </S.Grid>
    </S.ClubListContainer>
  );
};
