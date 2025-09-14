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

type Props = {
  filter: ClubCategory;
  searchText: string;
};

export const ClubListSection = ({ filter, searchText }: Props) => {
  const { clubs, isLoading, error } = useClub(filter);

  if (isLoading) return <div>로딩중입니다...</div>;
  if (error) return <div>에러발생 : {error.message}</div>;
  const filteredClubs = searchText
    ? clubs?.filter((club) => club.name.includes(searchText))
    : clubs;

  return (
    <ClubListContainer>
      <Grid>
        {filteredClubs?.map((club) => (
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
