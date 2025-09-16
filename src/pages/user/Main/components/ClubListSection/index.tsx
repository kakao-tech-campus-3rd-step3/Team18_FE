import { useClub } from '@/pages/user/Main/hook/useClub';
import {
  ClubCategoryText,
  ClubIntroduction,
  ClubItem,
  ClubListContainer,
  ClubNameText,
  Grid,
  NoSearchResultContainer,
  RecruitStatusBox,
  RecruitStatusText,
  SearchImage,
  TextWrapper,
} from '@/pages/user/Main/components/ClubListSection/Club.styled.ts';
import type { ClubCategory } from '@/pages/user/Main/constant/clubCategory.ts';
import { searchClubs } from '@/pages/user/Main/utils/searchClubs.ts';
import { Text } from '@/shared/components/Text';

type Props = {
  filter: ClubCategory;
  searchText: string;
};

export const ClubListSection = ({ filter, searchText }: Props) => {
  const { clubs, isLoading, error } = useClub(filter);

  if (isLoading) return <div>로딩중입니다...</div>;
  if (error) return <div>에러발생 : {error.message}</div>;

  const searchedClubs = searchClubs(clubs, searchText.replace(/\s+/g, ''));

  if (searchedClubs.length === 0)
    return (
      <ClubListContainer>
        <NoSearchResultContainer>
          <SearchImage
            src='/public/assets/noSearchResults.svg'
            alt='이미지 없음'
            width={100}
            height={100}
          ></SearchImage>
          <TextWrapper>
            <Text
              color={'#757575'}
              size={'xl'}
              weight={'regular'}
            >{`\`${searchText}\`검색 결과가 없습니다`}</Text>
            <Text
              color={'#7E8691'}
              size={'sm'}
            >{`동아리명, 카테고리, 동아리 소개로 검색해 보세요.`}</Text>
          </TextWrapper>
        </NoSearchResultContainer>
      </ClubListContainer>
    );

  return (
    <ClubListContainer>
      <Grid>
        {searchedClubs.map((club) => (
          <ClubItem key={club.id}>
            <ClubCategoryText>{club.category}</ClubCategoryText>

            <ClubNameText>{club.name}</ClubNameText>
            <ClubIntroduction>{club.shortIntroduction}</ClubIntroduction>
            <RecruitStatusBox status={club.recruitStatus}>
              <RecruitStatusText status={club.recruitStatus}>
                {club.recruitStatus}
              </RecruitStatusText>
            </RecruitStatusBox>
          </ClubItem>
        ))}
      </Grid>
    </ClubListContainer>
  );
};
