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
};

export const ClubListSection = ({ filter }: Props) => {
  const { data, isLoading, error } = useClub(filter);

  if (isLoading) return <div>로딩중입니다...</div>;
  if (error) return <div>에러발생 : {error.message}</div>;

  return (
    <ClubListContainer>
      <Grid>
        {data?.clubs.map((club) => (
          <ClubItem key={club.id}>
            <ClubCategoryText>{club.category}</ClubCategoryText>

            <ClubNameText>{club.name}</ClubNameText>
            <ClubIntroduction>{club.short_Introduction}</ClubIntroduction>
            <RecruitStatusBox status={club.recruit_status}>
              <RecruitStatusText status={club.recruit_status}>
                {club.recruit_status}
              </RecruitStatusText>
            </RecruitStatusBox>
          </ClubItem>
        ))}
      </Grid>
    </ClubListContainer>
  );
};
