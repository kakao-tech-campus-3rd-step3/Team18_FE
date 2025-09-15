import { useClub } from '@/pages/user/Main/hook/useClub';
import {
  ClubCategoryText,
  ClubIntroduction,
  ClubItem,
  ClubListContainer,
  ClubNameText,
  Grid,
  RecruitStatusBox,
  RecruitStatusText,
} from '@/pages/user/Main/components/ClubListSection/Club.styled.tsx';
import type { ClubCategory } from '@/pages/user/Main/constant/clubCategory.ts';
import { searchClubs } from '@/pages/user/Main/utils/searchClubs.ts';

type Props = {
  filter: ClubCategory;
  searchText: string;
};

export const ClubListSection = ({ filter, searchText }: Props) => {
  const { clubs, isLoading, error } = useClub(filter);

  if (isLoading) return <div>로딩중입니다...</div>;
  if (error) return <div>에러발생 : {error.message}</div>;

  const searchedClubs = searchClubs(clubs, searchText.replace(/\s+/g, ''));

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
