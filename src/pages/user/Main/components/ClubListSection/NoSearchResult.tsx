import { type Club, type RecruitStatus } from '@/pages/user/Main/types/club.ts';
import { getNoSearchMessage } from '@/pages/user/Main/utils/searchClubs.ts';
import { Text } from '@/shared/components/Text';
import * as S from './Club.styled.ts';
import type { ClubCategoryEng } from '@/shared/types/club.ts';

const NoSearchResult = (
  filteredClubs: Club[],
  searchText: string,
  categoryFilter: ClubCategoryEng,
  recruitStatus: RecruitStatus | undefined,
) => {
  if (filteredClubs.length > 0) return null;

  const mainText = getNoSearchMessage(searchText, categoryFilter, recruitStatus);
  const subText = '동아리명, 카테고리, 동아리 소개로 검색해 보세요.';

  return (
    <S.EmptyStateWrapper>
      <S.NoSearchResultContainer>
        <S.SearchImage
          src='/assets/noSearchResults.svg'
          alt='이미지 없음'
          width={100}
          height={100}
        />
        <S.TextWrapper>
          <Text color='#757575' size='xl' weight='regular'>
            {mainText}
          </Text>
          <Text color='#7E8691' size='sm'>
            {subText}
          </Text>
        </S.TextWrapper>
      </S.NoSearchResultContainer>
    </S.EmptyStateWrapper>
  );
};

export default NoSearchResult;
