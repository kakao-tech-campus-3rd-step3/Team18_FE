import { useNavigate } from 'react-router-dom';
import { useClubFiltering } from '@/pages/user/Main/hooks/useClubFiltering.ts';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner.tsx';
import { engToKorCategory } from '@/utils/formatting.ts';
import * as S from './Club.styled.ts';
import NoSearchResult from './NoSearchResult.tsx';
import type { Club, RecruitStatus } from '@/pages/user/Main/types/club.ts';
import type { ClubCategoryEng } from '@/types/club';

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

  if (filteredClubs.length === 0)
    return NoSearchResult(filteredClubs, searchText, categoryFilter, filterStatus);

  return (
    <S.ClubListContainer>
      <S.Grid>
        {filteredClubs.map((club: Club) => (
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
