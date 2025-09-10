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

export const ClubListSection = () => {
  const { data, isLoading, error } = useClub();

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
