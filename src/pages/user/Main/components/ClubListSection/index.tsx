import { useNavigate } from 'react-router-dom';
import { useClub } from '@/pages/user/Main/hook/useClub';
import { searchClubs } from '@/pages/user/Main/utils/searchClubs.ts';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner.tsx';
import { Text } from '@/shared/components/Text';
import * as S from './Club.styled.ts';
import type { ClubCategoryEng } from '@/pages/user/Main/constant/clubCategory.ts';
import { engToKorCategory } from '../../utils/formatting.ts';
import type { Club } from '../../types/club.ts';

type Props = {
  filter: ClubCategoryEng;
  searchText: string;
};

export const ClubListSection = ({ filter, searchText }: Props) => {
  const { data: clubs, isLoading, error } = useClub(filter);
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러발생 : {error.message}</div>;

  const searchedClubs = searchClubs(clubs, searchText.replace(/\s+/g, ''));

  if (searchedClubs.length === 0)
    return (
      <S.ClubListContainer>
        <S.NoSearchResultContainer>
          <S.SearchImage
            src='/assets/noSearchResults.svg'
            alt='이미지 없음'
            width={100}
            height={100}
          ></S.SearchImage>
          <S.TextWrapper>
            <Text
              color={'#757575'}
              size={'xl'}
              weight={'regular'}
            >{`\`${searchText}\`검색 결과가 없습니다`}</Text>
            <Text
              color={'#7E8691'}
              size={'sm'}
            >{`동아리명, 카테고리, 동아리 소개로 검색해 보세요.`}</Text>
          </S.TextWrapper>
        </S.NoSearchResultContainer>
      </S.ClubListContainer>
    );

  return (
    <S.ClubListContainer>
      <S.Grid>
        {searchedClubs.map((club: Club) => (
          <S.ClubItem onClick={() => navigate(`/clubs/${club.id}`)} key={club.id}>
            <S.ClubCategoryText>{engToKorCategory[club.category]}</S.ClubCategoryText>

            <S.ClubNameText>{club.name}</S.ClubNameText>
            <S.ClubIntroduction>{club.shortIntroduction}</S.ClubIntroduction>
            <S.RecruitStatusBox status={club.recruitStatus}>
              <S.RecruitStatusText status={club.recruitStatus}>
                {club.recruitStatus}
              </S.RecruitStatusText>
            </S.RecruitStatusBox>
          </S.ClubItem>
        ))}
      </S.Grid>
    </S.ClubListContainer>
  );
};
